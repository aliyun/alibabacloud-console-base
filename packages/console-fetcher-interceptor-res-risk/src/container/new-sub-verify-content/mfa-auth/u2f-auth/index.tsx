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
import U2fUi from '../../_components/u2f-ui';

const ticketType = getTicketType();

export default function U2FAuth(): JSX.Element {
  const isUnmounted = useIsUnmounted();
  const {
    data: {
      errorMessage,
      getAuthMfaInfoData,
      u2fTimeout,
      subRiskInfo: {
        userPrincipalName
      }
    },
    updateData
  } = useDialog<void, INewSubAccountRisk>();

  const [stateU2FSupported, setStateU2fSupported] = useState<boolean>(true);
  const [stateGetU2fKey, setStateGetU2fKey] = useState<boolean>(true);

  const version = _get(getAuthMfaInfoData as IGetAuthU2FInfoData, 'U2FVersion', '');
  const appId = _get(getAuthMfaInfoData as IGetAuthU2FInfoData, 'U2FAppId', '');
  const challenge = _get(getAuthMfaInfoData as IGetAuthU2FInfoData, 'U2FChallenge', '');
  const u2fKeyHandle = _get(getAuthMfaInfoData as IGetAuthU2FInfoData, 'U2FKeyHandle', '');
  
  const fetchData = useCallback(async () => {
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

      setStateGetU2fKey(false);
      updateData({
        verifyMfaPayload: {
          TargetUserPrincipalName: userPrincipalName,
          TicketType: ticketType,
          VerifyType: EPayloadVerifyType.MFA,
          U2fSignatureData: signatureData,
          U2fKeyHandle: keyHandle,
          U2fClientData: clientData
        },
        primaryButtonDisabled: false
      });
    } catch (error) {
      updateData({
        errorMessage: (error as Error)?.message || ''
      });
    }
  }, [appId, challenge, u2fKeyHandle, version, u2fTimeout, userPrincipalName, isUnmounted, updateData]);

  useEffect(() => {
    updateData({
      primaryButtonDisabled: true
    });
    fetchData();
  }, [updateData, fetchData]);

  return <U2fUi {...{
    u2fSupported: stateU2FSupported,
    getU2fKey: stateGetU2fKey,
    title: intl('attr:u2f_auth_title'),
    errorMessage
  }} />;
}
