import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import {
  startRegistration, browserSupportsWebauthn
} from '@simplewebauthn/browser';
import {
  PublicKeyCredentialCreationOptionsJSON
} from '@simplewebauthn/typescript-types';

import useIsUnmounted from '@alicloud/react-hook-is-unmounted';
import {
  ESubMfaDeviceType,
  DataGetU2fInfoToBind
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
  ESubAccountIdentityServiceType
} from '../../../../../../const';
import {
  useModelProps
} from '../../../../../../model';
import intl from '../../../../../../intl';
import U2FUi from '../../_components/u2f-ui';

export default function U2fBind(): JSX.Element {
  const isUnmounted = useIsUnmounted();
  const {
    codeType,
    accountId
  } = useModelProps();
  const {
    data: {
      subAccountIdentityServiceData
    },
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();
  const getMfaInfoToBindData = subAccountIdentityServiceData?.dataType === ESubAccountIdentityServiceType.GET_MFA_INFO_TO_BIND ? subAccountIdentityServiceData.data : null;

  const [stateU2fSupported, setStateU2fSupported] = useState<boolean>(true);
  const [stateGetU2fBindKeyLoading, setStateGetU2fBindKeyLoading] = useState<boolean>(true);
  const [stateShowU2fRetryButton, setStateShowU2fRetryButton] = useState<boolean>(false);

  const getBindWebAuthnPublicKey = useCallback((infoData: DataGetU2fInfoToBind): PublicKeyCredentialCreationOptionsJSON => {
    return {
      timeout: U2F_TIME_OUT,
      attestation: 'direct',
      excludeCredentials: [],
      challenge: infoData.u2FChallenge,
      pubKeyCredParams: [{
        type: infoData.pubKeyCreType as PublicKeyCredentialType,
        alg: Number(infoData.pubKeyCreAlg)
      }],
      rp: {
        name: infoData.rpId,
        id: infoData.rpId
      },
      user: {
        name: infoData.targetUserPrincipalName,
        displayName: infoData.targetUserPrincipalName,
        id: infoData.userIdEncrypted
      },
      authenticatorSelection: {
        authenticatorAttachment: 'cross-platform'
      }
    };
  }, []);

  const fetchU2fBindData = useCallback(async () => {
    if (isUnmounted()) {
      return;
    }
    
    if (!getMfaInfoToBindData || getMfaInfoToBindData.deviceType === ESubMfaDeviceType.VMFA) {
      updateData({
        errorMessage: intl('message:get_u2f_key_params_error')
      });

      return;
    }

    try {
      const webAuthnSupported = browserSupportsWebauthn();

      setStateU2fSupported(webAuthnSupported);

      if (!webAuthnSupported) {
        updateData({
          errorMessage: intl('message:u2f_browser_not_support')
        });

        return;
      }

      const registerWebAuthnPublicKey = getBindWebAuthnPublicKey(getMfaInfoToBindData);

      const credential = await startRegistration(registerWebAuthnPublicKey);

      setStateGetU2fBindKeyLoading(false);
      updateData({
        subAccountIdentityServiceParams: {
          paramsType: ESubAccountIdentityServiceType.BIND_MFA,
          params: {
            accountId,
            u2FVersion: 'WebAuthn',
            deviceType: ESubMfaDeviceType.U2F,
            attestationObject: credential.response.attestationObject,
            clientDataJSON: credential.response.clientDataJSON,
            ext: JSON.stringify({
              codeType
            })
          }
        }
      });
    } catch (error) {
      if (!isUnmounted()) {
        setStateShowU2fRetryButton(true);

        updateData({
          errorMessage: intl('message:u2f_operation_fail_or_timeout')
        });
      }
    }
  }, [accountId, codeType, getMfaInfoToBindData, isUnmounted, getBindWebAuthnPublicKey, updateData]);

  const handleRetryClick = useCallback(() => {
    // 状态需要置为正在读取 U2F 安全密钥
    setStateGetU2fBindKeyLoading(true);
    // 清空错误
    updateData({
      errorMessage: ''
    });
    setStateShowU2fRetryButton(false);
    // 重新获取 U2F 安全密钥
    fetchU2fBindData();
  }, [updateData, fetchU2fBindData]);

  useEffect(() => {
    fetchU2fBindData();
  }, [fetchU2fBindData]);

  return <U2FUi {...{
    title: intl('attr:u2f_bind_title'),
    u2fSupported: stateU2fSupported,
    u2fKeyFetching: stateGetU2fBindKeyLoading,
    onU2FErrorRetryClick: handleRetryClick,
    showU2FRetryButton: stateShowU2fRetryButton
  }} />;
}
