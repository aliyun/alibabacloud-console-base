import {
  TParamsVerifySubAccountMfa,
  TPayloadVerifySubAccountMfa
} from '../../types';
import {
  TICKET_TYPE
} from '../../const';

export default function transferVerifyParamsToPayload(params: TParamsVerifySubAccountMfa): TPayloadVerifySubAccountMfa {
  const commonPayload = {
    Ext: params.ext,
    TicketType: TICKET_TYPE,
    AccountId: params.accountId,
    VerifyType: params.verifyType
  };

  if ('authCode' in params) {
    return {
      ...commonPayload,
      AuthCode: params.authCode
    };
  }

  return {
    ...commonPayload,
    Signature: params.signature,
    CredentialId: params.credentialId,
    ClientDataJSON: params.clientDataJSON,
    AuthenticatorData: params.authenticatorData
  };
}