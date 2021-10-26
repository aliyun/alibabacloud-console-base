import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import _get from 'lodash/get';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import u2fApi, {
  IErrorU2f
} from '@alicloud/u2f-api';
import useIsUnmounted from '@alicloud/react-hook-is-unmounted';

import {
  IGetAuthU2FInfoData,
  INewSubAccountRisk
} from '../../../../types';
import {
  EPayloadVerifyType
} from '../../../../const';
import intl from '../../../../intl';
import getTicketType from '../../../../util/get-ticket-type';
import intlU2FError from '../../../../util/intl-u2f-error';
import U2fUi from '../../_components/u2f-ui';

const ticketType = getTicketType();

export default function U2FAuth(): JSX.Element {
  const isUnmounted = useIsUnmounted();
  const {
    data: {
      errorMessage,
      u2fTimeout,
      canU2FRetry,
      fromU2FBindtoAuth,
      getAuthMfaInfoData,
      subRiskInfo: {
        accountId,
        codeType
      }
    },
    updateData
  } = useDialog<void, INewSubAccountRisk>();

  const [stateU2FSupported, setStateU2fSupported] = useState<boolean>(true);
  const [stateGetU2fAuthKey, setStateGetU2fAuthKey] = useState<boolean>(true);

  const version = _get(getAuthMfaInfoData as IGetAuthU2FInfoData, 'U2FVersion', '');
  const appId = _get(getAuthMfaInfoData as IGetAuthU2FInfoData, 'U2FAppId', '');
  const challenge = _get(getAuthMfaInfoData as IGetAuthU2FInfoData, 'U2FChallenge', '');
  const u2fKeyHandle = _get(getAuthMfaInfoData as IGetAuthU2FInfoData, 'U2FKeyHandle', '');
  
  const fetchU2FAuthData = useCallback(async () => {
    if (isUnmounted()) {
      return;
    }

    try {
      const isU2FSupported = await u2fApi.isSupported();

      setStateU2fSupported(isU2FSupported);

      if (!isU2FSupported) {
        return;
      }

      const {
        clientData,
        keyHandle,
        signatureData
      } = await u2fApi.sign({
        version,
        appId,
        challenge,
        keyHandle: u2fKeyHandle
      }, u2fTimeout);

      setStateGetU2fAuthKey(false);
      updateData({
        verifyMfaPayload: {
          AccountId: accountId,
          TicketType: ticketType,
          VerifyType: EPayloadVerifyType.MFA,
          U2fSignatureData: signatureData,
          U2fKeyHandle: keyHandle,
          U2fClientData: clientData,
          Ext: JSON.stringify({
            codeType
          })
        },
        primaryButtonDisabled: false
      });
    } catch (error) {
      updateData({
        errorMessage: intlU2FError((error as IErrorU2f).metaData?.code) || '',
        // 如果获取 U2F 安全密钥失败，那么【重试】按钮也应该要展示，来重新获取 U2F 安全密钥
        canU2FRetry: true
      });
    }
  }, [appId, challenge, u2fKeyHandle, version, u2fTimeout, accountId, codeType, isUnmounted, updateData]);

  const handleRetryClick = useCallback(() => {
    updateData({
      errorMessage: '', // 重新获取 U2F 安全密钥时，需要把报错信息清空，才能展示获取 U2F 安全密钥的状态。
      canU2FRetry: false // U2F 场景下正常的接口报错，Message 提示中不带重试按钮
    });

    // 状态需要置为正在读取 U2F 安全密钥
    setStateGetU2fAuthKey(true);
    
    // 重新获取 U2F 安全密钥
    fetchU2FAuthData();
  }, [updateData, fetchU2FAuthData]);

  useEffect(() => {
    updateData({
      primaryButtonDisabled: true
    });

    // 如果用户是在绑定 U2F 后，请求被风控的接口出错，从而跳到了 U2F 验证的场景，那么顶部会有错误信息以及重试按钮，需要点击重试按钮后才会调用 u2fApi.sign() 获取 U2F 验证密钥。
    if (!fromU2FBindtoAuth) {
      fetchU2FAuthData();
    }
  }, [fromU2FBindtoAuth, updateData, fetchU2FAuthData]);

  return <U2fUi {...{
    u2fSupported: stateU2FSupported,
    getU2fKey: stateGetU2fAuthKey,
    title: intl('attr:u2f_auth_title'),
    onRetryClick: handleRetryClick,
    canU2FRetry,
    errorMessage
  }} />;
}
