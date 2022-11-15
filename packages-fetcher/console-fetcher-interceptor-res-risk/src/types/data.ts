import {
  ESubMfaDeviceType
} from '../enum';

import {
  ITargetUserPrincipalName
} from './shared';

// 接口 /identity/getMfaInfoToBind 的返回 data
export interface IGetBindMfaInfoResponse extends ITargetUserPrincipalName {
  QRCodeUri: string | null; // 选择的类型是 VMFA 时不为 null
  TargetMfaDeviceSecret: string | null; // 选择的类型是 VMFA 时不为 null
  RpId: string | null; // 选择的类型是 U2F 时不为 null
  PubKeyCreType: string | null; // 用于 WebAuthn，public-key
  PubKeyCreAlg: string | null; // 用于 WebAuthn，-7 表示 SHA-256
  U2FChallenge: string | null; // 选择的类型是 U2F 时不为 null
  UserIdEncrypted: string | null; // 用于 WebAuthn 生成 CredentialId
}

export interface IDataBindVmfaInfo extends ITargetUserPrincipalName {
  DeviceType: ESubMfaDeviceType.VMFA;
  QRCodeUri: string; // 选择的类型是 VMFA 时不为 null
  TargetMfaDeviceSecret: string; // 选择的类型是 VMFA 时不为 null
}

export interface IDataBindU2fInfo extends ITargetUserPrincipalName {
  DeviceType: ESubMfaDeviceType.U2F;
  RpId: string; // 选择的类型是 U2F 时不为 null
  PubKeyCreType: string; // 用于 WebAuthn，public-key
  PubKeyCreAlg: string; // 用于 WebAuthn，-7 表示 SHA-256
  U2FChallenge: string; // 选择的类型是 U2F 时不为 null
  UserIdEncrypted: string; // 用于 WebAuthn 生成 CredentialId
}

export type TDataBindMfaInfo = IDataBindVmfaInfo | IDataBindU2fInfo;

// 接口 /identity/getMfaInfoToAuth 的返回 data
export interface IDataAuthVmfaInfo extends ITargetUserPrincipalName {
  DeviceType: ESubMfaDeviceType.VMFA;
}

export interface IDataAuthU2fV2Info extends ITargetUserPrincipalName {
  DeviceType: ESubMfaDeviceType.U2F; // 需要验证的 MFA 类型（VMFA / U2F）
  U2FVersion: 'U2F_V2'; // U2F_V2 表示使用老的 U2F 接口绑定的密钥
  U2FAppId: string; // U2F 要使用的应用 ID，当设备为 U2F 时必需
  U2FChallenge: string; // U2F 要使用的 challenge 信息，当设备为 U2F 时必需
  U2FKeyHandle: string; // U2F 要使用的密钥，当设备为 U2F 时必需
}

export interface IDataAuthU2fWebAuthInfo extends ITargetUserPrincipalName {
  DeviceType: ESubMfaDeviceType.U2F;
  U2FVersion: 'WebAuthn'; // WebAuthn 表示使用 WebAuthn API 绑定的密钥
  RpId: string;
  U2FChallenge: string;
  CredentialId: string;
}

export type TGetAuthMfaInfoData = IDataAuthVmfaInfo | IDataAuthU2fV2Info | IDataAuthU2fWebAuthInfo;

// 接口 /identity/bindMFA，/identity/verify，/identity/skip 的返回 data
export interface ITokenVerifyData {
  IvToken: string;
}