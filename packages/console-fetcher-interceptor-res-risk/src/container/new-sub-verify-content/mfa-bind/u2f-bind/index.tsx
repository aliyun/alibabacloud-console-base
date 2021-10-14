import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import _get from 'lodash/get';

import {
  useDialog,
  confirm
} from '@alicloud/console-base-rc-dialog';
import u2fApi from '@alicloud/u2f-api';
import useIsUnmounted from '@alicloud/react-hook-is-unmounted';

import {
  IGetBindU2FInfoData,
  INewSubAccountRisk
} from '../../../../types';
import {
  ESubMFADeviceType
} from '../../../../const';
import intl from '../../../../intl';
import getU2FStateMessage from '../../../../util/get-u2f-state-message';
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
  const [stateGetU2fKey, setStateGetU2fKey] = useState<boolean>(true);

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
        const permitted = await confirm(intl('message:u2f_bind_confirm_tip'));

        setStateGetU2fKey(!permitted);
        
        if (!permitted) {
          updateData({
            errorMessage: intl('message:u2f_get_key_cancel')
          });
        } else {
          updateData({
            primaryButtonDisabled: false
          });
        }
      } else {
        setStateGetU2fKey(false);
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
      updateData({
        errorMessage: (error as Error)?.message || ''
      });
    }
  }, [accountId, codeType, u2fAppId, u2fVersion, u2fChallenge, noPopUp, u2fTimeout, isUnmounted, updateData]);

  useEffect(() => {
    updateData({
      primaryButtonDisabled: true
    });
    fetchU2FBindData();
  }, [updateData, fetchU2FBindData]);

  return <U2fUi {...{
    u2fSupported: stateU2FSupported,
    getU2fKey: stateGetU2fKey,
    title: intl('attr:u2f_bind_title'),
    onRetryClick: fetchU2FBindData,
    canU2FRetry,
    errorMessage
  }} />;
}
