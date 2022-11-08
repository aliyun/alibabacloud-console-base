import {
  EAccountType,
  ESubMfaDeviceType
} from '../const/enum';

export interface IMfaTicketTypeAndAccountId {
  AccountId: string; // 用户 ID
  TicketType: string; // mini = 虚商 其他 = 公有云
}

// 风控类型，在绑定 MFA 以及验证 MFA 时需要作为参数使用
export interface IExt {
  Ext: string;
}

// 接口 /identity/getMfaInfoToBind 的 payload - VMFA 类型
export interface IPayloadGetVmfaInfoToBind extends IMfaTicketTypeAndAccountId {
  DeviceType: ESubMfaDeviceType.VMFA;
}

// 接口 /identity/getMfaInfoToBind 的 payload - U2F 类型
export interface IPayloadGetU2fInfoToBind extends IMfaTicketTypeAndAccountId {
  DeviceType: ESubMfaDeviceType.U2F;
  U2FVersion: 'WebAuthn';
}

// 接口 /identity/getMfaInfoToBind 的 payload
export type TPayloadGetBindMfaInfo = IPayloadGetVmfaInfoToBind | IPayloadGetU2fInfoToBind;

// 接口 /identity/bindMFA 的 payload - VMFA 类型
export interface IPayloadBindVmfa extends IExt, IMfaTicketTypeAndAccountId {
  DeviceType: ESubMfaDeviceType.VMFA;
  Code1: string;
  Code2: string;
}

// 接口 /identity/bindMFA 的 payload - U2F 类型
export interface IPayloadBindU2F extends IExt, IMfaTicketTypeAndAccountId {
  DeviceType: ESubMfaDeviceType.U2F;
  U2FVersion: 'WebAuthn';
  ClientDataJSON: string;
  AttestationObject: string;
}

// 接口 /identity/bindMFA 的 payload
export type TPayloadBindMfa = IPayloadBindVmfa | IPayloadBindU2F;

// 接口 /identity/getMfaInfoToAuth 的 payload
export interface IPayloadGetMfaInfoToAuth extends IMfaTicketTypeAndAccountId {}

export interface IPayloadVerifyShared extends IExt, IMfaTicketTypeAndAccountId {
  VerifyType: string;
}

// 接口 /identity/verify 的 payload - VMFA 类型
export interface IPayloadVerifySubAccountVmfa extends IPayloadVerifyShared {
  AuthCode: string; // vmfa 6位数验证码
}

// 接口 /identity/verify 的 payload - U2F 类型
export interface IPayloadVerifySubAccountU2F extends IPayloadVerifyShared {
  Signature: string;
  CredentialId: string;
  ClientDataJSON: string;
  AuthenticatorData: string;
}

// 接口 /identity/verify 的 payload
export type TPayloadVerifySubAccountMfa = IPayloadVerifySubAccountVmfa | IPayloadVerifySubAccountU2F;

// 接口 /identity/skip 的 payload
export interface IPayloadSkipBindMfa extends IMfaTicketTypeAndAccountId, IExt {}

// 接口 /identity/send 的 payload - 用于发送验证码
export interface IPayloadSendCode extends IExt {
  AccountId: string;
  VerifyType: string;
  AccountType: EAccountType;
}

// 接口 /identity/verify 的 payload - 用于虚商
export interface IPayloadVerifyMpk extends IPayloadVerifyShared {
  AuthCode: string; // 6位数字验证码
  IdType: EAccountType;
  RiskRequestId: string;
}