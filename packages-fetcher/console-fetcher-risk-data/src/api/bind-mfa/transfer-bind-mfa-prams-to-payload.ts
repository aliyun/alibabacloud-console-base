import {
  TParamsBindMfa,
  TPayloadBindMfa
} from '../../types';
import {
  ESubMfaDeviceType,
  SUB_ACCOUNT_IDENTITY_SERVICE_COMMON_PAYLOAD
} from '../../const';

export default function transferBindMfaParamsToPayload(params: TParamsBindMfa): TPayloadBindMfa {
  const commonPayload = {
    ...SUB_ACCOUNT_IDENTITY_SERVICE_COMMON_PAYLOAD,
    Ext: params.ext,
    AccountId: params.accountId
  };

  if (params.deviceType === ESubMfaDeviceType.U2F) {
    return {
      ...commonPayload,
      DeviceType: ESubMfaDeviceType.U2F,
      U2FVersion: params.u2FVersion,
      ClientDataJSON: params.clientDataJSON,
      AttestationObject: params.attestationObject
    };
  }

  return {
    ...commonPayload,
    DeviceType: ESubMfaDeviceType.VMFA,
    Code1: params.code1,
    Code2: params.code2
  };
}