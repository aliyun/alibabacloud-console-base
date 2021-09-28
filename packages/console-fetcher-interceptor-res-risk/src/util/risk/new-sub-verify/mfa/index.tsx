import React from 'react';

import {
  FetcherError,
  FetcherConfig,
  FetcherFnRequest,
  canHaveBody,
  mergeConfig
} from '@alicloud/fetcher';
import {
  DialogButtonProps,
  open
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
  let initialStep: EStep = EStep.VMFA_BIND;
  let initialGetAuthMfaInfoData;
  let initialErrorMessage = '';
  let initialPrimaryButtonDisable = false;

  const {
    detail,
    userPrincipalName
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

  const getMfaInfoToAuth = async (): Promise<void> => {
    try {
      const getAuthMfaInfo = await request<TGetAuthMfaInfoData>({
        method: REQUEST_METHOD,
        headers: {
          'Content-Type': 'application/json'
        },
        url: URL_GET_MFA_INFO_TO_AUTH,
        body: {
          TargetUserPrincipalName: userPrincipalName,
          TicketType: ticketType
        }
      });

      initialGetAuthMfaInfoData = getAuthMfaInfo;

      if (getAuthMfaInfo.DeviceType === ESubMFADeviceType.U2F) {
        initialStep = EStep.U2F_AUTH;
      } else {
        initialStep = EStep.VMFA_AUTH;
      }
    } catch (error: unknown) {
      initialStep = EStep.VMFA_AUTH;
      initialPrimaryButtonDisable = true;
      initialErrorMessage = (error as Error)?.message || '';
    }
  };

  if (!isUnbind) {
    await getMfaInfoToAuth();
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
            ivToken: bindMfaData?.IvToken
          };

          // 如果请求 BindMFA / Verify 失败，那么会去再次请求被风控的接口。此时无论请求成功或是失败，都会调用 close()方法来关闭弹窗
          request<unknown>(mergeConfig(fetcherConfig, canHaveBody(fetcherConfig) ? {
            body: verifyResult
          } : {
            params: verifyResult
          })).then(result => {
            unlock();

            close(result);
          }, (error: FetcherError) => {
            unlock();

            if (error.code === riskConfig.CODE_INVALID_INPUT || error.code === riskConfig.CODE_NEED_VERIFY) {
              updateData({
                errorMessage: intl('message:code_incorrect')
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

        // 如果请求 BindMFA / Verify 失败，那么会更新错误信息，并且 return false 阻止弹窗关闭
        return false;
      }
    });
  };

  const buttonCancel = intl('op:cancel');

  return open<unknown, INewSubAccountRisk>({
    title: (data: INewSubAccountRisk) => {
      const {
        step
      } = data;

      switch (step) {
        case EStep.MFA_CHOOSE:
          return intl('title:sub_mfa_choose');
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
      primaryButtonDisabled: initialPrimaryButtonDisable,
      errorMessage: initialErrorMessage,
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