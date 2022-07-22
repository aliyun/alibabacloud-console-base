import React, {
  useState,
  useMemo,
  useEffect,
  useCallback
} from 'react';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IPayloadBindVmfa,
  IDialogDataNewSubAccountRisk
} from '../../../../../types';
import {
  ESubMfaDeviceType
} from '../../../../../enum';
import intl from '../../../../../intl';
import Form from '../../../../../rc/form';
import XIcon from '../../../../../rc/x-icon';
import VmfaInput from '../../../_components/vmfa-input';
import getTicketType from '../../../../../util/get-ticket-type';
import getInputError from '../../../../../util/get-input-error';

const ticketType = getTicketType();

export default function VMfaBindForm(): JSX.Element {
  const {
    data: {
      subRiskInfo: {
        accountId,
        codeType
      }
    },
    updateData
  } = useDialog<void, IDialogDataNewSubAccountRisk>();

  const [stateCode1, setStateCode1] = useState<string>('');
  const [stateCode2, setStateCode2] = useState<string>('');
  const [stateInput1Error, setStateInput1Error] = useState<string>('');
  const [stateInput2Error, setStateInput2Error] = useState<string>('');
  const [stateInput1EverChanged, setStateInput1EverChanged] = useState<boolean>(false);
  const [stateInput2EverChanged, setStateInput2EverChanged] = useState<boolean>(false);

  const handleCode1InputChange = useCallback(inputCode1 => {
    setStateCode1(inputCode1);
    setStateInput1EverChanged(true);
  }, []);

  const handleCode2InputChange = useCallback(inputCode2 => {
    setStateCode2(inputCode2);
    setStateInput2EverChanged(true);
  }, []);

  const input1InnerRight = useMemo(() => {
    return <XIcon onClick={() => {
      setStateCode1('');
      updateData({
        errorMessage: ''
      });
    }} />;
  }, [updateData]);

  const input2InnerRight = useMemo(() => {
    return <XIcon onClick={() => {
      setStateCode2('');
      updateData({
        errorMessage: ''
      });
    }} />;
  }, [updateData]);

  useEffect(() => {
    const newBindMfaPayload: IPayloadBindVmfa = {
      AccountId: accountId,
      TicketType: ticketType,
      DeviceType: ESubMfaDeviceType.VMFA,
      Ext: JSON.stringify({
        codeType
      }),
      Code1: stateCode1,
      Code2: stateCode2
    };
    const input1Error = getInputError(stateCode1, stateInput1EverChanged);
    const input2Error = getInputError(stateCode2, stateInput2EverChanged);
    const primaryButtonDisabled = ((): boolean => {
      if (!stateInput1EverChanged || !stateInput2EverChanged) {
        return true;
      }

      return Boolean(input1Error) || Boolean(input2Error);
    })();

    setStateInput1Error(input1Error);
    setStateInput2Error(input2Error);
    updateData({
      bindMfaPayload: newBindMfaPayload,
      errorMessage: '',
      primaryButtonDisabled
    });
  }, [accountId, codeType, stateCode1, stateCode2, stateInput1EverChanged, stateInput2EverChanged, updateData]);
  
  return <>
    <Form {...{
      items: [{
        label: intl('attr:vmfa_bind_code1'),
        labelWidth: 150,
        labelTextAlign: 'center',
        content: <VmfaInput {...{
          value: stateCode1,
          errorMessage: stateInput1Error,
          onChange: handleCode1InputChange,
          innerRight: input1InnerRight
        }} />
      }, {
        label: intl('attr:vmfa_bind_code2'),
        labelWidth: 150,
        labelTextAlign: 'center',
        content: <VmfaInput {...{
          value: stateCode2,
          errorMessage: stateInput2Error,
          onChange: handleCode2InputChange,
          innerRight: input2InnerRight
        }} />
      }]
    }} />
  </>;
}