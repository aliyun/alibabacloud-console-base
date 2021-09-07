import React, {
  useState,
  useEffect
} from 'react';
import styled from 'styled-components';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import u2fApi from '@alicloud/u2f-api';

import {
  ISubRiskVerifyDialogData
} from '../../../types';
import {
  EStep,
  EIconType,
  ESubMFADeviceType
} from '../../../const';
import intl from '../../../intl';
import Radio from '../../../rc/radio';
import getTicketType from '../../../util/common-utils/get-ticket-type';
import getU2fStateMessage from '../../../util/common-utils/get-u2f-state-message';
import U2FMessage from '../_components/u2f-message';

const ticketType = getTicketType();
const {
  u2fNotSupportedMsg
} = getU2fStateMessage;

const ScDesc = styled.div`
  margin: 10px 0px 15px 22px;
`;

export default function MfaChoose(): JSX.Element {
  const {
    updateData
  } = useDialog<void, ISubRiskVerifyDialogData>();

  const [stateRadioChecked, setStateRadioChecked] = useState<EStep.VMFA_BIND | EStep.U2F_BIND>(EStep.VMFA_BIND);
  const [stateU2FSupported, setStateU2FSupported] = useState<boolean>(false);

  useEffect(() => {
    u2fApi.isSupported().then(isU2FSupported => {
      setStateU2FSupported(isU2FSupported);
    });
  }, []);

  return <div>
    <U2FMessage {...{
      iconType: EIconType.error,
      message: u2fNotSupportedMsg
    }} />
    <Radio {...{
      checked: stateRadioChecked === EStep.VMFA_BIND,
      label: intl('attr:mfa_choose_vmfa'),
      onChange: checked => {
        if (!checked) {
          return;
        }

        setStateRadioChecked(EStep.VMFA_BIND);
        updateData({
          getBindMfaInfoPayload: {
            TicketType: ticketType,
            DeviceType: ESubMFADeviceType.VMFA
          }
        });
      }
    }} />
    <ScDesc>{intl('message:mfa_choose_vmfa')}</ScDesc>
    <Radio {...{
      checked: stateRadioChecked === EStep.U2F_BIND,
      disabled: !stateU2FSupported,
      label: intl('attr:mfa_choose_u2f'),
      onChange: checked => {
        if (!checked) {
          return;
        }

        setStateRadioChecked(EStep.U2F_BIND);
        updateData({
          getBindMfaInfoPayload: {
            TicketType: ticketType,
            DeviceType: ESubMFADeviceType.U2F
          }
        });
      }
    }} />
    <ScDesc>{intl('message:mfa_choose_u2f')}</ScDesc>
  </div>;
}
