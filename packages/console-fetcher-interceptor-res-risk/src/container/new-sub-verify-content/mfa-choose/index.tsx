import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import styled from 'styled-components';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import {
  mixinTextError
} from '@alicloud/console-base-theme';
import u2fApi from '@alicloud/u2f-api';
import useIsUnmounted from '@alicloud/react-hook-is-unmounted';

import {
  INewSubAccountRisk
} from '../../../types';
import {
  EStep,
  EIconType,
  ESubMFADeviceType
} from '../../../const';
import intl from '../../../intl';
import Radio from '../../../rc/radio';
import getTicketType from '../../../util/get-ticket-type';
import getU2fStateMessage from '../../../util/get-u2f-state-message';
import U2FMessage from '../_components/u2f-message';

const ScError = styled.div`
  margin-top: 8px;
  ${mixinTextError}
`;

const ScDesc = styled.div`
  margin: 10px 0 16px 20px;
`;

const ticketType = getTicketType();
const {
  u2fNotSupportedMsg
} = getU2fStateMessage;

export default function MfaChoose(): JSX.Element {
  const isUnmounted = useIsUnmounted();
  const {
    data: {
      subRiskInfo: {
        userPrincipalName
      },
      errorMessage
    },
    updateData
  } = useDialog<void, INewSubAccountRisk>();

  const [stateRadioChecked, setStateRadioChecked] = useState<EStep.VMFA_BIND | EStep.U2F_BIND>(EStep.VMFA_BIND);
  const [stateU2FSupported, setStateU2FSupported] = useState<boolean>(false);

  const handleVMFARadioChange = useCallback((checked: boolean): void => {
    if (!checked) {
      return;
    }

    setStateRadioChecked(EStep.VMFA_BIND);
    updateData({
      getBindMfaInfoPayload: {
        UserPrincipalName: userPrincipalName,
        TicketType: ticketType,
        DeviceType: ESubMFADeviceType.VMFA
      }
    });
  }, [userPrincipalName, updateData]);

  const handleU2FRadioChange = useCallback((checked: boolean): void => {
    if (!checked) {
      return;
    }

    setStateRadioChecked(EStep.U2F_BIND);
    updateData({
      getBindMfaInfoPayload: {
        UserPrincipalName: userPrincipalName,
        TicketType: ticketType,
        DeviceType: ESubMFADeviceType.U2F
      }
    });
  }, [userPrincipalName, updateData]);

  useEffect(() => {
    if (isUnmounted()) {
      return;
    }

    // 由于默认的 MFA 设备类型是 VMFA，因此默认的 getBindMfaInfoPayload 也是 VMFA 类型的
    updateData({
      getBindMfaInfoPayload: {
        UserPrincipalName: userPrincipalName,
        TicketType: ticketType,
        DeviceType: ESubMFADeviceType.VMFA
      }
    });
    
    u2fApi.isSupported().then(isU2FSupported => {
      setStateU2FSupported(isU2FSupported);
    });
  }, [userPrincipalName, isUnmounted, updateData]);

  return <div>
    {!stateU2FSupported ? <U2FMessage {...{
      iconType: EIconType.error,
      message: u2fNotSupportedMsg
    }} /> : null}
    <Radio {...{
      checked: stateRadioChecked === EStep.VMFA_BIND,
      label: intl('attr:mfa_choose_vmfa'),
      onChange: handleVMFARadioChange
    }} />
    <ScDesc>{intl('message:mfa_choose_vmfa')}</ScDesc>
    <Radio {...{
      checked: stateRadioChecked === EStep.U2F_BIND,
      disabled: !stateU2FSupported,
      label: intl('attr:mfa_choose_u2f'),
      onChange: handleU2FRadioChange
    }} />
    <ScDesc>{intl('message:mfa_choose_u2f')}</ScDesc>
    <ScError>
      {errorMessage}
    </ScError>
  </div>;
}
