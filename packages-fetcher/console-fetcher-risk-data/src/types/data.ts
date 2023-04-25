import {
  ESubVerificationDeviceType
} from '../const';

import {
  IResponseTokenVerify,
  IResponseGetU2fInfoToAuth,
  IResponseGetVmfaInfoToAuth,
  IResponseGetU2fWebAuthnInfoToAuth,
  IResponseEmailValidator,
  IResponseSmsValidator
} from './response';
import {
  TUnCapitalizeKeys
} from './util';

interface IDataTargetUserPrincipalName {
  targetUserPrincipalName: string;
}

export interface IDataGetU2fInfoToBind extends IDataTargetUserPrincipalName {
  deviceType: ESubVerificationDeviceType.U2F;
  rpId: string; // 选择的类型是 U2F 时不为 null
  pubKeyCreType: string; // 用于 WebAuthn，public-key
  pubKeyCreAlg: string; // 用于 WebAuthn，-7 表示 SHA-256
  u2FAppId: string | null; // U2FVersion 为 U2F_V2 时才不为 null（Deprecated）
  u2FVersion: string; // WebAuthn / U2F_V2（Deprecated）
  u2FChallenge: string; // 选择的类型是 U2F 时不为 null
  userIdEncrypted: string; // 用于 WebAuthn 生成 CredentialId
}

export interface IDataGetVmfaInfoToBind extends IDataTargetUserPrincipalName {
  deviceType: ESubVerificationDeviceType.VMFA;
  qrCodeUri: string;
  targetMfaDeviceSecret: string;
}

export type TDataGetMfaInfoToBind = IDataGetU2fInfoToBind | IDataGetVmfaInfoToBind;

export type TDataTokenVerify = TUnCapitalizeKeys<IResponseTokenVerify>;

export type TDataGetVmfaInfoToAuth = TUnCapitalizeKeys<IResponseGetVmfaInfoToAuth>;

export type TDataGetU2fInfoToAuth = TUnCapitalizeKeys<IResponseGetU2fInfoToAuth>;

export type TDataGetU2fWebAuthnInfoToAuth = TUnCapitalizeKeys<IResponseGetU2fWebAuthnInfoToAuth>;

export type TDataGetMfaInfoToAuth = TDataGetVmfaInfoToAuth | TDataGetU2fInfoToAuth | TDataGetU2fWebAuthnInfoToAuth;

// /identity/getMfaInfoToAuthV2
export type TDataGetSmsInfoToAuth = TUnCapitalizeKeys<IResponseSmsValidator> & {
  areaCode: string | number;
  deviceType: ESubVerificationDeviceType.SMS;
  targetUserPrincipalName: string;
}
export type TDataGetEmailInfoToAuth = TUnCapitalizeKeys<IResponseEmailValidator> & {
  deviceType: ESubVerificationDeviceType.EMAIL;
  targetUserPrincipalName: string;
}
export type TDataVerificationValidator = TDataGetSmsInfoToAuth | TDataGetEmailInfoToAuth | TDataGetVmfaInfoToAuth | TDataGetU2fInfoToAuth | TDataGetU2fWebAuthnInfoToAuth;

export type TDataGetVerificationInfoToAuth = TDataVerificationValidator[];