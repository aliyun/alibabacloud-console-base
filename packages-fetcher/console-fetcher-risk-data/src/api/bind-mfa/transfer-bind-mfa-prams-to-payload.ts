import {
  TParamsBindMfa,
  TPayloadBindMfa
} from '../../types';
import {
  ESubVerificationDeviceType,
  SUB_ACCOUNT_IDENTITY_SERVICE_COMMON_PAYLOAD
} from '../../const';

export default function transferBindMfaParamsToPayload(params: TParamsBindMfa): TPayloadBindMfa {
  const commonPayload = {
    ...SUB_ACCOUNT_IDENTITY_SERVICE_COMMON_PAYLOAD,
    Ext: params.ext,
    AccountId: params.accountId
  };

  if (params.deviceType === ESubVerificationDeviceType.U2F) {
    return {
      ...commonPayload,
      DeviceType: ESubVerificationDeviceType.U2F,
      U2FVersion: params.u2FVersion,
      ClientDataJSON: params.clientDataJSON,
      AttestationObject: params.attestationObject
    };
  }

  return {
    ...commonPayload,
    DeviceType: ESubVerificationDeviceType.VMFA,
    Code1: params.code1,
    Code2: params.code2
  };
}