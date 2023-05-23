import {
  EAccountType,
  ESubVerificationDeviceType
} from '../const/enum';

interface IIdentityServiceCommonPayload {
  Origin: 'console'; // 控制台操作风控场景为 console
  AccountId: string; // 用户 ID
  AccountType: EAccountType; // 用户类型
  TicketType: string; // mini = 虚商 其他 = 公有云
}

// 风控类型，在绑定 MFA 以及验证 MFA 时需要作为参数使用
export interface IExt {
  Ext: string;
}

// 接口 /identity/getMfaInfoToBind 的 payload - VMFA 类型
export interface IPayloadGetVmfaInfoToBind extends IIdentityServiceCommonPayload {
  DeviceType: ESubVerificationDeviceType.VMFA;
}

// 接口 /identity/getMfaInfoToBind 的 payload - U2F 类型
export interface IPayloadGetU2fInfoToBind extends IIdentityServiceCommonPayload {
  DeviceType: ESubVerificationDeviceType.U2F;
  U2FVersion: 'WebAuthn';
}

// 接口 /identity/getMfaInfoToBind 的 payload
export type TPayloadGetBindMfaInfo = IPayloadGetVmfaInfoToBind | IPayloadGetU2fInfoToBind;

// 接口 /identity/bindMFA 的 payload - VMFA 类型
export interface IPayloadBindVmfa extends IExt, IIdentityServiceCommonPayload {
  DeviceType: ESubVerificationDeviceType.VMFA;
  Code1: string;
  Code2: string;
}

// 接口 /identity/bindMFA 的 payload - U2F 类型
export interface IPayloadBindU2F extends IExt, IIdentityServiceCommonPayload {
  DeviceType: ESubVerificationDeviceType.U2F;
  U2FVersion: 'WebAuthn';
  ClientDataJSON: string;
  AttestationObject: string;
}

// 接口 /identity/bindMFA 的 payload
export type TPayloadBindMfa = IPayloadBindVmfa | IPayloadBindU2F;

// 接口 /identity/getMfaInfoToAuth 的 payload
export interface IPayloadGetMfaInfoToAuth extends IIdentityServiceCommonPayload {}

export interface IPayloadVerifyShared extends IExt, IIdentityServiceCommonPayload {}

// 接口 /identity/verify 的 payload - VMFA 类型
export interface IPayloadVerifySubAccountVmfa extends IPayloadVerifyShared {
  AuthCode: string; // vmfa 6位数验证码
  VerifyType: ESubVerificationDeviceType.VMFA;
}
// 接口 /identity/verify 的 payload - U2F 类型
export interface IPayloadVerifySubAccountU2F extends IPayloadVerifyShared {
  Signature: string;
  CredentialId: string;
  ClientDataJSON: string;
  AuthenticatorData: string;
  VerifyType: ESubVerificationDeviceType.U2F;
}
export interface IPayloadVerifySubAccountSmsOrEmail extends IPayloadVerifyShared {
  AuthCode: string;
  VerifyUniqId: string;
  VerifyType: ESubVerificationDeviceType.SMS | ESubVerificationDeviceType.EMAIL;
}
// 接口 /identity/verify 的 payload
export type TPayloadVerifySubAccount = IPayloadVerifySubAccountVmfa | IPayloadVerifySubAccountU2F | IPayloadVerifySubAccountSmsOrEmail;

// 接口 /identity/skip 的 payload
export interface IPayloadSkipBindMfa extends IIdentityServiceCommonPayload, IExt {}

// 接口 /identity/send 的 payload - 用于发送验证码
export interface IPayloadSendCode extends IIdentityServiceCommonPayload, IExt {
  AccountId: string;
  VerifyType: ESubVerificationDeviceType;
  VerifyDetail?: string; // 虚商主账号类型发送手机或邮箱验证码不需要传递 VerifyDetail，子账号发送手机或邮箱验证码需要传递 VerifyDetail，其值是手机号码或邮箱地址
}

// 接口 /identity/verify 的 payload - 用于虚商
export interface IPayloadVerifyMpk extends IPayloadVerifyShared {
  AuthCode: string; // 6位数字验证码
  VerifyType: string;
  VerifyUniqId: string; // identity/send 接口返回的 requestId
}

// 接口 /identity/getMfaInfoToAuthV2 的 payload
export interface IPayloadGetVerificationInfoToAuth extends IIdentityServiceCommonPayload {}