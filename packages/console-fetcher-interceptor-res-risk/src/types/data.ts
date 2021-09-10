import {
  ESubMFADeviceType
} from '../const';

import {
  IMfaSharedInfo
} from './shared';

// 接口 /identity/getMfaInfoToBind 的返回 data
export interface IGetBindVMfaInfoData extends IMfaSharedInfo {
  QRCodeUri: string;
  TargetMfaDeviceSecret: string;
}

export interface IGetBindU2FInfoData extends IMfaSharedInfo {
  U2FAppId: string;
  U2FVersion: string;
  U2FChallenge: string;
}

export type TGetBindMfaInfoData = IGetBindVMfaInfoData | IGetBindU2FInfoData;

// 接口 /identity/getMfaInfoToAuth 的返回 data
export interface IGetAuthVMfaInfoData extends IMfaSharedInfo {
  DeviceType: ESubMFADeviceType.VMFA;
}

export interface IGetAuthU2FInfoData extends IMfaSharedInfo {
  DeviceType: ESubMFADeviceType.U2F; // 需要验证的 MFA 类型（VMFA / U2F）
  U2FAppId: string; // U2F 要使用的应用 ID，当设备为 U2F 时必需
  U2FVersion: string; // U2F 要使用的版本，当设备为 U2F 时必需
  U2FChallenge: string; // U2F 要使用的 challenge 信息，当设备为 U2F 时必需
  U2FKeyHandle: string; // U2F 要使用的密钥，当设备为 U2F 时必需
}

export type TGetAuthMfaInfoData = IGetAuthVMfaInfoData | IGetAuthU2FInfoData;

// 接口 /identity/bindMfa 以及 /identity/verify  的返回 data
export interface IMfaData {
  ValiateToken: string;
}