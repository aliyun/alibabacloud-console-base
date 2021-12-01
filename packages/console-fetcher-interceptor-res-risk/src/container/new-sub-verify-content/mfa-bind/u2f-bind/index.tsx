import _get from 'lodash/get';
import React, {
  useState,
  useCallback,
  useEffect
} from 'react';

import {
  useDialog,
  confirm
} from '@alicloud/console-base-rc-dialog';
import u2fApi, {
  IErrorU2f
} from '@alicloud/u2f-api';
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
import getU2FStateMessage from '../../../../util/get-u2f-state-message';
import getTicketType from '../../../../util/get-ticket-type';
import intlU2FError from '../../../../util/intl-u2f-error';
import U2fUi from '../../_components/u2f-ui';

const ticketType = getTicketType();

export default function U2FBind(): JSX.Element {
  const isUnmounted = useIsUnmounted();
  const {
    data: {
      errorMessage,
      getBindMfaInfoData,
      u2fTimeout,
      canU2FRetry,
      subRiskInfo: {
        accountId,
        codeType
      }
    },
    updateData
  } = useDialog<void, INewSubAccountRisk>();

  const {
    noPopUp
  } = getU2FStateMessage;
  
  const [stateU2FSupported, setStateU2fSupported] = useState<boolean>(true);
  const [stateU2FBindKey, setStateGetU2fBindKey] = useState<boolean>(true);

  const u2fAppId = _get(getBindMfaInfoData as IGetBindU2FInfoData, 'U2FAppId', '') || ''; // null 的时候也用空字符串代替
  const u2fChallenge = _get(getBindMfaInfoData as IGetBindU2FInfoData, 'U2FChallenge', '') || '';
  const u2fVersion = _get(getBindMfaInfoData as IGetBindU2FInfoData, 'U2FVersion', '') || '';

  const fetchU2FBindData = useCallback(async () => {
    if (isUnmounted()) {
      return;
    }

    try {
      const isU2FSupported = await u2fApi.isSupported();

      setStateU2fSupported(isU2FSupported);

      if (!isU2FSupported) {
        slsU2FError({
          accountId,
          status: EStep.U2F_BIND,
          u2fNotSupported: true
        });

        return;
      }

      // 绑定 U2F
      const {
        clientData,
        registrationData
      } = await u2fApi.register({
        version: u2fVersion,
        appId: u2fAppId,
        challenge: u2fChallenge
      }, u2fTimeout);

      if (noPopUp) {
        // 提示需要用户允许读取 U2F 安全密钥。FireFox 浏览器原生实现了这个弹窗，Chrome 浏览器需要手动弹出弹窗
        const permitted = await confirm(intl('message:u2f_bind_confirm_tip'));
      
        setStateGetU2fBindKey(!permitted);
        
        if (!permitted) {
          // 如果用户点击了拒绝，那么就无法读取 U2F 安全密钥信息，此时需要报错并允许用户重试
          updateData({
            errorMessage: intl('message:u2f_get_key_cancel'),
            canU2FRetry: true
          });
        } else {
          updateData({
            primaryButtonDisabled: false
          });
        }
      } else {
        setStateGetU2fBindKey(false);
      }

      updateData({
        bindMfaPayload: {
          AccountId: accountId,
          TicketType: ticketType,
          DeviceType: ESubMFADeviceType.U2F,
          U2FClientData: clientData,
          U2FRegistrationData: registrationData,
          U2FAppId: u2fAppId,
          U2FVersion: u2fVersion,
          Ext: JSON.stringify({
            codeType
          })
        }
      });
    } catch (error) {
      const u2fErrorCode = (error as IErrorU2f).metaData?.code;
      const u2fErrorMsg = intlU2FError(u2fErrorCode) || '';

      slsU2FError({
        accountId,
        u2fErrorCode,
        status: EStep.U2F_BIND,
        errorMessage: u2fErrorMsg
      });
      
      // 如果是点击上一步回到 MFA 设备选择页面，再点击浏览器的禁止读取 U2F，那么顶部提示不应该展示错误信息
      if (!isUnmounted()) {
        updateData({
          errorMessage: u2fErrorMsg,
          // 如果获取 U2F 安全密钥失败，那么【重试】按钮也应该要展示，来重新获取 U2F 安全密钥
          canU2FRetry: true
        });
      }
    }
  }, [accountId, codeType, u2fAppId, u2fVersion, u2fChallenge, noPopUp, u2fTimeout, isUnmounted, updateData]);

  const handleRetryClick = useCallback(() => {
    updateData({
      errorMessage: '', // 重新获取 U2F 安全密钥时，需要把报错信息清空，才能展示获取 U2F 安全密钥的状态
      canU2FRetry: false // 保证 U2F 场景下正常的接口报错，Message 提示中没有重试按钮
    });

    // 状态需要置为正在读取 U2F 安全密钥
    setStateGetU2fBindKey(true);
    
    // 重新获取 U2F 安全密钥
    fetchU2FBindData();
  }, [updateData, fetchU2FBindData]);

  useEffect(() => {
    updateData({
      primaryButtonDisabled: true
    });
    fetchU2FBindData();
  }, [updateData, fetchU2FBindData]);

  return <U2fUi {...{
    u2fSupported: stateU2FSupported,
    getU2fKey: stateU2FBindKey,
    title: intl('attr:u2f_bind_title'),
    onRetryClick: handleRetryClick,
    canU2FRetry,
    errorMessage
  }} />;
}
