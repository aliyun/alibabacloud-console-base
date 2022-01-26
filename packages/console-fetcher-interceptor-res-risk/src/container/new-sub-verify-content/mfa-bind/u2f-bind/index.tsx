import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import { startRegistration, browserSupportsWebauthn } from '@simplewebauthn/browser';
import {
  PublicKeyCredentialCreationOptionsJSON
} from '@simplewebauthn/typescript-types';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import useIsUnmounted from '@alicloud/react-hook-is-unmounted';

import {
  IGetBindU2FInfoData,
  INewSubAccountRisk
} from '../../../../types';
import {
  EStep,
  ESubMFADeviceType
} from '../../../../const';
import intl from '../../../../intl';
import {
  slsU2FError
} from '../../../../util/sls';
import getTicketType from '../../../../util/get-ticket-type';
import U2fUi from '../../_components/u2f-ui';

const ticketType = getTicketType();

export default function U2FBind(): JSX.Element {
  const isUnmounted = useIsUnmounted();
  const {
    data: {
      errorMessage,
      getBindMfaInfoData,
      u2fTimeout,
      showU2FRetryButton,
      subRiskInfo: {
        accountId,
        codeType
      }
    },
    updateData
  } = useDialog<void, INewSubAccountRisk>();
  
  const [stateU2FSupported, setStateU2fSupported] = useState<boolean>(true);
  const [stateGetU2FBindKeyLoading, setStateGetU2fBindKey] = useState<boolean>(true);

  const getBindWebAuthnPublicKey = useCallback((infoData: IGetBindU2FInfoData): PublicKeyCredentialCreationOptionsJSON => {
    return {
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
      challenge: infoData.U2FChallenge,
      excludeCredentials: [],
      timeout: u2fTimeout
    };
  }, [u2fTimeout]);

  const fetchU2FBindData = useCallback(async () => {
    if (isUnmounted()) {
      return;
    }
    
    if (!getBindMfaInfoData || getBindMfaInfoData?.DeviceType === ESubMFADeviceType.VMFA) {
      updateData({
        errorMessage: intl('message:get_u2f_key_params_error'),
        showU2FRetryButton: false
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

        return;
      }

      const registerWebAuthnPublicKey = getBindWebAuthnPublicKey(getBindMfaInfoData as IGetBindU2FInfoData);

      const credential = await startRegistration(registerWebAuthnPublicKey);

      setStateGetU2fBindKey(false);
      updateData({
        bindMfaPayload: {
          AccountId: accountId,
          TicketType: ticketType,
          DeviceType: ESubMFADeviceType.U2F,
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
      
      slsU2FError({
        accountId,
        status: EStep.U2F_BIND,
        errorMessage: u2fErrorMessage
      });
      
      // 如果是点击上一步回到 MFA 设备选择页面，再点击浏览器的禁止读取 U2F，那么顶部提示不应该展示错误信息
      if (!isUnmounted()) {
        updateData({
          errorMessage: u2fErrorMessage,
          // 如果获取 U2F 安全密钥失败，那么【重试】按钮也应该要展示，来重新获取 U2F 安全密钥
          showU2FRetryButton: true
        });
      }
    }
  }, [accountId, codeType, isUnmounted, updateData, getBindMfaInfoData, getBindWebAuthnPublicKey]);

  const handleRetryClick = useCallback(() => {
    updateData({
      errorMessage: '', // 重新获取 U2F 安全密钥时，需要把报错信息清空，才能展示获取 U2F 安全密钥的状态
      showU2FRetryButton: false // 保证 U2F 场景下正常的接口报错，Message 提示中没有重试按钮
    });

    // 状态需要置为正在读取 U2F 安全密钥
    setStateGetU2fBindKey(true);
    
    // 重新获取 U2F 安全密钥
    fetchU2FBindData();
  }, [updateData, fetchU2FBindData]);

  useEffect(() => {
    fetchU2FBindData();
  }, [updateData, fetchU2FBindData]);

  return <U2fUi {...{
    u2fSupported: stateU2FSupported,
    getU2fKey: stateGetU2FBindKeyLoading,
    title: intl('attr:u2f_bind_title'),
    onRetryClick: handleRetryClick,
    showU2FRetryButton,
    errorMessage
  }} />;
}
