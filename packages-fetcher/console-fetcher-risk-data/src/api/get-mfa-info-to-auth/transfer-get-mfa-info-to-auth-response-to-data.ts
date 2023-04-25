import {
  TUnCapitalizeKeys,
  TResponseGetMfaInfoToAuth,
  TDataGetMfaInfoToAuth
} from '../../types';
import {
  ESubVerificationDeviceType
} from '../../const/enum';

export default function transferGetMfaInfoToAuthResponseToData(response: TResponseGetMfaInfoToAuth): TUnCapitalizeKeys<TDataGetMfaInfoToAuth> {
  if (response.DeviceType === ESubVerificationDeviceType.U2F) {
    if (response.U2FVersion === 'WebAuthn') {
      return {
        deviceType: ESubVerificationDeviceType.U2F,
        rpId: response.RpId,
        u2FVersion: response.U2FVersion,
        u2FChallenge: response.U2FChallenge,
        credentialId: response.CredentialId,
        targetUserPrincipalName: response.TargetUserPrincipalName
      };
    }

    return {
      deviceType: ESubVerificationDeviceType.U2F,
      u2FAppId: response.U2FAppId,
      u2FVersion: response.U2FVersion,
      u2FChallenge: response.U2FChallenge,
      u2FKeyHandle: response.U2FKeyHandle,
      targetUserPrincipalName: response.TargetUserPrincipalName
    };
  }

  return {
    deviceType: ESubVerificationDeviceType.VMFA,
    targetUserPrincipalName: response.TargetUserPrincipalName
  };
}