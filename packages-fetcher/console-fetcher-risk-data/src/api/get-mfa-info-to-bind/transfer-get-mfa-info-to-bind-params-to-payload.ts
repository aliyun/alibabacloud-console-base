import {
  TParamsGetMfaInfoToBind,
  TPayloadGetBindMfaInfo
} from '../../types';
import {
  ESubVerificationDeviceType,
  SUB_ACCOUNT_IDENTITY_SERVICE_COMMON_PAYLOAD
} from '../../const';

export default function transferGetMfaInfoToBindParamsToPayload(params: TParamsGetMfaInfoToBind): TPayloadGetBindMfaInfo {
  const commonPayload = {
    ...SUB_ACCOUNT_IDENTITY_SERVICE_COMMON_PAYLOAD,
    AccountId: params.accountId
  };

  if (params.deviceType === ESubVerificationDeviceType.U2F) {
    return {
      ...commonPayload,
      U2FVersion: 'WebAuthn',
      DeviceType: ESubVerificationDeviceType.U2F
    };
  }

  return {
    ...commonPayload,
    DeviceType: ESubVerificationDeviceType.VMFA
  };
}