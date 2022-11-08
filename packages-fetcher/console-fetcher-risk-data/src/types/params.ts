import {
  TOmitTicketType,
  TUnCapitalizeKeys
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
  IPayloadVerifyMpk
} from './payload';

// 对外暴露的绑定 MFA 设备的 API dataBindMfa 的请求参数
export type TParamsBindVMfa = TUnCapitalizeKeys<TOmitTicketType<IPayloadBindVmfa>>;

export type TParamsBindU2F = TUnCapitalizeKeys<TOmitTicketType<IPayloadBindU2F>>;

export type TParamsBindMfa = TParamsBindVMfa | TParamsBindU2F;

// 对外暴露的获取绑定 MFA 设备所需数据的 API dataGetMfaInfoToBind 的请求参数
export type TParamsGetVMfaInfoToBind = TUnCapitalizeKeys<TOmitTicketType<IPayloadGetVmfaInfoToBind>>;

export type TParamsGetU2FInfoToBind = TUnCapitalizeKeys<TOmitTicketType<IPayloadGetU2fInfoToBind>>;

export type TParamsGetMfaInfoToBind = TParamsGetVMfaInfoToBind | TParamsGetU2FInfoToBind;

// 对外暴露的获取验证 MFA 设备所需数据的 API dataGetMfaInfoToAuth 的请求参数
export type TParamsGetMfaInfoToAuth = TUnCapitalizeKeys<TOmitTicketType<IPayloadGetMfaInfoToAuth>>;

// 对外暴露的验证子用户风控结果的 API dataVerifySubAccount 的请求参数
export type TParamsVerifySubAccountVMfa = TUnCapitalizeKeys<TOmitTicketType<IPayloadVerifySubAccountVmfa>>;

export type TParamsVerifySubAccountU2F = TUnCapitalizeKeys<TOmitTicketType<IPayloadVerifySubAccountU2F>>;

export type TParamsVerifySubAccountMfa =TParamsVerifySubAccountVMfa | TParamsVerifySubAccountU2F;

// 对外暴露的跳过 MFA 绑定的 API dataSkipBindMfa 的请求参数
export type TParamsSkipBindMfa = TUnCapitalizeKeys<TOmitTicketType<IPayloadSkipBindMfa>>;

// 对外暴露的发送验证码（MPK 或者 子用户）的 API dataSendCode 的请求参数
export type TParamsSendCode = TUnCapitalizeKeys<IPayloadSendCode>;

// 对外暴露的验证 MPK 用户风控结果的 API dataVerifyMpk 的请求参数
export type TParamsVerifyMpk = TUnCapitalizeKeys<TOmitTicketType<IPayloadVerifyMpk>>;

// 老版主账号风控发送验证码的接口 /risk/sendVerifyMessage.json 的请求参数
export type IParamsSendCodeOld = {
  codeType: string;
  verifyType: string;
}