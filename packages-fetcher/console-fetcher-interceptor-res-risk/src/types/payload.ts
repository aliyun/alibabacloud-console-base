import {
  EAccountType,
  ESubMfaDeviceType
} from '../enum';

interface IMfaSharedPayload {
  TicketType: string; // mini = 虚商 其他 = 公有云
  AccountId: string; // 用户 ID
}

// 风控类型，在绑定 MFA 以及验证 MFA 时需要作为参数使用
interface IExt {
  Ext: string;
}

// 接口 /identity/getMfaInfoToBind 的 payload - VMFA 类型
export interface IPayloadBindVmfaInfo extends IMfaSharedPayload {
  DeviceType: ESubMfaDeviceType.VMFA;
}

export interface IPayloadBindU2fInfo extends IMfaSharedPayload {
  DeviceType: ESubMfaDeviceType.U2F;
  U2FVersion: 'WebAuthn';
}

export type TPayloadBindMfaInfo = IPayloadBindVmfaInfo | IPayloadBindU2fInfo;

// 接口 /identity/bindMFA 的 payload
export interface IPayloadBindVmfa extends IExt, IMfaSharedPayload {
  DeviceType: ESubMfaDeviceType.VMFA;
  Code1: string;
  Code2: string;
}

export interface IPayloadBindU2f extends IExt, IMfaSharedPayload {
  DeviceType: ESubMfaDeviceType.U2F;
  U2FVersion: 'WebAuthn';
  ClientDataJSON: string;
  AttestationObject: string;
}

export type TBindMfaPayload = IPayloadBindVmfa | IPayloadBindU2f;

// 接口 /identity/getMfaInfoToAuth 的 payload
export interface IGetAuthMfaInfoPayload extends IMfaSharedPayload {}

// 接口 /identity/verify 的 payload
export interface IVerifySharedPayload extends IExt, IMfaSharedPayload {
  VerifyType: string;
}

export interface IPayloadVerifyVmfa extends IVerifySharedPayload {
  AuthCode: string; // vmfa 6位数验证码
}

export interface IPayloadVerifyU2f extends IVerifySharedPayload {
  CredentialId: string;
  AuthenticatorData: string;
  ClientDataJSON: string;
  Signature: string;
}

export type TPayloadVerifyMfa = IPayloadVerifyVmfa | IPayloadVerifyU2f;

export interface IPayloadVerifyMpk extends IVerifySharedPayload {
  AuthCode: string; // 6位数字验证码
  IdType: EAccountType;
  RiskRequestId: string;
}

// 接口 /identity/skip 的 payload
export interface IPayloadSkipBindMfa extends IMfaSharedPayload, IExt {}