import {
  ESubMFADeviceType
} from '../const';

import {
  ITargetUserPrincipalName
} from './shared';

// 接口 /identity/getMfaInfoToBind 的返回 data
export interface IGetBindVMfaInfoData extends ITargetUserPrincipalName {
  QRCodeUri: string | null; // 选择的类型是 VMFA 时不为 null
  TargetMfaDeviceSecret: string | null; // 选择的类型是 VMFA 时不为 null
}

export interface IGetBindU2FInfoData extends ITargetUserPrincipalName {
  U2FAppId: string | null; // 选择的类型是 U2F 时不为 null
  U2FVersion: string | null; // 选择的类型是 U2F 时不为 null
  U2FChallenge: string | null; // 选择的类型是 U2F 时不为 null
}

export type TGetBindMfaInfoData = IGetBindVMfaInfoData & IGetBindU2FInfoData;

// 接口 /identity/getMfaInfoToAuth 的返回 data
export interface IGetAuthVMfaInfoData extends ITargetUserPrincipalName {
  DeviceType: ESubMFADeviceType.VMFA;
}

export interface IGetAuthU2FInfoData extends ITargetUserPrincipalName {
  DeviceType: ESubMFADeviceType.U2F; // 需要验证的 MFA 类型（VMFA / U2F）
  U2FAppId: string; // U2F 要使用的应用 ID，当设备为 U2F 时必需
  U2FVersion: string; // U2F 要使用的版本，当设备为 U2F 时必需
  U2FChallenge: string; // U2F 要使用的 challenge 信息，当设备为 U2F 时必需
  U2FKeyHandle: string; // U2F 要使用的密钥，当设备为 U2F 时必需
}

export type TGetAuthMfaInfoData = IGetAuthVMfaInfoData | IGetAuthU2FInfoData;

// 接口 /identity/bindMFA，/identity/verify，/identity/skip 的返回 data
export interface IMfaData {
  IvToken: string;
}