import {
  TDataGetMfaInfoToBind,
  IResponseGetMfaInfoToBind
} from '../../types';
import {
  ESubVerificationDeviceType
} from '../../const';

export default function transferGetMfaInfoToBindResponseToData(response: IResponseGetMfaInfoToBind): TDataGetMfaInfoToBind {
  if (response.DeviceType === ESubVerificationDeviceType.U2F || response.U2FChallenge) {
    return {
      deviceType: ESubVerificationDeviceType.U2F,
      rpId: response.RpId || '',
      pubKeyCreAlg: response.PubKeyCreAlg || '-7', // -7 表示 SHA-256
      pubKeyCreType: response.PubKeyCreType || 'public-key',
      u2FAppId: response.U2FAppId || '',
      u2FVersion: response.U2FVersion || '',
      u2FChallenge: response.U2FChallenge || 'WebAuthn',
      userIdEncrypted: response.UserIdEncrypted || '',
      targetUserPrincipalName: response.TargetUserPrincipalName
    };
  }

  return {
    deviceType: ESubVerificationDeviceType.VMFA,
    qrCodeUri: response.QRCodeUri || '',
    targetMfaDeviceSecret: response.TargetMfaDeviceSecret || '',
    targetUserPrincipalName: response.TargetUserPrincipalName
  };
}