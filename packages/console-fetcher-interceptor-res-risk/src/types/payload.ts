import {
  EAccountType,
  ESubMfaDeviceType
} from '../enum';

export interface IMfaSharedPayload {
  TicketType: string; // mini = 虚商 其他 = 公有云
  AccountId: string; // 用户 ID
}

// 风控类型，在绑定 MFA 以及验证 MFA 时需要作为参数使用
export interface IExt {
  Ext: string;
}

// 接口 /identity/getMfaInfoToBind 的 payload - VMFA 类型
export interface IGetBindVMfaInfoPayload extends IMfaSharedPayload {
  DeviceType: ESubMfaDeviceType.VMFA;
}

export interface IGetBindU2FInfoPayload extends IMfaSharedPayload {
  DeviceType: ESubMfaDeviceType.U2F;
  U2FVersion: 'WebAuthn';
}

export type TGetBindMfaInfoPayload = IGetBindVMfaInfoPayload | IGetBindU2FInfoPayload;

// 接口 /identity/bindMFA 的 payload
export interface IBindVMfaPayload extends IExt, IMfaSharedPayload {
  DeviceType: ESubMfaDeviceType.VMFA;
  Code1: string;
  Code2: string;
}

export interface IBindU2FPayload extends IExt, IMfaSharedPayload {
  DeviceType: ESubMfaDeviceType.U2F;
  U2FVersion: 'WebAuthn';
  ClientDataJSON: string;
  AttestationObject: string;
}

export type TBindMfaPayload = IBindVMfaPayload | IBindU2FPayload;

// 接口 /identity/getMfaInfoToAuth 的 payload
export interface IGetAuthMfaInfoPayload extends IMfaSharedPayload {}

// 接口 /identity/verify 的 payload
export interface IVerifySharedPayload extends IExt, IMfaSharedPayload {
  VerifyType: string;
}

export interface IVerifyVMfaPayload extends IVerifySharedPayload {
  AuthCode: string; // vmfa 6位数验证码
}

export interface IVerifyU2FPayload extends IVerifySharedPayload {
  CredentialId: string;
  AuthenticatorData: string;
  ClientDataJSON: string;
  Signature: string;
}

export type TVerifyMfaPayload = IVerifyVMfaPayload | IVerifyU2FPayload;

export interface IVerifyMpkPayload extends IVerifySharedPayload {
  AuthCode: string; // 6位数字验证码
  IdType: EAccountType;
  RiskRequestId: string;
}

// 接口 /identity/skip 的 payload
export interface ISkipBindMfaPayload extends IMfaSharedPayload, IExt {}