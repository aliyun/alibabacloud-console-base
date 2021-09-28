import React, {
  useMemo,
  useState,
  useEffect,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  mixinBgSecondary,
  mixinBorderSecondary
} from '@alicloud/console-base-theme';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IVerifyVMfaPayload,
  INewSubAccountRisk
} from '../../../../types';
import {
  SvgUrls,
  EIconType,
  REG_MFA_CODE,
  EPayloadVerifyType
} from '../../../../const';
import intl from '../../../../intl';
import Form from '../../../../rc/form';
import XIcon from '../../../../rc/x-icon';
import Message from '../../_components/message';
import VmfaInput from '../../_components/vmfa-input';
import getTicketType from '../../../../util/get-ticket-type';
import getInputError from '../../../../util/get-input-error';

const ScFormWrapper = styled.div`
  padding: 16px;
  position: relative;
  overflow: hidden;
  ${mixinBgSecondary}
  ${mixinBorderSecondary}
`;

const ScImg = styled.img`
  position: absolute;
  bottom: -16px;
  right: -16px;
`;

const ticketType = getTicketType();

export default function VMfaAuth(): JSX.Element {
  const {
    data: {
      subRiskInfo: {
        userPrincipalName
      },
      errorMessage
    },
    updateData
  } = useDialog<void, INewSubAccountRisk>();

  const [stateCode, setStateCode] = useState<string>('');
  const [stateInputIsError, setStateInputIsError] = useState<boolean>(false);

  const handleInputChange = useCallback(code => {
    const verifyMfaPayload: IVerifyVMfaPayload = {
      TargetUserPrincipalName: userPrincipalName,
      TicketType: ticketType,
      VerifyType: EPayloadVerifyType.MFA,
      AuthCode: code
    };

    const isInputError = !REG_MFA_CODE.test(code);

    setStateCode(code);
    setStateInputIsError(isInputError);

    updateData({
      verifyMfaPayload,
      primaryButtonDisabled: isInputError,
      errorMessage: ''
    });
  }, [userPrincipalName, updateData]);

  const inputInnerRight = useMemo(() => {
    return <XIcon onClick={() => {
      setStateCode('');
    }} />;
  }, []);

  const inputError = useMemo(() => {
    return getInputError(stateCode, stateInputIsError);
  }, [stateCode, stateInputIsError]);

  useEffect(() => {
    updateData({
      primaryButtonDisabled: true
    });
  }, [updateData]);

  return <>
    {errorMessage ? <Message {...{
      iconType: EIconType.error,
      message: errorMessage
    }} /> : null}
    <ScFormWrapper>
      <Form {...{
        items: [{
          label: intl('attr:vmfa_auth_userName'),
          labelWidth: '100px',
          labelTextAlign: 'center',
          content: <strong>{userPrincipalName}</strong>
        }, {
          label: intl('attr:vmfa_auth_code'),
          labelWidth: '100px',
          labelTextAlign: 'center',
          content: <VmfaInput {...{
            value: stateCode,
            isError: stateInputIsError,
            widthPercent: 70,
            errorMessage: inputError,
            onChange: handleInputChange,
            innerRight: inputInnerRight
          }} />
        }]
      }} />
      <ScImg src={SvgUrls.VMFA_ICON_WHITE} width={100} alt="" />
    </ScFormWrapper>
  </>;
}
