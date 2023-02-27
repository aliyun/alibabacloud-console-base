import React, {
  useState,
  useEffect,
  useCallback
} from 'react';

import {
  ESubVerificationDeviceType,
  ParamsBindVmfa
} from '@alicloud/console-fetcher-risk-data';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../../../types';
import {
  useModelProps
} from '../../../../../model';
import intl from '../../../../../intl';
import VerifyCodeInput, {
  type IHandleInputChangeProps
} from '../../../../../rc/verify-code-input';
import Form from '../../../../../rc/form';

interface IBindVmfaCode {
  code1: string;
  code2: string;
}

export default function VmfaBindForm(): JSX.Element {
  const {
    codeType,
    accountId
  } = useModelProps();
  const {
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const [stateBindVmfaCode, setStateBindVmfaCode] = useState<IBindVmfaCode>({
    code1: '',
    code2: ''
  });

  const handleCode1InputChange = useCallback((payload: IHandleInputChangeProps) => {
    const {
      verifyCode
    } = payload;

    setStateBindVmfaCode(prev => ({
      code1: verifyCode,
      code2: prev.code2
    }));
  }, []);

  const handleCode2InputChange = useCallback((payload: IHandleInputChangeProps) => {
    const {
      verifyCode
    } = payload;

    setStateBindVmfaCode(prev => ({
      code1: prev.code1,
      code2: verifyCode
    }));
  }, []);

  useEffect(() => {
    const newBindMfaPayload: ParamsBindVmfa = {
      accountId,
      code1: stateBindVmfaCode.code1,
      code2: stateBindVmfaCode.code2,
      deviceType: ESubVerificationDeviceType.VMFA,
      ext: JSON.stringify({
        codeType
      })
    };

    updateData({
      subBindMfaParams: newBindMfaPayload
    });
  }, [accountId, codeType, stateBindVmfaCode, updateData]);
  
  return <>
    <Form {...{
      items: [{
        label: intl('attr:vmfa_bind_code1'),
        labelTextAlign: 'center',
        content: <VerifyCodeInput {...{
          type: 'vmfa_bind',
          inputWidth: '90%',
          handleInputChange: handleCode1InputChange
        }} />
        
      }, {
        label: intl('attr:vmfa_bind_code2'),
        labelTextAlign: 'center',
        content: <VerifyCodeInput {...{
          type: 'vmfa_bind',
          inputWidth: '90%',
          handleInputChange: handleCode2InputChange
        }} />
      }]
    }} />
  </>;
}