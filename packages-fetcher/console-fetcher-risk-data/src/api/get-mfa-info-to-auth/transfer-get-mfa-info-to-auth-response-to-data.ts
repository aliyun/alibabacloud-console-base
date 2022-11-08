import {
  TUnCapitalizeKeys,
  TResponseGetMfaInfoToAuth,
  TDataGetMfaInfoToAuth
} from '../../types';
import {
  ESubMfaDeviceType
} from '../../const/enum';

export default function transferGetMfaInfoToAuthResponseToData(response: TResponseGetMfaInfoToAuth): TUnCapitalizeKeys<TDataGetMfaInfoToAuth> {
  if (response.DeviceType === ESubMfaDeviceType.U2F) {
    if (response.U2FVersion === 'WebAuthn') {
      return {
        deviceType: ESubMfaDeviceType.U2F,
        rpId: response.RpId,
        u2FVersion: response.U2FVersion,
        u2FChallenge: response.U2FChallenge,
        credentialId: response.CredentialId,
        targetUserPrincipalName: response.TargetUserPrincipalName
      };
    }

    return {
      deviceType: ESubMfaDeviceType.U2F,
      u2FAppId: response.U2FAppId,
      u2FVersion: response.U2FVersion,
      u2FChallenge: response.U2FChallenge,
      u2FKeyHandle: response.U2FKeyHandle,
      targetUserPrincipalName: response.TargetUserPrincipalName
    };
  }

  return {
    deviceType: ESubMfaDeviceType.VMFA,
    targetUserPrincipalName: response.TargetUserPrincipalName
  };
}