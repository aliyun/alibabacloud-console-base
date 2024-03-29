import {
  ESubVerificationDeviceType
} from '../const/enum';

export interface IResponseTargetUserPrincipalName {
  TargetUserPrincipalName: string; // 用户名
}

// 接口 /identity/getMfaInfoToAuth 的响应 - 虚拟 MFA
export interface IResponseGetVmfaInfoToAuth extends IResponseTargetUserPrincipalName {
  DeviceType: ESubVerificationDeviceType.VMFA;
}

// 接口 /identity/getMfaInfoToAuth 的响应 - U2F 设备（老版本）
export interface IResponseGetU2fInfoToAuth extends IResponseTargetUserPrincipalName {
  DeviceType: ESubVerificationDeviceType.U2F; // 需要验证的 MFA 类型（VMFA / U2F）
  U2FVersion: 'U2F_V2'; // U2F_V2 表示使用老的 U2F 接口绑定的密钥
  U2FAppId: string; // U2F 要使用的应用 ID，当设备为 U2F 时必需
  U2FChallenge: string; // U2F 要使用的 challenge 信息，当设备为 U2F 时必需
  U2FKeyHandle: string; // U2F 要使用的密钥，当设备为 U2F 时必需
}

// 接口 /identity/getMfaInfoToAuth 的响应 - U2F 设备 (WebAuthentication)
export interface IResponseGetU2fWebAuthnInfoToAuth extends IResponseTargetUserPrincipalName {
  DeviceType: ESubVerificationDeviceType.U2F;
  U2FVersion: 'WebAuthn'; // WebAuthn 表示使用 WebAuthn API 绑定的密钥
  RpId: string;
  U2FChallenge: string;
  CredentialId: string;
}

export type TResponseGetMfaInfoToAuth = IResponseGetVmfaInfoToAuth | IResponseGetU2fInfoToAuth | IResponseGetU2fWebAuthnInfoToAuth;

// 接口 /identity/bindMFA，/identity/verify，/identity/skip 的返回 data
export interface IResponseTokenVerify {
  IvToken: string;
}

// 接口 /identity/send 返回的 data 的首字母是小写
export interface IResponseSendCode {
  requestId: string;
}

// 接口 /identity/getMfaInfoToAuthV2
export interface IGetVerificationInfoToAuthValidators {
  U2F?: string;
  VMFA?: string;
  SMS?: string;
  EMAIL?: string;
}

export interface IResponseSmsValidator {
  PhoneNumber: string;
}

export interface IResponseEmailValidator {
  EmailAddress: string;
}

export interface IResponseU2fValidator {
  RpId: string;
  CredentialId: string;
  U2FAppId: string;
  U2FChallenge: string;
  U2FKeyHandle: string;
  U2FVersion: 'WebAuthn' | 'U2F_V2';
}

export type TResponseVmfaValidator = Record<string, never>;

export interface IResponseGetVerificationInfoToAuth {
  DeviceType: ESubVerificationDeviceType; // 首选的安全验证验证方式
  TargetUserPrincipalName: string;
  Validators: IGetVerificationInfoToAuthValidators | null;
}