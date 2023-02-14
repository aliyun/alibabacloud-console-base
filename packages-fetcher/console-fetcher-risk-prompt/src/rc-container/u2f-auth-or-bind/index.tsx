import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import {
  startRegistration,
  startAuthentication,
  browserSupportsWebauthn
} from '@simplewebauthn/browser';

import {
  ESubVerificationDeviceType,
  DataGetU2fInfoToBind,
  DataGetU2fInfoToAuth,
  DataGetU2fWebAuthnInfoToAuth
} from '@alicloud/console-fetcher-risk-data';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData,
  TSubIdentityServiceData
} from '../../types';
import {
  ESubIdentityServiceType
} from '../../enum';
import {
  useModelProps
} from '../../model';
import U2fUi, {
  type TU2fType
} from '../../rc/u2f-ui';
import intl from '../../intl';
import {
  getUpdateSubVerificationParams,
  getAuthWebAuthnAuthPublicKey,
  getAuthWebAuthnBindPublicKey
} from '../../utils';

interface IProps {
  type: TU2fType;
}

function getBindU2fData(subIdentityServiceData?: TSubIdentityServiceData): DataGetU2fInfoToBind | null {
  if (subIdentityServiceData?.dataType === ESubIdentityServiceType.GET_MFA_INFO_TO_BIND) {
    if (subIdentityServiceData.data.deviceType !== ESubVerificationDeviceType.VMFA) {
      return subIdentityServiceData.data;
    }
  }

  return null;
}

function getAuthU2fData(subIdentityServiceData?: TSubIdentityServiceData): DataGetU2fInfoToAuth | DataGetU2fWebAuthnInfoToAuth | null {
  if (subIdentityServiceData?.dataType === ESubIdentityServiceType.GET_VERIFICATION_INFO_TO_AUTH) {
    const foundU2fData = subIdentityServiceData.data.verificationOrBindValidators.find(o => o.deviceType === ESubVerificationDeviceType.U2F);

    if (!foundU2fData) {
      return null;
    }

    return foundU2fData as DataGetU2fInfoToAuth | DataGetU2fWebAuthnInfoToAuth;
  }

  return null;
}

export default function U2fAuthOrBindUi({
  type
}: IProps): JSX.Element {
  const {
    codeType,
    accountId
  } = useModelProps();
  const {
    data: {
      subIdentityServiceParams,
      fromBindU2FtoAuthU2F,
      subIdentityServiceData
    },
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const [stateU2fErrorMessage, setStateU2fErrorMessage] = useState<string>('');
  const [stateGetU2fKeyLoading, setStateGetU2fKeyLoading] = useState<boolean>(true);
  const [stateShowU2fRetryButton, setStateShowU2fRetryButton] = useState<boolean>(false);

  const fetchU2fBindOrAuthData = useCallback(async () => {
    try {
      const webAuthnSupported = browserSupportsWebauthn();

      if (!webAuthnSupported) {
        setStateU2fErrorMessage(intl('message:u2f_browser_not_support'));

        return;
      }

      // U2F 绑定场景
      if (type === 'u2f_bind') {
        const getU2fInfoToBindData = getBindU2fData(subIdentityServiceData);

        if (!getU2fInfoToBindData) {
          return setStateU2fErrorMessage(intl('message:get_u2f_key_params_error'));
        }

        const registerWebAuthnPublicKey = getAuthWebAuthnBindPublicKey(getU2fInfoToBindData);
        const bindU2fCredential = await startRegistration(registerWebAuthnPublicKey);

        setStateGetU2fKeyLoading(false);
        updateData({
          primaryButtonDisabled: false,
          subBindMfaParams: {
            accountId,
            u2FVersion: 'WebAuthn',
            deviceType: ESubVerificationDeviceType.U2F,
            attestationObject: bindU2fCredential.response.attestationObject,
            clientDataJSON: bindU2fCredential.response.clientDataJSON,
            ext: JSON.stringify({
              codeType
            })
          }
        });
      } else {
        // U2F 验证场景
        const getU2fInfoToAuthData = getAuthU2fData(subIdentityServiceData);

        if (!getU2fInfoToAuthData) {
          return setStateU2fErrorMessage(intl('message:get_u2f_key_params_error'));
        }

        const authWebAuthnPublicKey = getAuthWebAuthnAuthPublicKey(getU2fInfoToAuthData);

        const authU2fCredential = await startAuthentication(authWebAuthnPublicKey);

        setStateGetU2fKeyLoading(false);
        updateData({
          primaryButtonDisabled: false,
          subIdentityServiceParams: {
            paramsType: ESubIdentityServiceType.VERIFY_SUB_ACCOUNT,
            params: getUpdateSubVerificationParams({
              currentSubIdentityServiceParams: subIdentityServiceParams,
              paramsToUpdate: {
                accountId,
                verifyType: ESubVerificationDeviceType.U2F,
                signature: authU2fCredential.response.signature,
                credentialId: authU2fCredential.id,
                clientDataJSON: authU2fCredential.response.clientDataJSON,
                authenticatorData: authU2fCredential.response.authenticatorData,
                ext: JSON.stringify({
                  codeType
                })
              }
            })
          }
        });
      }
    } catch (error) {
      setStateShowU2fRetryButton(true);

      setStateU2fErrorMessage(intl('message:u2f_operation_fail_or_timeout'));
    }
  }, [type, accountId, codeType, subIdentityServiceData, subIdentityServiceParams, updateData]);

  const handleRetryClick = useCallback(() => {
    // 清空 API 错误
    updateData({
      apiErrorMessage: ''
    });
    setStateU2fErrorMessage('');

    // 状态需要置为正在读取 U2F 安全密钥
    setStateGetU2fKeyLoading(true);
    // 并且隐藏重新获取按钮
    setStateShowU2fRetryButton(false);

    // 重新获取 U2F 安全密钥
    fetchU2fBindOrAuthData();
  }, [updateData, fetchU2fBindOrAuthData]);

  useEffect(() => {
    // 初始需要置灰提交按钮
    updateData({
      primaryButtonDisabled: true
    });
  }, [updateData]);

  useEffect(() => {
    // 如果用户是在绑定 U2F 后，请求被风控的接口出错，从而跳到了 U2F 验证的场景，那么顶部会有错误信息以及重试按钮，需要点击重试按钮后才会去获取 U2F 验证密钥。
    if (type === 'u2f_auth' && fromBindU2FtoAuthU2F) {
      return;
    }

    fetchU2fBindOrAuthData();
  }, [type, fromBindU2FtoAuthU2F, fetchU2fBindOrAuthData]);

  return <U2fUi {...{
    type,
    u2fErrorMessage: stateU2fErrorMessage,
    u2fKeyFetching: stateGetU2fKeyLoading,
    onU2FErrorRetryClick: handleRetryClick,
    showU2FRetryButton: stateShowU2fRetryButton
  }} />;
}
