import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import {
  startRegistration,
  browserSupportsWebauthn
} from '@simplewebauthn/browser';
import {
  PublicKeyCredentialCreationOptionsJSON
} from '@simplewebauthn/typescript-types';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import useIsUnmounted from '@alicloud/react-hook-is-unmounted';

import {
  IDataBindU2fInfo,
  IDialogDataNewSubAccountRisk
} from '../../../../types';
import {
  EStep,
  ESubMfaDeviceType
} from '../../../../enum';
import {
  TICKET_TYPE
} from '../../../../const';
import intl from '../../../../intl';
import {
  slsU2fError
} from '../../../../sls';
import U2fUi from '../../_components/u2f-ui';

export default function U2FBind(): JSX.Element {
  const isUnmounted = useIsUnmounted();
  const {
    data: {
      errorMessage,
      getBindMfaInfoData,
      u2fTimeout,
      showU2fRetryButton,
      subRiskInfo: {
        accountId,
        codeType
      }
    },
    updateData
  } = useDialog<void, IDialogDataNewSubAccountRisk>();
  const [stateU2fSupported, setStateU2fSupported] = useState<boolean>(true);
  const [stateU2fBindKeyLoading, setStateU2fBindKeyLoading] = useState<boolean>(true);
  
  const getBindWebAuthnPublicKey = useCallback((infoData: IDataBindU2fInfo): PublicKeyCredentialCreationOptionsJSON => {
    return {
      timeout: u2fTimeout,
      attestation: 'direct',
      excludeCredentials: [],
      challenge: infoData.U2FChallenge,
      pubKeyCredParams: [{
        type: infoData.PubKeyCreType as PublicKeyCredentialType,
        alg: Number(infoData.PubKeyCreAlg)
      }],
      rp: {
        name: infoData.RpId,
        id: infoData.RpId
      },
      user: {
        name: infoData.TargetUserPrincipalName,
        displayName: infoData.TargetUserPrincipalName,
        id: infoData.UserIdEncrypted
      },
      authenticatorSelection: {
        authenticatorAttachment: 'cross-platform'
      }
    };
  }, [u2fTimeout]);
  
  const fetchU2fBindData = useCallback(async () => {
    if (isUnmounted()) {
      return;
    }
    
    if (!getBindMfaInfoData || getBindMfaInfoData.DeviceType === ESubMfaDeviceType.VMFA) {
      slsU2fError({
        accountId,
        status: EStep.U2F_BIND,
        errorMessage: intl('message:u2f_get_key_params_error')
      });
      updateData({
        errorMessage: intl('message:u2f_get_key_params_error'),
        showU2fRetryButton: false
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
          status: EStep.U2F_BIND,
          errorMessage: intl('message:u2f_browser_not_support')
        });
        
        return;
      }
      
      const registerWebAuthnPublicKey = getBindWebAuthnPublicKey(getBindMfaInfoData as IDataBindU2fInfo);
      const credential = await startRegistration(registerWebAuthnPublicKey);
      
      setStateU2fBindKeyLoading(false);
      
      updateData({
        bindMfaPayload: {
          AccountId: accountId,
          TicketType: TICKET_TYPE,
          DeviceType: ESubMfaDeviceType.U2F,
          U2FVersion: 'WebAuthn',
          AttestationObject: credential.response.attestationObject,
          ClientDataJSON: credential.response.clientDataJSON,
          Ext: JSON.stringify({
            codeType
          })
        }
      });
    } catch (error) {
      const u2fErrorMessage = intl('message:u2f_operation_fail_or_timeout');
      
      slsU2fError({
        accountId,
        status: EStep.U2F_BIND,
        errorMessage: u2fErrorMessage
      });
      
      // 如果是点击上一步回到 MFA 设备选择页面，再点击浏览器的禁止读取 U2F，那么顶部提示不应该展示错误信息
      if (!isUnmounted()) {
        updateData({
          errorMessage: u2fErrorMessage,
          // 如果获取 U2F 安全密钥失败，那么【重试】按钮也应该要展示，来重新获取 U2F 安全密钥
          showU2fRetryButton: true
        });
      }
    }
  }, [accountId, codeType, isUnmounted, updateData, getBindMfaInfoData, getBindWebAuthnPublicKey]);
  
  const handleRetryClick = useCallback(() => {
    updateData({
      errorMessage: '', // 重新获取 U2F 安全密钥时，需要把报错信息清空，才能展示获取 U2F 安全密钥的状态
      showU2fRetryButton: false // 保证 U2F 场景下正常的接口报错，Message 提示中没有重试按钮
    });
    
    // 状态需要置为正在读取 U2F 安全密钥
    setStateU2fBindKeyLoading(true);
    
    // 重新获取 U2F 安全密钥
    fetchU2fBindData();
  }, [updateData, fetchU2fBindData]);
  
  useEffect(() => {
    fetchU2fBindData();
  }, [updateData, fetchU2fBindData]);
  
  return <U2fUi {...{
    u2fSupported: stateU2fSupported,
    getU2fKey: stateU2fBindKeyLoading,
    title: intl('attr:u2f_bind_title'),
    onRetryClick: handleRetryClick,
    showU2fRetryButton,
    errorMessage
  }} />;
}
