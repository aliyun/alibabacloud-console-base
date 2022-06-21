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
  IPayloadVerifyVmfa,
  IDialogDataNewSubAccountRisk
} from '../../../../types';
import {
  EIconType,
  EPayloadVerifyType
} from '../../../../enum';
import {
  SvgUrls,
  REG_MFA_CODE
} from '../../../../const';
import intl from '../../../../intl';
import Form from '../../../../rc/form';
import XIcon from '../../../../rc/x-icon';
import Message from '../../_components/message';
import VmfaInput from '../../_components/vmfa-input';
import getTicketType from '../../../../util/get-ticket-type';
import getInputError from '../../../../util/get-input-error';

const ScFormWrapper = styled.div`
  position: relative;
  padding: 12px 0;
  overflow: hidden;
  ${mixinBgSecondary}
  ${mixinBorderSecondary}
`;

const ScImg = styled.img`
  position: absolute;
  right: -16px;
  bottom: -16px;
`;

const ticketType = getTicketType();

export default function VMfaAuth(): JSX.Element {
  const {
    data: {
      subRiskInfo: {
        accountId,
        codeType
      },
      getAuthMfaInfoData,
      errorMessage
    },
    updateData
  } = useDialog<void, IDialogDataNewSubAccountRisk>();

  const userPrincipalName = getAuthMfaInfoData?.TargetUserPrincipalName || '';

  const [stateCode, setStateCode] = useState<string>('');
  const [stateInputIsError, setStateInputIsError] = useState<boolean>(false);

  const handleInputChange = useCallback(code => {
    const verifyMfaPayload: IPayloadVerifyVmfa = {
      AccountId: accountId,
      TicketType: ticketType,
      VerifyType: EPayloadVerifyType.MFA,
      Ext: JSON.stringify({
        codeType
      }),
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
  }, [accountId, codeType, updateData]);

  const inputInnerRight = useMemo(() => {
    return <XIcon onClick={() => {
      setStateCode('');
      updateData({
        errorMessage: ''
      });
    }} />;
  }, [updateData]);

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
      iconType: EIconType.ERROR,
      message: errorMessage
    }} /> : null}
    <ScFormWrapper>
      <Form {...{
        items: [{
          label: intl('attr:vmfa_auth_userName'),
          labelWidth: 100,
          labelTextAlign: 'center',
          content: <strong>{userPrincipalName}</strong>
        }, {
          label: intl('attr:vmfa_auth_code'),
          labelWidth: 100,
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
      <ScImg {...{
        src: SvgUrls.VMFA_ICON_WHITE,
        width: 100,
        alt: ''
      }} />
    </ScFormWrapper>
  </>;
}
