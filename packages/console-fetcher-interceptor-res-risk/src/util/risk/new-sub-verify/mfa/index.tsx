import React from 'react';

import {
  open,
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogDataNewSubAccountRisk,
  IGetBindMfaInfoResponse
} from '../../../../types';
import {
  EStep,
  ESlsResultType,
  ESubMfaDeviceType
} from '../../../../enum';
import {
  WEBAUTHN_KEY_TYPE
} from '../../../../const';
import intl from '../../../../intl';
import Content from '../../../../container/new-sub-verify-content';
import generateAuthMfaInfoFailDialog from '../../../generate-auth-mfa-info-fail-dialog';
import getAuthMfaInfo from '../../../get-auth-mfa-info';
import {
  slsSubRiskGetMfaInfo
} from '../../../sls';

import {
  IParams,
  ESubmitType
} from './_type';
import generateSubmitButtonFn from './generateSubmitButton';
import generateSkipBindMfaButtonFn from './generateSkipBindMfaButton';

export default async function riskNewSubVerifyMfa({
  request,
  fetcherConfig,
  riskConfig,
  subRiskInfo
}: IParams): Promise<unknown> {
  let initialStep = EStep.MFA_CHOOSE;
  let initialGetAuthMfaInfoData;

  const {
    detail,
    accountId,
    codeType,
    verifyType,
    validators
  } = subRiskInfo;
  const {
    REQUEST_METHOD,
    URL_GET_MFA_INFO_TO_BIND,
    URL_GET_MFA_INFO_TO_AUTH,
    U2F_TIMEOUT
  } = riskConfig;
  const isUnbind = detail === 'false';
  const buttonCancel = intl('op:cancel');

  const generateSubmitButton = generateSubmitButtonFn({
    request,
    accountId,
    verifyType,
    validators,
    riskConfig,
    fetcherConfig
  });

  const generateSkipBindMfaButton = generateSkipBindMfaButtonFn({
    request,
    accountId,
    verifyType,
    codeType,
    riskConfig,
    fetcherConfig
  });

  if (!isUnbind) { // 如果用户已经绑定了 MFA ，需要获取绑定的 MFA 设备的具体类型
    try {
      const authMfaInfo = await getAuthMfaInfo({
        request,
        accountId,
        requestMethod: REQUEST_METHOD,
        getMfaInfoToAuthUrl: URL_GET_MFA_INFO_TO_AUTH
      });

      initialGetAuthMfaInfoData = authMfaInfo;

      if (authMfaInfo.DeviceType === ESubMfaDeviceType.U2F) {
        initialStep = EStep.U2F_AUTH;
      } else {
        initialStep = EStep.VMFA_AUTH;
      }

      slsSubRiskGetMfaInfo({
        accountId,
        value: 'auth',
        url: URL_GET_MFA_INFO_TO_AUTH!,
        slsResultType: ESlsResultType.SUCCESS
      });
    } catch (error: unknown) {
      const errorMessage = (error as Error).message;

      slsSubRiskGetMfaInfo({
        accountId,
        errorMessage,
        value: 'auth',
        url: URL_GET_MFA_INFO_TO_AUTH!,
        slsResultType: ESlsResultType.FAIL
      });

      // 当获取用户绑定的 U2F 信息失败时，直接弹出错误弹窗
      return generateAuthMfaInfoFailDialog(errorMessage);
    }
  }
  
  // 选择要绑定的 MFA 设备类型场景的【下一步】按钮。点击之后会：
  // 1. 根据用户选择的 MFA 设备类型，调用 URL_GET_MFA_INFO_TO_BIND 接口得到虚拟 MFA 绑定或者 U2F 设备绑定要用到的参数；
  // 2. 根据用户选择的 MFA 设备类型切换 UI。
  const buttonBindNext: DialogButtonProps<unknown, IDialogDataNewSubAccountRisk> = {
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
      
      request<IGetBindMfaInfoResponse>({
        method: REQUEST_METHOD,
        headers: {
          'Content-Type': 'application/json'
        },
        url: URL_GET_MFA_INFO_TO_BIND,
        body: {
          ...getBindMfaInfoPayload
        }
      }).then(getBindMfaInfoResponse => {
        unlock();

        slsSubRiskGetMfaInfo({
          accountId,
          value: 'bind',
          url: URL_GET_MFA_INFO_TO_BIND!,
          slsResultType: ESlsResultType.SUCCESS
        });
        
        if (getBindMfaInfoResponse.QRCodeUri !== null) { // VMFA
          updateData({
            step: EStep.VMFA_BIND,
            getBindMfaInfoData: {
              DeviceType: ESubMfaDeviceType.VMFA,
              QRCodeUri: getBindMfaInfoResponse.QRCodeUri,
              TargetMfaDeviceSecret: getBindMfaInfoResponse.TargetMfaDeviceSecret || '',
              TargetUserPrincipalName: getBindMfaInfoResponse.TargetUserPrincipalName
            }
          });
        } else {
          updateData({
            step: EStep.U2F_BIND,
            getBindMfaInfoData: {
              DeviceType: ESubMfaDeviceType.U2F,
              RpId: getBindMfaInfoResponse.RpId || '',
              PubKeyCreType: getBindMfaInfoResponse.PubKeyCreType || WEBAUTHN_KEY_TYPE,
              PubKeyCreAlg: getBindMfaInfoResponse.PubKeyCreAlg || '-7',
              U2FChallenge: getBindMfaInfoResponse.U2FChallenge || '',
              UserIdEncrypted: getBindMfaInfoResponse.UserIdEncrypted || '',
              TargetUserPrincipalName: getBindMfaInfoResponse.TargetUserPrincipalName
            }
          });
        }
      }).catch(error => {
        const getMfaBindInfoErrorMessage = error?.message || '';

        unlock();
        slsSubRiskGetMfaInfo({
          accountId,
          value: 'bind',
          url: URL_GET_MFA_INFO_TO_BIND!,
          slsResultType: ESlsResultType.FAIL
        });
        updateData({
          errorMessage: getMfaBindInfoErrorMessage
        });
      });

      return false;
    }
  };

  // 绑定 VMFA 设备或者 U2F 设备的场景的【上一步】按钮，点击之后会回到选择 MFA 设备的场景。
  const buttonPreviousStep: DialogButtonProps<unknown, IDialogDataNewSubAccountRisk> = {
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

  return open<unknown, IDialogDataNewSubAccountRisk>({
    title: (data: IDialogDataNewSubAccountRisk) => {
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
    buttons: (data: IDialogDataNewSubAccountRisk) => {
      const primaryButtonDisabled = data.primaryButtonDisabled || false;
      const skipBindMfaButton = generateSkipBindMfaButton();
      let primaryButton;

      switch (data.step) {
        case EStep.MFA_CHOOSE:
          primaryButton = {
            ...buttonBindNext,
            disabled: primaryButtonDisabled
          };

          return [primaryButton, skipBindMfaButton, buttonCancel];
        case EStep.U2F_BIND:
        case EStep.VMFA_BIND:
          primaryButton = generateSubmitButton(ESubmitType.BIND, primaryButtonDisabled);

          return [buttonPreviousStep, primaryButton, buttonCancel];
        default:
          primaryButton = generateSubmitButton(ESubmitType.AUTH, primaryButtonDisabled);

          return [primaryButton, buttonCancel];
      }
    },
    undefinedAsReject: true // 点击取消或右上角的 X 会调用 reject 逻辑，后续处理会走到 catch 逻辑
  });
}