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

import {
  IGetBindU2FInfoData,
  ISubRiskVerifyDialogData
} from '../../../../types';
import {
  ESubMFADeviceType,
  EU2FDescKey,
  U2F_TIMEOUT
} from '../../../../const';
import intl from '../../../../intl';
import getU2FStateMessage from '../../../../util/common-utils/get-u2f-state-message';
import getTicketType from '../../../../util/common-utils/get-ticket-type';
import U2fUi from '../../_components/u2f-ui';

const ticketType = getTicketType();

export default function U2FBind(): JSX.Element {
  const {
    data: {
      errorMessage,
      getBindMfaInfoData
    },
    updateData
  } = useDialog<void, ISubRiskVerifyDialogData>();

  const {
    noPopUp
  } = getU2FStateMessage;
  const descriptions = [{
    key: EU2FDescKey.BIND_U2F_KEY1,
    desc: intl('message:u2f_bind_step1')
  }, {
    key: EU2FDescKey.BIND_U2F_KEY2,
    desc: intl('message:u2f_bind_step2')
  }];
  
  const [stateU2FSupported, setStateU2fSupported] = useState<boolean>(false);
  const [stateGetU2fKey, setStateGetU2fKey] = useState<boolean>(true);

  const u2fAppId = _get(getBindMfaInfoData as IGetBindU2FInfoData, 'U2FAppId', '');
  const u2fChallenge = _get(getBindMfaInfoData as IGetBindU2FInfoData, 'U2FChallenge', '');
  const u2fVersion = _get(getBindMfaInfoData as IGetBindU2FInfoData, 'U2FVersion', '');

  const fetchData = useCallback(async () => {
    try {
      const isU2FSupported = await u2fApi.isSupported();

      setStateU2fSupported(isU2FSupported);

      if (!isU2FSupported) {
        updateData({
          primaryButtonDisabled: true
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
      }, U2F_TIMEOUT);

      if (noPopUp) {
        const permitted = await confirm(intl('message:u2f_bind_confirm_tip'));

        setStateGetU2fKey(!permitted);

        updateData({
          primaryButtonDisabled: !permitted
        });
        
        if (!permitted) {
          updateData({
            errorMessage: intl('message:u2f_get_key_cancel')
          });
        }
      } else {
        setStateGetU2fKey(false);
      }

      updateData({
        bindMfaPayload: {
          TicketType: ticketType,
          DeviceType: ESubMFADeviceType.U2F,
          U2FClientData: clientData,
          U2FRegistrationData: registrationData,
          U2FAppId: u2fAppId,
          U2FVersion: u2fVersion
        }
      });
    } catch (error) {
      updateData({
        errorMessage: (error as Error)?.message || ''
      });
    }
  }, [u2fAppId, u2fVersion, u2fChallenge, noPopUp, updateData]);

  useEffect(() => {
    updateData({
      primaryButtonDisabled: false
    });
    fetchData();
  }, [updateData, fetchData]);

  return <U2fUi {...{
    u2fSupported: stateU2FSupported,
    getU2fKey: stateGetU2fKey,
    title: intl('message:u2f_bind_description'),
    descriptions,
    errorMessage
  }} />;
}
