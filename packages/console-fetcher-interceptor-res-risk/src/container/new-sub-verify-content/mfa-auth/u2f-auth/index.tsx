import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import { startAuthentication, browserSupportsWebauthn } from '@simplewebauthn/browser';
import {
  PublicKeyCredentialRequestOptionsJSON
} from '@simplewebauthn/typescript-types';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import useIsUnmounted from '@alicloud/react-hook-is-unmounted';

import {
  IGetAuthU2FV2InfoData,
  IGetAuthU2FWebAuthnInfoData,
  INewSubAccountRisk
} from '../../../../types';
import {
  EStep,
  ESubMFADeviceType,
  EPayloadVerifyType,
  WEBAUTHN_KEY_TYPE
} from '../../../../const';
import intl from '../../../../intl';
import {
  slsU2FError
} from '../../../../util/sls';
import getTicketType from '../../../../util/get-ticket-type';
import U2fUi from '../../_components/u2f-ui';

const ticketType = getTicketType();

export default function U2FAuth(): JSX.Element {
  const isUnmounted = useIsUnmounted();
  const {
    data: {
      errorMessage,
      u2fTimeout,
      showU2FRetryButton,
      fromBindU2FtoAuthU2F,
      getAuthMfaInfoData,
      subRiskInfo: {
        accountId,
        codeType
      }
    },
    updateData
  } = useDialog<void, INewSubAccountRisk>();

  const [stateU2FSupported, setStateU2fSupported] = useState<boolean>(true);
  const [stateGetU2FAuthKeyLoading, setStateGetU2fAuthKeyLoading] = useState<boolean>(true);

  const getWebAuthnPublicKey = useCallback((mfaInfo: IGetAuthU2FV2InfoData | IGetAuthU2FWebAuthnInfoData): PublicKeyCredentialRequestOptionsJSON => {
    if (mfaInfo.U2FVersion === 'U2F_V2') {
      return {
        timeout: u2fTimeout,
        challenge: mfaInfo.U2FChallenge,
        allowCredentials: [{
          type: WEBAUTHN_KEY_TYPE,
          id: mfaInfo.U2FKeyHandle,
          transports: ['usb']
        }],
        extensions: {
          appid: mfaInfo.U2FAppId
        }
      };
    }

    return {
      timeout: u2fTimeout,
      challenge: mfaInfo.U2FChallenge,
      allowCredentials: [{
        type: WEBAUTHN_KEY_TYPE,
        id: mfaInfo.CredentialId,
        transports: ['usb']
      }],
      rpId: mfaInfo.RpId
    };
  }, [u2fTimeout]);

  const fetchU2FAuthData = useCallback(async () => {
    if (!getAuthMfaInfoData || getAuthMfaInfoData?.DeviceType === ESubMFADeviceType.VMFA) {
      updateData({
        errorMessage: intl('message:get_u2f_key_params_error'),
        showU2FRetryButton: false
      });
      slsU2FError({
        accountId,
        status: EStep.U2F_AUTH,
        errorMessage: intl('message:get_u2f_key_params_error')
      });

      return;
    }

    try {
      const webAuthnSupported = browserSupportsWebauthn();

      setStateU2fSupported(webAuthnSupported);

      if (!webAuthnSupported) {
        updateData({
          errorMessage: intl('message:u2f_browser_not_support'),
          showU2FRetryButton: false
        });
        slsU2FError({
          accountId,
          status: EStep.U2F_AUTH,
          errorMessage: intl('message:u2f_browser_not_support')
        });

        return;
      }

      const authWebAuthnPublicKey = getWebAuthnPublicKey(getAuthMfaInfoData as (IGetAuthU2FV2InfoData | IGetAuthU2FWebAuthnInfoData));

      const credential = await startAuthentication(authWebAuthnPublicKey);

      if (isUnmounted()) {
        return;
      }

      setStateGetU2fAuthKeyLoading(false);
      updateData({
        verifyMfaPayload: {
          AccountId: accountId,
          TicketType: ticketType,
          VerifyType: EPayloadVerifyType.MFA,
          Signature: credential.response?.signature,
          CredentialId: credential.id,
          ClientDataJSON: credential.response?.clientDataJSON,
          AuthenticatorData: credential.response?.authenticatorData,
          Ext: JSON.stringify({
            codeType
          })
        },
        primaryButtonDisabled: false
      });
    } catch (error) {
      const u2fErrorMessage = intl('message:u2f_operation_fail_or_timeout');

      slsU2FError({
        accountId,
        errorMessage: u2fErrorMessage,
        status: EStep.U2F_AUTH
      });

      updateData({
        errorMessage: u2fErrorMessage,
        // 如果获取 U2F 安全密钥失败，那么【重试】按钮也应该要展示，来重新获取 U2F 安全密钥
        showU2FRetryButton: true
      });
    }
  }, [accountId, codeType, getAuthMfaInfoData, isUnmounted, updateData, getWebAuthnPublicKey]);

  const handleRetryClick = useCallback(() => {
    updateData({
      errorMessage: '', // 重新获取 U2F 安全密钥时，需要把报错信息清空，才能展示获取 U2F 安全密钥的状态。
      showU2FRetryButton: false
    });

    // 状态需要置为正在读取 U2F 安全密钥
    setStateGetU2fAuthKeyLoading(true);
    
    // 重新获取 U2F 安全密钥
    fetchU2FAuthData();
  }, [updateData, fetchU2FAuthData]);

  useEffect(() => {
    updateData({
      primaryButtonDisabled: true
    });

    // 如果用户是在绑定 U2F 后，请求被风控的接口出错，从而跳到了 U2F 验证的场景，那么顶部会有错误信息以及重试按钮，需要点击重试按钮后才会去获取 U2F 验证密钥。
    if (!fromBindU2FtoAuthU2F) {
      fetchU2FAuthData();
    }
  }, [fromBindU2FtoAuthU2F, updateData, fetchU2FAuthData]);

  return <U2fUi {...{
    u2fSupported: stateU2FSupported,
    getU2fKey: stateGetU2FAuthKeyLoading,
    title: intl('attr:u2f_auth_title'),
    onRetryClick: handleRetryClick,
    showU2FRetryButton,
    errorMessage
  }} />;
}
