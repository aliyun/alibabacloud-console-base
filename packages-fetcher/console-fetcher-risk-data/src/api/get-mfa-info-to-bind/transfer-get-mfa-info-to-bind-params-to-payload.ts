import {
  TParamsGetMfaInfoToBind,
  TPayloadGetBindMfaInfo
} from '../../types';
import {
  TICKET_TYPE,
  ESubMfaDeviceType
} from '../../const';

export default function transferGetMfaInfoToBindParamsToPayload(params: TParamsGetMfaInfoToBind): TPayloadGetBindMfaInfo {
  const commonPayload = {
    TicketType: TICKET_TYPE,
    AccountId: params.accountId
  };

  if (params.deviceType === ESubMfaDeviceType.U2F) {
    return {
      ...commonPayload,
      U2FVersion: 'WebAuthn',
      DeviceType: ESubMfaDeviceType.U2F
    };
  }

  return {
    ...commonPayload,
    DeviceType: ESubMfaDeviceType.VMFA
  };
}