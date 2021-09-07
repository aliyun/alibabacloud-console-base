import React, {
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
  IVerifyVMfaPayload,
  ISubRiskVerifyDialogData
} from '../../../../types';
import {
  EPayloadVerifyType
} from '../../../../const';
import intl from '../../../../intl';
import Form from '../../../../rc/form';
import getTicketType from '../../../../util/common-utils/get-ticket-type';

const ScInfo = styled.strong`
  margin-right: 12px;
  font-family: Arial, sans-serif;
`;

const ScInput = styled(Input)`
  margin-right: 12px;
  width: 90%;
`;

const ScError = styled.div`
  margin-top: 8px;
  ${mixinTextError};
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
  } = useDialog<void, ISubRiskVerifyDialogData>();

  const handleInputChange = useCallback(value => {
    const verifyMfaPayload: IVerifyVMfaPayload = {
      TicketType: ticketType,
      VerifyType: EPayloadVerifyType.MFA,
      AuthCode: value
    };

    updateData({
      verifyMfaPayload
    });
  }, [updateData]);

  return <Form {...{
    items: [{
      label: intl('attr:vmfa_auth_userName'),
      labelWidth: '100px',
      labelTextAlign: 'center',
      content: <ScInfo>{userPrincipalName}</ScInfo>
    }, {
      label: intl('attr:vmfa_auth_code'),
      labelWidth: '100px',
      labelTextAlign: 'center',
      content: <div>
        <ScInput {...{
          onChange: handleInputChange
        }} />
        <ScError>{errorMessage}</ScError>
      </div>
    }]
  }} />;
}
