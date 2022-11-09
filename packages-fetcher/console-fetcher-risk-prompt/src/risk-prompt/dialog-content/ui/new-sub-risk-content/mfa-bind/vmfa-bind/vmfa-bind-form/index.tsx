import React, {
  useMemo,
  useState,
  useEffect,
  useCallback
} from 'react';

import {
  ESubMfaDeviceType,
  ParamsBindVmfa
} from '@alicloud/console-fetcher-risk-data';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../../../../../types';
import {
  ESubAccountIdentityServiceType
} from '../../../../../../../const';
import {
  useModelProps
} from '../../../../../../../model';
import intl from '../../../../../../../intl';
import Form from '../../../../../../../rc/form';
import XIcon from '../../../../../../../rc/x-icon';
import {
  getInputError
} from '../../../../../../../utils';
import VMfaInput from '../../../_components/vmfa-input';

export default function VmfaBindForm(): JSX.Element {
  const {
    codeType,
    accountId
  } = useModelProps();
  const {
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();

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
    const newBindMfaPayload: ParamsBindVmfa = {
      accountId,
      code1: stateCode1,
      code2: stateCode2,
      deviceType: ESubMfaDeviceType.VMFA,
      ext: JSON.stringify({
        codeType
      })
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
      errorMessage: '',
      primaryButtonDisabled,
      subAccountIdentityServiceParams: {
        paramsType: ESubAccountIdentityServiceType.BIND_MFA,
        params: newBindMfaPayload
      }
    });
  }, [accountId, codeType, stateCode1, stateCode2, stateInput1EverChanged, stateInput2EverChanged, updateData]);
  
  return <>
    <Form {...{
      items: [{
        label: intl('attr:vmfa_bind_code1'),
        labelWidth: 150,
        labelTextAlign: 'center',
        content: <VMfaInput {...{
          value: stateCode1,
          errorMessage: stateInput1Error,
          onChange: handleCode1InputChange,
          innerRight: input1InnerRight
        }} />
      }, {
        label: intl('attr:vmfa_bind_code2'),
        labelWidth: 150,
        labelTextAlign: 'center',
        content: <VMfaInput {...{
          value: stateCode2,
          errorMessage: stateInput2Error,
          onChange: handleCode2InputChange,
          innerRight: input2InnerRight
        }} />
      }]
    }} />
  </>;
}