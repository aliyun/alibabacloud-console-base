import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  mixinTextError
} from '@alicloud/console-base-theme';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import Input from '@alicloud/console-base-rc-input';

import {
  IBindVMfaPayload,
  ISubRiskVerifyDialogData
} from '../../../../../types';
import {
  ESubMFADeviceType
} from '../../../../../const';
import intl from '../../../../../intl';
import Form from '../../../../../rc/form';
import getTicketType from '../../../../../util/common-utils/get-ticket-type';

const ScInput = styled(Input)`
  margin-right: 12px;
  width: 100%;
`;

const ScError = styled.div`
  margin-top: 8px;
  ${mixinTextError};
`;

const ticketType = getTicketType();

export default function VMfaBindForm(): JSX.Element {
  const {
    data: {
      errorMessage
    },
    updateData
  } = useDialog<void, ISubRiskVerifyDialogData>();

  const [stateCode1, setStateCode1] = useState<string>('');
  const [stateCode2, setStateCode2] = useState<string>('');

  const handleCode1InputChange = useCallback(inputCode1 => {
    const newBindMfaPayload: IBindVMfaPayload = {
      TicketType: ticketType,
      DeviceType: ESubMFADeviceType.VMFA,
      Code1: inputCode1,
      Code2: stateCode2
    };

    setStateCode1(inputCode1);
    updateData({
      bindMfaPayload: newBindMfaPayload
    });
  }, [stateCode2, updateData]);

  const handleCode2InputChange = useCallback(inputCode2 => {
    const newBindMfaPayload: IBindVMfaPayload = {
      TicketType: ticketType,
      DeviceType: ESubMFADeviceType.VMFA,
      Code1: stateCode1,
      Code2: inputCode2
    };

    setStateCode2(inputCode2);
    updateData({
      bindMfaPayload: newBindMfaPayload
    });
  }, [stateCode1, updateData]);

  return <Form {...{
    items: [{
      label: intl('attr:vmfa_bind_code1'),
      labelWidth: '100px',
      labelTextAlign: 'center',
      content: <ScInput {...{
        onChange: handleCode1InputChange
      }} />
    }, {
      label: intl('attr:vmfa_bind_code2'),
      labelWidth: '100px',
      labelTextAlign: 'center',
      content: <div>
        <ScInput {...{
          onChange: handleCode2InputChange
        }} />
        <ScError>{errorMessage}</ScError>
      </div>
    }]
  }} />;
}