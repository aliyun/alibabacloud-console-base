import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import _get from 'lodash/get';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import u2fApi from '@alicloud/u2f-api';

import {
  IGetAuthU2FInfoData,
  ISubRiskVerifyDialogData
} from '../../../../types';
import {
  EU2FDescKey,
  EPayloadVerifyType,
  U2F_TIMEOUT
} from '../../../../const';
import intl from '../../../../intl';
import getTicketType from '../../../../util/common-utils/get-ticket-type';
import U2fUi from '../../_components/u2f-ui';

const ticketType = getTicketType();

export default function U2FAuth(): JSX.Element {
  const {
    data: {
      errorMessage,
      getAuthMfaInfoData
    },
    updateData
  } = useDialog<void, ISubRiskVerifyDialogData>();

  const descriptions = [{
    key: EU2FDescKey.AUTH_U2F_KEY,
    desc: intl('message:u2f_auth_step')
  }];

  const [stateU2FSupported, setStateU2fSupported] = useState<boolean>(false);
  const [stateGetU2fKey, setStateGetU2fKey] = useState<boolean>(true);

  const version = _get(getAuthMfaInfoData as IGetAuthU2FInfoData, 'U2FVersion', '');
  const appId = _get(getAuthMfaInfoData as IGetAuthU2FInfoData, 'U2FAppId', '');
  const challenge = _get(getAuthMfaInfoData as IGetAuthU2FInfoData, 'U2FChallenge', '');
  const u2fKeyHandle = _get(getAuthMfaInfoData as IGetAuthU2FInfoData, 'U2FKeyHandle', '');
  
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

      const {
        clientData,
        keyHandle,
        signatureData
      } = await u2fApi.sign({
        version,
        appId,
        challenge,
        keyHandle: u2fKeyHandle
      }, U2F_TIMEOUT);

      setStateGetU2fKey(false);
      updateData({
        verifyMfaPayload: {
          TicketType: ticketType,
          VerifyType: EPayloadVerifyType.MFA,
          U2fSignatureData: signatureData,
          U2fKeyHandle: keyHandle,
          U2fClientData: clientData
        }
      });
    } catch (error) {
      updateData({
        errorMessage: (error as Error)?.message || ''
      });
    }
  }, [appId, challenge, u2fKeyHandle, version, updateData]);

  useEffect(() => {
    updateData({
      primaryButtonDisabled: false
    });
    fetchData();
  }, [updateData, fetchData]);

  return <U2fUi {...{
    u2fSupported: stateU2FSupported,
    getU2fKey: stateGetU2fKey,
    title: intl('message:u2f_auth_description'),
    descriptions,
    errorMessage
  }} />;
}
