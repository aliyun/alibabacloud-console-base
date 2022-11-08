import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import {
  startAuthentication, browserSupportsWebauthn
} from '@simplewebauthn/browser';
import {
  PublicKeyCredentialRequestOptionsJSON
} from '@simplewebauthn/typescript-types';

import useIsUnmounted from '@alicloud/react-hook-is-unmounted';
import {
  ESubVerifyType,
  ESubMfaDeviceType,
  DataGetU2FInfoToAuth,
  DataGetU2FWebAuthnInfoToAuth
} from '@alicloud/console-fetcher-risk-data';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../../../../types';
import {
  U2F_TIME_OUT,
  WEBAUTHN_KEY_TYPE,
  ESubAccountIdentityServiceType
} from '../../../../../../const';
import {
  useModelProps
} from '../../../../../../model';
import intl from '../../../../../../intl';
import U2fUi from '../../_components/u2f-ui';

export default function U2fAuth(): JSX.Element {
  const isUnmounted = useIsUnmounted();
  const {
    codeType,
    accountId
  } = useModelProps();
  const {
    data: {
      fromBindU2FtoAuthU2F,
      subAccountIdentityServiceData
    },
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const getMfaInfoToAuthData = subAccountIdentityServiceData?.dataType === ESubAccountIdentityServiceType.GET_MFA_INFO_TO_AUTH ? subAccountIdentityServiceData.data : null;

  const [stateU2fSupported, setStateU2fSupported] = useState<boolean>(true);
  const [stateGetU2fAuthKeyLoading, setStateGetU2fAuthKeyLoading] = useState<boolean>(true);
  const [stateShowU2fRetryButton, setStateShowU2fRetryButton] = useState<boolean>(false);

  const getAuthWebAuthnPublicKey = useCallback((mfaInfo: DataGetU2FInfoToAuth | DataGetU2FWebAuthnInfoToAuth): PublicKeyCredentialRequestOptionsJSON => {
    if (mfaInfo.u2FVersion === 'U2F_V2') {
      return {
        timeout: U2F_TIME_OUT,
        challenge: mfaInfo.u2FChallenge,
        allowCredentials: [{
          type: WEBAUTHN_KEY_TYPE,
          id: mfaInfo.u2FKeyHandle,
          transports: ['usb']
        }],
        extensions: {
          appid: mfaInfo.u2FAppId
        }
      };
    }

    return {
      timeout: U2F_TIME_OUT,
      challenge: mfaInfo.u2FChallenge,
      allowCredentials: [{
        type: WEBAUTHN_KEY_TYPE,
        id: mfaInfo.credentialId,
        transports: ['usb']
      }],
      rpId: mfaInfo.rpId
    };
  }, []);

  const fetchU2fAuthData = useCallback(async () => {
    if (!getMfaInfoToAuthData || getMfaInfoToAuthData.deviceType === ESubMfaDeviceType.VMFA) {
      updateData({
        errorMessage: intl('message:get_u2f_key_params_error')
      });

      return;
    }

    try {
      const webAuthnSupported = browserSupportsWebauthn();

      setStateU2fSupported(webAuthnSupported);

      if (!webAuthnSupported) {
        // 浏览器不支持 U2F，错误信息后无重试按钮，因为此时的重试动作是无意义的
        updateData({
          errorMessage: intl('message:u2f_browser_not_support')
        });

        return;
      }

      const authWebAuthnPublicKey = getAuthWebAuthnPublicKey(getMfaInfoToAuthData);

      const credential = await startAuthentication(authWebAuthnPublicKey);

      if (isUnmounted()) {
        return;
      }

      setStateGetU2fAuthKeyLoading(false);
      updateData({
        primaryButtonDisabled: false,
        subAccountIdentityServiceParams: {
          paramsType: ESubAccountIdentityServiceType.VERIFY_SUB_ACCOUNT_MFA,
          params: {
            accountId,
            verifyType: ESubVerifyType.MFA,
            signature: credential.response.signature,
            credentialId: credential.id,
            clientDataJSON: credential.response.clientDataJSON,
            authenticatorData: credential.response.authenticatorData,
            ext: JSON.stringify({
              codeType
            })
          }
        }
      });
    } catch (error) {
      setStateShowU2fRetryButton(true);
      updateData({
        errorMessage: intl('message:u2f_operation_fail_or_timeout')
      });
    }
  }, [accountId, codeType, getMfaInfoToAuthData, isUnmounted, getAuthWebAuthnPublicKey, updateData]);

  const handleRetryClick = useCallback(() => {
    updateData({
      errorMessage: ''
    });
    setStateShowU2fRetryButton(false);
    // 状态需要置为正在读取 U2F 安全密钥
    setStateGetU2fAuthKeyLoading(true);
    // 重新获取 U2F 安全密钥
    fetchU2fAuthData();
  }, [updateData, fetchU2fAuthData]);

  useEffect(() => {
    updateData({
      primaryButtonDisabled: true
    });

    // 如果用户是在绑定 U2F 后，请求被风控的接口出错，从而跳到了 U2F 验证的场景，那么顶部会有错误信息以及重试按钮，需要点击重试按钮后才会去获取 U2F 验证密钥。
    if (!fromBindU2FtoAuthU2F) {
      fetchU2fAuthData();
    }
  }, [fromBindU2FtoAuthU2F, updateData, fetchU2fAuthData]);

  return <U2fUi {...{
    u2fSupported: stateU2fSupported,
    u2fKeyFetching: stateGetU2fAuthKeyLoading,
    title: intl('attr:u2f_auth_title'),
    onU2FErrorRetryClick: handleRetryClick,
    showU2FRetryButton: stateShowU2fRetryButton
  }} />;
}
