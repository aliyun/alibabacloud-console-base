import {
  FetcherFnRequest
} from '@alicloud/fetcher';

import {
  EVerifyType,
  EAccountType,
  EPayloadVerifyType,
  ESubMFADeviceType,
  EStep
} from '../const';

/**
 * 主账号的风控参数
 */
export interface IMainAccountRiskInfo {
  accountType: EAccountType.MAIN;
  verifyUrl: string;
}

/**
 * 子账号的风控参数
 */
export interface ISubAccountRiskInfo {
  accountType: EAccountType.SUB;
  userPrincipalName: string; // 子账号完整名称
  verifyType: string; // 原始的风控验证方式
  type: EVerifyType; // 解析后的风控验证方式
  detail: string;
}

export type TRiskInfo = ISubAccountRiskInfo | IMainAccountRiskInfo;

export interface IFetcherInterceptorConfig {
  // 风控错误码
  CODE_NEED_VERIFY?: string; // 风控 - 需要进行二次风控
  CODE_FORBIDDEN?: string; // 风控 - 中断业务流程
  CODE_INVALID_INPUT?: string; // 验证码错误
  // 从错误 data 中获取对应信息
  DATA_PATH_VERIFY_URL?: string; // 主账号风控，如何从原始返回中获取集团会员平台的核身 URL，将嵌入在 iframe 里面
  DATA_PATH_VERIFY_TYPE?: string; // 子账号风控，如何从原始返回中中获取风控类型，一期只有 MFA 类型
  DATA_PATH_USER_PRINCIPAL_NAME?: string; // 子账号风控，如何从原始返回中中获取子账号名
  DATA_PATH_VERIFY_DETAIL?: string; // 子账号风控，如何从原始返回中获取风控信息。对 MFA 类型，'true' 代表用户已经绑定过 MFA，'false' 代表用户没有绑定过 MFA
  // 子账号风控类型 - 通过 DATA_PATH_VERIFY_TYPE 从初始 response.data 中得到的值
  BY_MFA?: string; // 通过 MFA（虚拟 MFA 或者 U2F 设备）
  BY_SMS?: string; // 通过短信验证，一期暂不提供
  BY_EMAIL?: string; // 通过邮箱验证，一期暂不提供
  // 子账号风控，接口 URL 设置
  URL_GET_MFA_INFO_TO_BIND?: string; // 获取绑定 MFA 所需信息的接口
  URL_MFA_BIND?: string; // 绑定 MFA 设备的接口
  URL_GET_MFA_INFO_TO_AUTH?: string; // 获取验证 MFA 所需信息的接口
  URL_MFA_AUTH?: string; // 验证 MFA 设备的接口
  URL_SETTING?: string; // 设置子账号风控方式的 URL
  // 子账号风控冷却/超时时间设置
  COOLING_AFTER_SENT?: number; // 发送验证码成功后的冷却时间（秒），一期不提供
  COOLING_AFTER_SEND_FAIL?: number; // 发送验证码失败后的冷却时间（秒），一期不提供
  U2F_TIMEOUT?: number; // U2F 设备的超时时间
  // 其他
  METHOD_URL?: 'POST' | 'GET';
}

export interface IMfaSharedPayload {
  TicketType: string; // mini = 虚商 其他 = 公有云
}

export interface IMfaSharedInfo {
  TargetUserPrincipalName?: string; // 用户名（包含 @ 后缀）
}

// 接口 /identity/getMfaInfoToBind 的 payload
export interface IGetBindMfaInfoPayload extends IMfaSharedPayload {
  UserPrincipalName?: string;
  DeviceType: ESubMFADeviceType;
}

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

// 接口 /identity/bindMfa 的 payload
export interface IBindVMfaPayload extends IMfaSharedInfo, IMfaSharedPayload {
  DeviceType: ESubMFADeviceType.VMFA;
  Code1: string;
  Code2: string;
}

export interface IBindU2FPayload extends IMfaSharedInfo, IMfaSharedPayload {
  DeviceType: ESubMFADeviceType.U2F;
  U2FAppId: string;
  U2FVersion: string;
  U2FRegistrationData: string;
  U2FClientData: string;
}

export type TBindMfaPayload = IBindVMfaPayload | IBindU2FPayload;

// 接口 /identity/getMfaInfoToAuth 的 payload
export interface IGetAuthMfaINfoPayload extends IMfaSharedPayload {}

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

// 接口 /identity/verify 的 payload
export interface IVerifyMfaSharedPayload extends IMfaSharedPayload {
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

// 接口 /identity/bindMfa 以及 /identity/verify  的返回 data
export interface IMfaData {
  ValiateToken: string;
}

/**
 * 子账号风控 - MFA 类型的弹窗 data 类型
 */
export interface ISubRiskVerifyDialogData {
  request: FetcherFnRequest;
  subRiskInfo: ISubAccountRiskInfo;
  requestId: string;
  errorMessage: string;
  step?: EStep;
  getBindMfaInfoPayload?: IGetBindMfaInfoPayload;
  getBindMfaInfoData?: TGetBindMfaInfoData;
  bindMfaPayload?: TBindMfaPayload;
  bindMfaData?: IMfaData;
  getAuthMfaInfoPayload?: IGetAuthMfaINfoPayload;
  getAuthMfaInfoData?: TGetAuthMfaInfoData;
  verifyMfaPayload?: TVerifyMfaPayload;
  verifyMfaData?: IMfaData;
  primaryButtonDisabled?: boolean;
}

/**
 * 主账号风控的弹窗 data 类型
 */
export interface IMainRiskVerifyDialogData {
  request: FetcherFnRequest;
  mainRiskInfo: IMainAccountRiskInfo;
  requestId: string;
  errorMessage: string;
  valideToken?: string;
  primaryButtonDisabled?: boolean;
}