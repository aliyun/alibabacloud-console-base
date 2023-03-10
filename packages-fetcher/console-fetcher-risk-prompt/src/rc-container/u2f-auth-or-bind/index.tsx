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
  DataGetU2fInfoToAuth,
  DataGetU2fWebAuthnInfoToAuth,
  type ParamsVerifySubAccount
} from '@alicloud/console-fetcher-risk-data';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData,
  TPrimaryButtonDisabledObject,
  TSubGetVerificationToAuthData
} from '../../types';
import {
  ESceneKey
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

function getAuthU2fData(subGetVerificationToAuthData?: TSubGetVerificationToAuthData): DataGetU2fInfoToAuth | DataGetU2fWebAuthnInfoToAuth | null {
  if (subGetVerificationToAuthData) {
    const foundU2fData = subGetVerificationToAuthData.verificationOrBindValidatorArray.find(o => o.deviceType === ESubVerificationDeviceType.U2F);

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
      errorMessageObject,
      primaryButtonDisabledObject,
      subVerificationParamArray,
      fromBindU2FtoAuthU2F,
      subGetMfaInfoToBindData,
      subGetVerificationToAuthData
    },
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const [stateU2fErrorMessage, setStateU2fErrorMessage] = useState<string>('');
  const [stateGetU2fKeyLoading, setStateGetU2fKeyLoading] = useState<boolean>(true);
  const [stateShowU2fRetryButton, setStateShowU2fRetryButton] = useState<boolean>(false);
  
  // 页面加载会通过 useEffect 触发一次 fetchU2fBindOrAuthData。在获取到 U2F 安全密钥之后，会更新 primaryButtonDisabledObject & subVerificationParamArray。
  // 由于更新 primaryButtonDisabledObject & subVerificationParamArray 依赖于两者未更新前的值。为了避免 fetchU2fBindOrAuthData 的 depth 一直变化，将两者转化为 state，并且采用 function 的写法更新 state
  const [stateSubVerificationParams, setStateSubVerificationParams] = useState<ParamsVerifySubAccount[] | undefined>(subVerificationParamArray);
  const [statePrimaryButtonDisabledObject, setStatePrimaryButtonDisabledObject] = useState<TPrimaryButtonDisabledObject>(primaryButtonDisabledObject);

  const fetchU2fBindData = useCallback(async () => {
    if (!subGetMfaInfoToBindData || subGetMfaInfoToBindData.deviceType === ESubVerificationDeviceType.VMFA) {
      return setStateU2fErrorMessage(intl('message:get_u2f_key_params_error'));
    }

    const registerWebAuthnPublicKey = getAuthWebAuthnBindPublicKey(subGetMfaInfoToBindData);
    const bindU2fCredential = await startRegistration(registerWebAuthnPublicKey);

    setStateGetU2fKeyLoading(false);
    updateData({
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
  }, [accountId, codeType, subGetMfaInfoToBindData, updateData]);

  const fetchU2fAuthData = useCallback(async () => {
    const getU2fInfoToAuthData = getAuthU2fData(subGetVerificationToAuthData);

    if (!getU2fInfoToAuthData) {
      return setStateU2fErrorMessage(intl('message:get_u2f_key_params_error'));
    }

    const authWebAuthnPublicKey = getAuthWebAuthnAuthPublicKey(getU2fInfoToAuthData);

    const authU2fCredential = await startAuthentication(authWebAuthnPublicKey);

    setStateGetU2fKeyLoading(false);
    setStatePrimaryButtonDisabledObject(prev => ({
      ...prev,
      [ESubVerificationDeviceType.U2F]: false
    }));
    setStateSubVerificationParams(prev => {
      return getUpdateSubVerificationParams({
        currentSubVerificationParams: prev,
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
      });
    });
  }, [accountId, codeType, subGetVerificationToAuthData]);

  const fetchU2fBindOrAuthData = useCallback(async () => {
    try {
      const webAuthnSupported = browserSupportsWebauthn();

      if (!webAuthnSupported) {
        setStateU2fErrorMessage(intl('message:u2f_browser_not_support'));

        return;
      }

      // U2F 绑定场景
      if (type === 'u2f_bind') {
        await fetchU2fBindData();
      } else {
        await fetchU2fAuthData();
      }
    } catch (error) {
      setStateShowU2fRetryButton(true);

      setStateU2fErrorMessage(intl('message:u2f_operation_fail_or_timeout'));
    }
  }, [type, fetchU2fAuthData, fetchU2fBindData]);

  const handleRetryClick = useCallback(() => {
    const keyOfErrorMessageObject = type === 'u2f_auth' ? ESceneKey.BIND_MFA : ESubVerificationDeviceType.U2F;
    
    // 清空 API 错误
    updateData({
      errorMessageObject: {
        ...errorMessageObject,
        [keyOfErrorMessageObject]: ''
      }
    });
    setStateU2fErrorMessage('');

    // 状态需要置为正在读取 U2F 安全密钥
    setStateGetU2fKeyLoading(true);
    // 并且隐藏重新获取按钮
    setStateShowU2fRetryButton(false);

    // 重新获取 U2F 安全密钥
    fetchU2fBindOrAuthData();
  }, [type, errorMessageObject, updateData, fetchU2fBindOrAuthData]);

  useEffect(() => {
    // 如果用户是在绑定 U2F 后，请求被风控的接口出错，从而跳到了 U2F 验证的场景，那么顶部会有错误信息以及重试按钮，需要点击重试按钮后才会去获取 U2F 验证密钥。
    if (type === 'u2f_auth' && fromBindU2FtoAuthU2F) {
      return;
    }

    fetchU2fBindOrAuthData();
  }, [type, fromBindU2FtoAuthU2F, fetchU2fBindOrAuthData]);

  useEffect(() => {
    updateData({
      subVerificationParamArray: stateSubVerificationParams,
      primaryButtonDisabledObject: statePrimaryButtonDisabledObject
    });
  }, [stateSubVerificationParams, statePrimaryButtonDisabledObject, updateData]);

  return <U2fUi {...{
    type,
    u2fErrorMessage: stateU2fErrorMessage,
    u2fKeyFetching: stateGetU2fKeyLoading,
    onU2FErrorRetryClick: handleRetryClick,
    showU2FRetryButton: stateShowU2fRetryButton
  }} />;
}
