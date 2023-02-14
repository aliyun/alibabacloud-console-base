import {
  TParamsVerifySubAccount,
  TPayloadVerifySubAccount
} from '../../types';
import {
  ESubVerificationDeviceType,
  SUB_ACCOUNT_IDENTITY_SERVICE_COMMON_PAYLOAD
} from '../../const';

export default function transferVerifyParamsToPayload(params: TParamsVerifySubAccount): TPayloadVerifySubAccount {
  const commonPayload = {
    ...SUB_ACCOUNT_IDENTITY_SERVICE_COMMON_PAYLOAD,
    Ext: params.ext,
    AccountId: params.accountId
  };

  if (params.verifyType === ESubVerificationDeviceType.VMFA) {
    return {
      ...commonPayload,
      AuthCode: params.authCode,
      VerifyType: ESubVerificationDeviceType.VMFA
    };
  }

  if (params.verifyType === ESubVerificationDeviceType.U2F) {
    return {
      ...commonPayload,
      Signature: params.signature,
      CredentialId: params.credentialId,
      ClientDataJSON: params.clientDataJSON,
      AuthenticatorData: params.authenticatorData,
      VerifyType: ESubVerificationDeviceType.U2F
    };
  }

  return {
    ...commonPayload,
    AuthCode: params.authCode,
    VerifyType: params.verifyType,
    VerifyUniqId: params.verifyUniqId
  };
}
