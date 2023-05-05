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
  ESubVerificationDeviceType,
  type ParamsVerifySubAccount
} from '@alicloud/console-fetcher-risk-data';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData,
  TPrimaryButtonDisabledObject
} from '../../types';
import {
  useModelProps
} from '../../model';
import U2fUi from '../../rc/u2f-ui';
import intl from '../../intl';
import {
  getUpdateSubVerificationParams
} from '../../util';

import getAuthU2fData from './get-auth-u2f-data';
import getAuthWebAuthnAuthPublicKey from './get-u2f-webauthn-public-key';

export default function U2fAuthUi(): JSX.Element {
  const {
    codeType,
    accountId
  } = useModelProps();
  const {
    data: {
      errorMessageObject,
      primaryButtonDisabledObject,
      subVerificationParamArray,
      subGetVerificationToAuthData
    },
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const [stateU2fErrorMessage, setStateU2fErrorMessage] = useState<string>('');
  const [stateGetU2fKeyLoading, setStateGetU2fKeyLoading] = useState<boolean>(true);
  const [stateShowU2fRetryButton, setStateShowU2fRetryButton] = useState<boolean>(false);
  
  // 页面加载会通过 useEffect 触发一次 fetchU2fAuthData U2F 安全密钥之后，会更新 primaryButtonDisabledObject & subVerificationParamArray。
  // 由于更新 primaryButtonDisabledObject & subVerificationParamArray 依赖于两者未更新前的值。为了避免 fetchU2fAuthData 的 deps 一直变化，将两者转化为 state，并且采用 function 的写法更新 state
  const [stateSubVerificationParams, setStateSubVerificationParams] = useState<ParamsVerifySubAccount[] | undefined>(subVerificationParamArray);
  const [statePrimaryButtonDisabledObject, setStatePrimaryButtonDisabledObject] = useState<TPrimaryButtonDisabledObject>(primaryButtonDisabledObject);

  const getU2fCredentialAndUpdateParams = useCallback(async () => {
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

  const fetchU2fAuthData = useCallback(async () => {
    try {
      const webAuthnSupported = browserSupportsWebauthn();

      if (!webAuthnSupported) {
        setStateU2fErrorMessage(intl('message:u2f_browser_not_support'));

        return;
      }

      await getU2fCredentialAndUpdateParams();
    } catch (error) {
      setStateShowU2fRetryButton(true);

      setStateU2fErrorMessage(intl('message:u2f_operation_fail_or_timeout'));
    }
  }, [getU2fCredentialAndUpdateParams]);

  // 重试按钮
  const handleRetryClick = useCallback(() => {
    // 清空 API 错误
    updateData({
      errorMessageObject: {
        ...errorMessageObject,
        [ESubVerificationDeviceType.U2F]: ''
      }
    });
    setStateU2fErrorMessage('');

    // 状态需要置为正在读取 U2F 安全密钥
    setStateGetU2fKeyLoading(true);
    // 并且隐藏重新获取按钮
    setStateShowU2fRetryButton(false);

    // 重新获取 U2F 安全密钥
    fetchU2fAuthData();
  }, [errorMessageObject, updateData, fetchU2fAuthData]);

  useEffect(() => {
    fetchU2fAuthData();
  }, [fetchU2fAuthData]);

  useEffect(() => {
    updateData({
      subVerificationParamArray: stateSubVerificationParams,
      primaryButtonDisabledObject: statePrimaryButtonDisabledObject
    });
  }, [stateSubVerificationParams, statePrimaryButtonDisabledObject, updateData]);

  return <U2fUi {...{
    u2fErrorMessage: stateU2fErrorMessage,
    u2fKeyFetching: stateGetU2fKeyLoading,
    onU2FErrorRetryClick: handleRetryClick,
    showU2FRetryButton: stateShowU2fRetryButton
  }} />;
}
