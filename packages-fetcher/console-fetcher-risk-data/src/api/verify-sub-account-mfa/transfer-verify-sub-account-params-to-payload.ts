import {
  TParamsVerifySubAccountMfa,
  TPayloadVerifySubAccountMfa
} from '../../types';
import {
  SUB_ACCOUNT_IDENTITY_SERVICE_COMMON_PAYLOAD
} from '../../const';

export default function transferVerifyParamsToPayload(params: TParamsVerifySubAccountMfa): TPayloadVerifySubAccountMfa {
  const commonPayload = {
    ...SUB_ACCOUNT_IDENTITY_SERVICE_COMMON_PAYLOAD,
    Ext: params.ext,
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