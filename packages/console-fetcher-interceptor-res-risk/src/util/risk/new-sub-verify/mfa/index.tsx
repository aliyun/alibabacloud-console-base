import React from 'react';

import {
  FetcherError,
  FetcherConfig,
  FetcherFnRequest,
  canHaveBody,
  mergeConfig
} from '@alicloud/fetcher';
import {
  open,
  DialogButtonProps,
  AltWrap
} from '@alicloud/console-base-rc-dialog';

import {
  IFetcherInterceptorConfig,
  ISubAccountRiskInfo,
  INewSubAccountRisk,
  TGetAuthMfaInfoData,
  TGetBindMfaInfoData,
  IMfaData
} from '../../../../types';
import {
  ESubMFADeviceType,
  EStep
} from '../../../../const';
import intl from '../../../../intl';
import Content from '../../../../container/new-sub-verify-content';
import getTicketType from '../../../get-ticket-type';

interface IParams {
  request: FetcherFnRequest;
  fetcherConfig: FetcherConfig;
  riskConfig: IFetcherInterceptorConfig;
  subRiskInfo: ISubAccountRiskInfo;
}

enum ESubmitType {
  BIND,
  AUTH
}

const ticketType = getTicketType();

export default async function RiskSubVerify({
  request,
  fetcherConfig,
  riskConfig,
  subRiskInfo
}: IParams): Promise<unknown> {
  let initialStep: EStep = EStep.MFA_CHOOSE;
  let initialGetAuthMfaInfoData;

  const {
    detail,
    accountId
  } = subRiskInfo;
  const {
    REQUEST_METHOD,
    URL_GET_MFA_INFO_TO_BIND,
    URL_GET_MFA_INFO_TO_AUTH,
    URL_MFA_BIND,
    URL_MFA_AUTH,
    U2F_TIMEOUT
  } = riskConfig;
  const isUnbind = detail === 'false';
  const buttonCancel = intl('op:cancel');

  const generateAuthMfaInfoFailDialog = (errMsg: string): Promise<unknown> => {
    return open<void>({
      title: intl('title:sub_default'),
      content: <AltWrap {...{
        type: 'alert',
        content: errMsg
      }} />,
      buttons: [buttonCancel]
    });
  };

  const getAuthMfaInfo = async (): Promise<TGetAuthMfaInfoData> => {
    const authMfaInfo = await request<TGetAuthMfaInfoData>({
      method: REQUEST_METHOD,
      headers: {
        'Content-Type': 'application/json'
      },
      url: URL_GET_MFA_INFO_TO_AUTH,
      body: {
        AccountId: accountId,
        TicketType: ticketType
      }
    });

    return authMfaInfo;
  };

  if (!isUnbind) { // 如果用户已经绑定了 MFA ，需要获取绑定的 MFA 设备的具体类型
    try {
      const authMfaInfo = await getAuthMfaInfo();
      
      initialGetAuthMfaInfoData = authMfaInfo;

      if (authMfaInfo.DeviceType === ESubMFADeviceType.U2F) {
        initialStep = EStep.U2F_AUTH;
      } else {
        initialStep = EStep.VMFA_AUTH;
      }
    } catch (error: unknown) {
      // 当获取用户绑定的 U2F 信息失败时，直接弹出错误弹窗
      return generateAuthMfaInfoFailDialog((error as Error).message);
    }
  }

  const buttonBindNext: DialogButtonProps<unknown, INewSubAccountRisk> = {
    label: intl('op:confirm'),
    primary: true,
    onClick({
      lock,
      unlock,
      data,
      updateData
    }) {
      lock(true);
      updateData({
        errorMessage: ''
      });
      
      const {
        getBindMfaInfoPayload
      } = data;
      
      request<TGetBindMfaInfoData>({
        method: REQUEST_METHOD,
        headers: {
          'Content-Type': 'application/json'
        },
        url: URL_GET_MFA_INFO_TO_BIND,
        body: {
          ...getBindMfaInfoPayload
        }
      }).then(getBindMfaInfoData => {
        unlock();
        
        if (getBindMfaInfoData.QRCodeUri !== null) { // VMFA
          updateData({
            step: EStep.VMFA_BIND,
            getBindMfaInfoData
          });
        } else {
          updateData({
            step: EStep.U2F_BIND,
            getBindMfaInfoData
          });
        }
      }).catch(error => {
        unlock();
        updateData({
          errorMessage: error?.message || ''
        });
      });

      return false;
    }
  };

  const buttonPreviousStep: DialogButtonProps<unknown, INewSubAccountRisk> = {
    label: intl('op:previous_step'),
    primary: false,
    onClick({
      updateData
    }) {
      updateData({
        errorMessage: '',
        step: EStep.MFA_CHOOSE,
        primaryButtonDisabled: false
      });

      return false;
    }
  };

  const generateSubmitButton = (type: ESubmitType, primaryButtonDisabled: boolean): DialogButtonProps<unknown, INewSubAccountRisk> => {
    const url = type === ESubmitType.AUTH ? URL_MFA_AUTH : URL_MFA_BIND;

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

        const payload = type === ESubmitType.AUTH ? verifyMfaPayload : bindMfaPayload;

        request<IMfaData>({
          method: REQUEST_METHOD,
          headers: {
            'Content-Type': 'application/json'
          },
          url,
          body: {
            ...payload
          }
        }).then(bindMfaData => {
          const verifyResult = {
            verifyCode: bindMfaData?.IvToken
          };

          // 如果请求 BindMFA / Verify 成功，那么会去再次请求被风控的接口。
          request<unknown>(mergeConfig(fetcherConfig, canHaveBody(fetcherConfig) ? {
            body: verifyResult
          } : {
            params: verifyResult
          })).then(result => {
            unlock();

            close(result);
          }, async (error: FetcherError) => {
            unlock();

            if (error.code === riskConfig.CODE_INVALID_INPUT || error.code === riskConfig.CODE_NEED_VERIFY) {
              let errorMessage = intl('message:code_incorrect');
              let canU2FRetry = false; // 是否显示 U2F 重试按钮。
              let u2fPrimaryButtonDisabled = false;
              let bindFailObj = {};

              // 验证 U2F 成功，但重新请求被风控的接口报错
              if (payload && ('U2fSignatureData' in payload)) {
                canU2FRetry = true;
                // 如果需要重新获取 U2F 安全密钥，那么确定按钮需要置灰。等到获取到了 U2F 安全密钥，才能点击确定提交 U2F 绑定/验证。
                u2fPrimaryButtonDisabled = true;
                errorMessage = intl('message:incorrect_u2f_auth');
              // 当绑定 U2F【成功】，但重新请求被风控的接口报错时，重试需要让用户走 U2F 验证。
              } else if (payload && 'U2FAppId' in payload) {
                canU2FRetry = true;
                u2fPrimaryButtonDisabled = true;
                errorMessage = intl('message:incorrect_u2f_bind');

                // 获取 U2F 验证的数据
                try {
                  const authMfaInfo = await getAuthMfaInfo();

                  bindFailObj = {
                    step: EStep.U2F_AUTH,
                    getAuthMfaInfoData: authMfaInfo,
                    fromU2FBindtoAuth: true
                  };
                } catch (getAuthMfaInfoError: unknown) {
                  // 当获取用户绑定的 U2F 信息失败时，直接弹出错误弹窗
                  return generateAuthMfaInfoFailDialog((getAuthMfaInfoError as Error).message);
                }
              }

              updateData({
                errorMessage,
                canU2FRetry,
                primaryButtonDisabled: u2fPrimaryButtonDisabled,
                ...bindFailObj
              });
            } else {
              close(error, true);
            }
          });
        }).catch(err => {
          updateData({
            errorMessage: err?.message || ''
          });
        });
        unlock();

        // 如果请求 BindMFA/Verify 失败，那么会更新错误信息，并且 return false 阻止弹窗关闭
        return false;
      }
    });
  };

  return open<unknown, INewSubAccountRisk>({
    title: (data: INewSubAccountRisk) => {
      const {
        step
      } = data;

      switch (step) {
        case EStep.VMFA_BIND:
          return intl('title:sub_vmfa_bind');
        case EStep.U2F_BIND:
          return intl('title:sub_u2f_bind');
        case EStep.VMFA_AUTH:
          return intl('title:sub_vmfa_auth');
        case EStep.U2F_AUTH:
          return intl('title:sub_u2f_auth');
        default:
          return intl('title:sub_default');
      }
    },
    size: 'l',
    data: {
      request,
      subRiskInfo,
      requestId: '',
      primaryButtonDisabled: false,
      errorMessage: '',
      step: initialStep,
      getAuthMfaInfoData: initialGetAuthMfaInfoData,
      u2fTimeout: U2F_TIMEOUT
    },
    content: <Content />,
    buttons: (data: INewSubAccountRisk) => {
      const primaryButtonDisabled = data.primaryButtonDisabled || false;
      let primaryButton;

      switch (data.step) {
        case EStep.MFA_CHOOSE:
          primaryButton = {
            ...buttonBindNext,
            disabled: primaryButtonDisabled
          };

          return [primaryButton, buttonCancel];
        case EStep.U2F_BIND:
        case EStep.VMFA_BIND:
          primaryButton = generateSubmitButton(ESubmitType.BIND, primaryButtonDisabled);

          return [buttonPreviousStep, primaryButton, buttonCancel];
        default:
          primaryButton = generateSubmitButton(ESubmitType.AUTH, primaryButtonDisabled);

          return [primaryButton, buttonCancel];
      }
    },
    undefinedAsReject: true
  });
}