import {
  FetcherFnRequest,
  FetcherError,
  canHaveBody,
  mergeConfig
} from '@alicloud/fetcher';
import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

import {
  IMfaData,
  INewSubAccountRisk,
  TBindMfaPayload,
  TVerifyMfaPayload,
  ISubAccountRiskInfo
} from '../../../../types';
import {
  EStep,
  ESlsResultType
} from '../../../../const';
import intl from '../../../../intl';
import {
  slsSubRisk,
  slsSubRiskAuthMfa,
  slsSubRiskBindMfa,
  slsSubRiskGetMfaAInfo
} from '../../../sls';
import generateAuthMfaInfoFailDialog from '../../../generate-auth-mfa-info-fail-dialog';
import getAuthMfaInfo from '../../../get-auth-mfa-info';

import {
  ESubmitType,
  IParams
} from './_type';

interface IProps extends Pick<ISubAccountRiskInfo, 'verifyType' | 'validators'>, Pick<IParams, 'riskConfig' | 'fetcherConfig'>{
  request: FetcherFnRequest;
  accountId: string;
}

interface IDataForUpdate extends Pick<INewSubAccountRisk, 'canU2FRetry' | 'primaryButtonDisabled' | 'errorMessage' | 'step' | 'getAuthMfaInfoData' | 'fromU2FBindtoAuth'> {}

export default function generateSubmitButtonFn({
  request,
  accountId,
  verifyType,
  validators,
  riskConfig,
  fetcherConfig
}: IProps) {
  return (type: ESubmitType, primaryButtonDisabled: boolean): DialogButtonProps<unknown, INewSubAccountRisk> => {
    const isAuth = type === ESubmitType.AUTH;
    const url = isAuth ? riskConfig.URL_MFA_AUTH : riskConfig.URL_MFA_BIND;

    // 在绑定 / 验证 U2F 设备的场景，如果重新请求被风控的接口失败，顶部提示条要有重试的按钮来重新获取 U2F 安全密钥
    const getDataForUpdate = async (payload?: TBindMfaPayload | TVerifyMfaPayload): Promise<IDataForUpdate> => {
      if (payload && ('U2fSignatureData' in payload)) { // 验证 U2F 成功，但重新请求被风控的接口报错。
        return {
          canU2FRetry: true,
          primaryButtonDisabled: true,
          errorMessage: intl('message:incorrect_u2f_auth')
        };
      }
      
      if (payload && ('U2FAppId' in payload || 'Code1' in payload)) { // 当绑定 MFA 成功，但重新请求被风控的接口报错时，点击【重试】需要让用户走 U2F 验证。
        // 获取 U2F 验证的数据
        const authMfaInfo = await getAuthMfaInfo({
          request,
          accountId,
          requestMethod: riskConfig.REQUEST_METHOD,
          getMfaInfoToAuthUrl: riskConfig.URL_GET_MFA_INFO_TO_AUTH
        });

        slsSubRiskGetMfaAInfo({
          accountId,
          url: riskConfig.URL_GET_MFA_INFO_TO_AUTH!,
          getMfaInfoScene: 'auth',
          fromBindMFASuccess: true,
          slsResultType: ESlsResultType.SUCCESS
        });

        if ('U2FAppId' in payload) { // 绑定 U2F 成功
          return {
            step: EStep.U2F_AUTH, // 走 U2F 验证
            canU2FRetry: true,
            primaryButtonDisabled: true,
            errorMessage: intl('message:incorrect_mfa_bind'),
            getAuthMfaInfoData: authMfaInfo,
            fromU2FBindtoAuth: true
          };
        }

        // 绑定 VMFA 成功
        return {
          step: EStep.VMFA_AUTH,
          primaryButtonDisabled: true,
          errorMessage: intl('message:incorrect_mfa_bind'),
          getAuthMfaInfoData: authMfaInfo
        };
      }

      return {
        canU2FRetry: false,
        primaryButtonDisabled: false,
        errorMessage: intl('message:code_incorrect')
      };
    };
  
    return ({
      label: intl('op:confirm'),
      primary: true,
      disabled: primaryButtonDisabled,
      onClick({
        data,
        lock,
        unlock,
        updateData,
        close
      }) {
        lock(true);
        updateData({
          errorMessage: ''
        });
  
        const {
          bindMfaPayload,
          verifyMfaPayload
        } = data;
  
        const payload = isAuth ? verifyMfaPayload : bindMfaPayload;
  
        request<IMfaData>({
          method: riskConfig.REQUEST_METHOD,
          headers: {
            'Content-Type': 'application/json'
          },
          url,
          body: {
            ...payload
          }
        }).then(bindMfaData => {
          const verifyResult = {
            verifyType,
            verifyCode: bindMfaData?.IvToken
          };
  
          if (type === ESubmitType.AUTH) {
            slsSubRiskAuthMfa({
              validators,
              slsResultType: ESlsResultType.SUCCESS,
              payload: payload as TVerifyMfaPayload
            });
          } else {
            slsSubRiskBindMfa({
              validators,
              slsResultType: ESlsResultType.SUCCESS,
              payload: payload as TBindMfaPayload
            });
          }
  
          // 如果请求 BindMFA / Verify 成功，那么会去再次请求被风控的接口。
          request<unknown>(mergeConfig(fetcherConfig, canHaveBody(fetcherConfig) ? {
            body: verifyResult
          } : {
            params: verifyResult
          })).then(result => {
            unlock();
            
            slsSubRisk({
              accountId,
              slsResultType: ESlsResultType.SUCCESS
            });

            close(result);
          }, async (error: FetcherError) => {
            unlock();

            slsSubRisk({
              accountId,
              slsResultType: ESlsResultType.FAIL,
              errorCode: error.code,
              errorMessage: error.message
            });
  
            if (error.code === riskConfig.CODE_INVALID_INPUT || error.code === riskConfig.CODE_NEED_VERIFY) {
              try {
                const dataForUpdate = await getDataForUpdate(payload);

                updateData({
                  ...dataForUpdate
                });
              } catch (getAuthMfaInfoError: unknown) {
                const getAuthInfoErrorMessage = (getAuthMfaInfoError as Error).message;

                slsSubRiskGetMfaAInfo({
                  accountId,
                  url: riskConfig.URL_GET_MFA_INFO_TO_AUTH!,
                  getMfaInfoScene: 'auth',
                  fromBindMFASuccess: true,
                  errorMessage: getAuthInfoErrorMessage,
                  slsResultType: ESlsResultType.FAIL
                });

                // 获取用户绑定的 U2F 信息失败时，直接弹出错误弹窗
                return generateAuthMfaInfoFailDialog(getAuthInfoErrorMessage);
              }
            } else {
              close(error, true);
            }
          });
        }).catch(err => {
          const errorMessage = err?.message || '';

          if (isAuth) {
            slsSubRiskAuthMfa({
              validators,
              slsResultType: ESlsResultType.FAIL,
              payload: payload as TVerifyMfaPayload,
              errorMessage
            });
          } else {
            slsSubRiskBindMfa({
              validators,
              slsResultType: ESlsResultType.FAIL,
              payload: payload as TBindMfaPayload,
              errorMessage
            });
          }
          
          updateData({
            errorMessage
          });
        });
        unlock();
  
        // return false 阻止弹窗关闭
        return false;
      }
    });
  };
}