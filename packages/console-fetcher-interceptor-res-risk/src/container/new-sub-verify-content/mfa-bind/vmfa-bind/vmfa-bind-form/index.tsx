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
  IBindVMfaPayload,
  INewSubAccountRisk
} from '../../../../../types';
import {
  ESubMfaDeviceType
} from '../../../../../enum';
import {
  REG_MFA_CODE
} from '../../../../../const';
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
  } = useDialog<void, INewSubAccountRisk>();

  const [stateCode1, setStateCode1] = useState<string>('');
  const [stateCode2, setStateCode2] = useState<string>('');
  const [stateInput1IsError, setStateInput1IsError] = useState<boolean>(false);
  const [stateInput2IsError, setStateInput2IsError] = useState<boolean>(false);

  const handleCode1InputChange = useCallback(inputCode1 => {
    const newBindMfaPayload: IBindVMfaPayload = {
      TicketType: ticketType,
      AccountId: accountId,
      DeviceType: ESubMfaDeviceType.VMFA,
      Ext: JSON.stringify({
        codeType: ''
      }),
      Code1: inputCode1,
      Code2: stateCode2
    };

    setStateCode1(inputCode1);
    setStateInput1IsError(!REG_MFA_CODE.test(inputCode1));
    updateData({
      bindMfaPayload: newBindMfaPayload,
      errorMessage: '',
      primaryButtonDisabled: !REG_MFA_CODE.test(inputCode1) || !REG_MFA_CODE.test(stateCode2)
    });
  }, [accountId, stateCode2, updateData]);

  const handleCode2InputChange = useCallback(inputCode2 => {
    const newBindMfaPayload: IBindVMfaPayload = {
      AccountId: accountId,
      TicketType: ticketType,
      DeviceType: ESubMfaDeviceType.VMFA,
      Ext: JSON.stringify({
        codeType
      }),
      Code1: stateCode1,
      Code2: inputCode2
    };

    setStateCode2(inputCode2);
    setStateInput2IsError(!REG_MFA_CODE.test(inputCode2));
    updateData({
      bindMfaPayload: newBindMfaPayload,
      errorMessage: '',
      primaryButtonDisabled: !REG_MFA_CODE.test(inputCode2) || !REG_MFA_CODE.test(stateCode1)
    });
  }, [accountId, codeType, stateCode1, updateData]);

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

  const input1Error = useMemo((): string => {
    return getInputError(stateCode1, stateInput1IsError);
  }, [stateCode1, stateInput1IsError]);

  const input2Error = useMemo((): string => {
    return getInputError(stateCode2, stateInput2IsError);
  }, [stateCode2, stateInput2IsError]);

  useEffect(() => {
    updateData({
      primaryButtonDisabled: true
    });
  }, [updateData]);
  
  return <>
    <Form {...{
      items: [{
        label: intl('attr:vmfa_bind_code1'),
        labelWidth: 150,
        labelTextAlign: 'center',
        content: <VmfaInput {...{
          value: stateCode1,
          isError: stateInput1IsError,
          errorMessage: input1Error,
          onChange: handleCode1InputChange,
          innerRight: input1InnerRight
        }} />
      }, {
        label: intl('attr:vmfa_bind_code2'),
        labelWidth: 150,
        labelTextAlign: 'center',
        content: <VmfaInput {...{
          value: stateCode2,
          isError: stateInput2IsError,
          errorMessage: input2Error,
          onChange: handleCode2InputChange,
          innerRight: input2InnerRight
        }} />
      }]
    }} />
  </>;
}