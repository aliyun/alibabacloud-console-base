import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import {
  startAuthentication,
  browserSupportsWebauthn
} from '@simplewebauthn/browser';
import {
  PublicKeyCredentialRequestOptionsJSON
} from '@simplewebauthn/typescript-types';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import useIsUnmounted from '@alicloud/react-hook-is-unmounted';

import {
  IDataAuthU2fV2Info,
  IDataAuthU2fWebAuthInfo,
  IDialogDataNewSubAccountRisk
} from '../../../../types';
import {
  EStep,
  ESubMfaDeviceType,
  EPayloadVerifyType
} from '../../../../enum';
import {
  WEBAUTHN_KEY_TYPE
} from '../../../../const';
import intl from '../../../../intl';
import {
  slsU2fError
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
      showU2fRetryButton,
      fromBindU2FtoAuthU2F,
      getAuthMfaInfoData,
      subRiskInfo: {
        accountId,
        codeType
      }
    },
    updateData
  } = useDialog<void, IDialogDataNewSubAccountRisk>();
  const [stateU2fSupported, setStateU2fSupported] = useState<boolean>(true);
  const [stateU2fAuthKeyLoading, setStateU2fAuthKeyLoading] = useState<boolean>(true);
  
  const getWebAuthnPublicKey = useCallback((mfaInfo: IDataAuthU2fV2Info | IDataAuthU2fWebAuthInfo): PublicKeyCredentialRequestOptionsJSON => {
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
  
  const fetchU2fAuthData = useCallback(async () => {
    if (!getAuthMfaInfoData || getAuthMfaInfoData.DeviceType === ESubMfaDeviceType.VMFA) {
      updateData({
        errorMessage: intl('message:u2f_get_key_params_error'),
        showU2fRetryButton: false
      });
      slsU2fError({
        accountId,
        status: EStep.U2F_AUTH,
        errorMessage: intl('message:u2f_get_key_params_error')
      });
      
      return;
    }
    
    try {
      const webAuthnSupported = browserSupportsWebauthn();
      
      setStateU2fSupported(webAuthnSupported);
      
      if (!webAuthnSupported) {
        updateData({
          errorMessage: intl('message:u2f_browser_not_support'),
          showU2fRetryButton: false
        });
        
        slsU2fError({
          accountId,
          status: EStep.U2F_AUTH,
          errorMessage: intl('message:u2f_browser_not_support')
        });
        
        return;
      }
      
      const authWebAuthnPublicKey = getWebAuthnPublicKey(getAuthMfaInfoData as (IDataAuthU2fV2Info | IDataAuthU2fWebAuthInfo));
      
      const credential = await startAuthentication(authWebAuthnPublicKey);
      
      if (isUnmounted()) {
        return;
      }
      
      setStateU2fAuthKeyLoading(false);
      
      updateData({
        verifyMfaPayload: {
          AccountId: accountId,
          TicketType: ticketType,
          VerifyType: EPayloadVerifyType.MFA,
          Signature: credential.response.signature,
          CredentialId: credential.id,
          ClientDataJSON: credential.response.clientDataJSON,
          AuthenticatorData: credential.response.authenticatorData,
          Ext: JSON.stringify({
            codeType
          })
        },
        primaryButtonDisabled: false
      });
    } catch (error) {
      const u2fErrorMessage = intl('message:u2f_operation_fail_or_timeout');
      
      slsU2fError({
        accountId,
        errorMessage: u2fErrorMessage,
        status: EStep.U2F_AUTH
      });
      
      updateData({
        errorMessage: u2fErrorMessage,
        // 如果获取 U2F 安全密钥失败，那么【重试】按钮也应该要展示，来重新获取 U2F 安全密钥
        showU2fRetryButton: true
      });
    }
  }, [accountId, codeType, getAuthMfaInfoData, isUnmounted, updateData, getWebAuthnPublicKey]);
  
  const handleRetryClick = useCallback(() => {
    updateData({
      errorMessage: '', // 重新获取 U2F 安全密钥时，需要把报错信息清空，才能展示获取 U2F 安全密钥的状态
      showU2fRetryButton: false
    });
    
    // 状态需要置为正在读取 U2F 安全密钥
    setStateU2fAuthKeyLoading(true);
    
    // 重新获取 U2F 安全密钥
    fetchU2fAuthData();
  }, [updateData, fetchU2fAuthData]);
  
  useEffect(() => {
    updateData({
      primaryButtonDisabled: true
    });
    
    // 如果用户是在绑定 U2F 后，请求被风控的接口出错，从而跳到了 U2F 验证的场景，那么顶部会有错误信息以及重试按钮，需要点击重试按钮后才会去获取 U2F 验证密钥
    if (!fromBindU2FtoAuthU2F) {
      fetchU2fAuthData();
    }
  }, [fromBindU2FtoAuthU2F, updateData, fetchU2fAuthData]);
  
  return <U2fUi {...{
    u2fSupported: stateU2fSupported,
    getU2fKey: stateU2fAuthKeyLoading,
    title: intl('attr:u2f_auth_title'),
    onRetryClick: handleRetryClick,
    showU2fRetryButton,
    errorMessage
  }} />;
}
