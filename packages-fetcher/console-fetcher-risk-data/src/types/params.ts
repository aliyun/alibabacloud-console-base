import {
  TUnCapitalizeKeys,
  TOmitConstantPayload
} from './util';
import {
  IPayloadBindU2F,
  IPayloadBindVmfa,
  IPayloadGetU2fInfoToBind,
  IPayloadGetVmfaInfoToBind,
  IPayloadGetMfaInfoToAuth,
  IPayloadVerifySubAccountU2F,
  IPayloadVerifySubAccountVmfa,
  IPayloadSkipBindMfa,
  IPayloadSendCode,
  IPayloadVerifyMpk,
  IPayloadVerifySubAccountSmsOrEmail,
  IPayloadGetVerificationInfoToAuth
} from './payload';

// 对外提供的绑定 MFA 设备的 API dataBindMfa 的请求参数
export type TParamsBindVmfa = TUnCapitalizeKeys<TOmitConstantPayload<IPayloadBindVmfa>>;
export type TParamsBindU2F = TUnCapitalizeKeys<TOmitConstantPayload<IPayloadBindU2F>>;
export type TParamsBindMfa = TParamsBindVmfa | TParamsBindU2F;

// 对外提供的获取绑定 MFA 设备所需数据的 API dataGetMfaInfoToBind 的请求参数
export type TParamsGetVmfaInfoToBind = TUnCapitalizeKeys<TOmitConstantPayload<IPayloadGetVmfaInfoToBind>>;
export type TParamsGetU2fInfoToBind = TUnCapitalizeKeys<TOmitConstantPayload<IPayloadGetU2fInfoToBind>>;
export type TParamsGetMfaInfoToBind = TParamsGetVmfaInfoToBind | TParamsGetU2fInfoToBind;

// 对外提供的获取验证 MFA 设备所需数据的 API dataGetMfaInfoToAuth 的请求参数
export type TParamsGetMfaInfoToAuth = TUnCapitalizeKeys<TOmitConstantPayload<IPayloadGetMfaInfoToAuth>>;

export type TParamsGetVerificationInfoToAuth = TUnCapitalizeKeys<TOmitConstantPayload<IPayloadGetVerificationInfoToAuth>>;

// 对外提供的验证子用户风控结果的 API dataVerifySubAccount 的请求参数
export type TParamsVerifySubAccountVmfa = TUnCapitalizeKeys<TOmitConstantPayload<IPayloadVerifySubAccountVmfa>>;
export type TParamsVerifySubAccountU2F = TUnCapitalizeKeys<TOmitConstantPayload<IPayloadVerifySubAccountU2F>>;
export type TParamsVerifySubAccountSmsOrEmail = TUnCapitalizeKeys<TOmitConstantPayload<IPayloadVerifySubAccountSmsOrEmail>>;
export type TParamsVerifySubAccount = TParamsVerifySubAccountVmfa | TParamsVerifySubAccountU2F | TParamsVerifySubAccountSmsOrEmail;

// 对外提供的跳过 MFA 绑定的 API dataSkipBindMfa 的请求参数
export type TParamsSkipBindMfa = TUnCapitalizeKeys<TOmitConstantPayload<IPayloadSkipBindMfa>>;

// 对外提供的发送验证码（MPK 或者 子用户）的 API dataSendCode 的请求参数
export type TParamsSendCode = TUnCapitalizeKeys<Omit<IPayloadSendCode, 'TicketType' | 'Origin'>>;

// 对外提供的验证 MPK 用户风控结果的 API dataVerifyMpk 的请求参数
export type TParamsVerifyMpk = TUnCapitalizeKeys<TOmitConstantPayload<IPayloadVerifyMpk>>;

// 老版主账号风控发送验证码的接口的请求参数
export interface IParamsSendCodeOld {
  codeType: string;
  verifyType: string;
}

export interface IParamsSendCodeOldWithConfig extends IParamsSendCodeOld {
  sendCodeUrl: string;
  sendCodeMethod: 'POST' | 'GET';
}