import {
  EPayloadVerifyType,
  ESubMFADeviceType
} from '../const';

export interface IMfaSharedPayload {
  TicketType: string; // mini = 虚商 其他 = 公有云
  AccountId: string; // 用户 ID
}

// 风控类型，在绑定 MFA 以及验证 MFA 时需要作为参数使用
export interface IExt {
  Ext: string;
}

// 接口 /identity/getMfaInfoToBind 的 payload
export interface IGetBindMfaInfoPayload extends IMfaSharedPayload {
  DeviceType: ESubMFADeviceType;
}

// 接口 /identity/bindMFA 的 payload
export interface IBindVMfaPayload extends IExt, IMfaSharedPayload {
  DeviceType: ESubMFADeviceType.VMFA;
  Code1: string;
  Code2: string;
}

export interface IBindU2FPayload extends IExt, IMfaSharedPayload {
  DeviceType: ESubMFADeviceType.U2F;
  U2FAppId: string;
  U2FVersion: string;
  U2FRegistrationData: string;
  U2FClientData: string;
}

export type TBindMfaPayload = IBindVMfaPayload | IBindU2FPayload;

// 接口 /identity/getMfaInfoToAuth 的 payload
export interface IGetAuthMfaInfoPayload extends IMfaSharedPayload {}

// 接口 /identity/verify 的 payload
export interface IVerifyMfaSharedPayload extends IExt, IMfaSharedPayload {
  VerifyType: EPayloadVerifyType;
}

export interface IVerifyVMfaPayload extends IVerifyMfaSharedPayload {
  AuthCode: string; // vmfa 6位数验证码
}

export interface IVerifyU2FPayload extends IVerifyMfaSharedPayload {
  U2fSignatureData: string; // u2f 签名数据
  U2fKeyHandle: string; // u2f Handle
  U2fClientData: string; // u2f 客户端数据
}

export type TVerifyMfaPayload = IVerifyVMfaPayload | IVerifyU2FPayload;

// 接口 /identity/skip 的 payload
export interface ISkipBindMfaPayload extends IMfaSharedPayload, IExt {}