import {
  FetcherFnRequest
} from '@alicloud/fetcher';

import {
  EStep,
  EVerifyType,
  ERisk
} from '../const';

import {
  IGetBindMfaInfoPayload,
  TBindMfaPayload,
  IGetAuthMfaInfoPayload,
  TVerifyMfaPayload
} from './payload';
import {
  TGetBindMfaInfoData,
  IMfaData,
  TGetAuthMfaInfoData
} from './data';

export interface IFetcherInterceptorConfig {
  // 从错误 data 中获取对应的信息
  DATA_PATH_VERIFY_TYPE?: string; // 如何从原始返回中获取风控类型，重新请求的时候需要带上
  DATA_PATH_VERIFY_DETAIL?: string; // 如何从原始返回中获取风控展示信息（邮箱或手机）
  DATA_PATH_VERIFY_CODE_TYPE?: string; // 请求验证码的接口需要它
  DATA_PATH_VERIFY_URL?: string; // 主账号风控，如何从原始返回中获取集团会员平台的核身 URL，将嵌入在 iframe 里面
  DATA_PATH_USER_PRINCIPAL_NAME?: string; // 子账号风控，如何从原始返回中中获取子账号名
  // 从返回的 fetcher config 中获取对应信息
  CONFIG_PATH_RISK_VERSION?: string; // 如何从原始返回的 config 中获取风控是新版还是旧版
  // 风控错误码
  CODE_NEED_VERIFY?: string; // 风控 - 需要用验证码进行二次验证
  CODE_FORBIDDEN?: string; // 风控 - 中断业务流程
  CODE_INVALID_INPUT?: string; // 验证码错误
  // 风控验证类型 - 通过 DATA_PATH_VERIFY_TYPE 从初始 response 的 data 中得到的值
  BY_SMS?: string; // 通过短信验证
  BY_EMAIL?: string; // 通过邮箱验证
  BY_MFA?: string; // 通过 MFA 设备验证
  // URL 设置
  URL_SEND_CODE?: string; // 必须设置，发送验证码接口地址（默认的好像就是这个地址）
  URL_SETTINGS?: string; // 设置用户风控验证方式地址
  URL_GET_MFA_INFO_TO_BIND?: string; // 获取绑定 MFA 所需信息的接口
  URL_MFA_BIND?: string; // 绑定 MFA 设备的接口
  URL_GET_MFA_INFO_TO_AUTH?: string; // 获取验证 MFA 所需信息的接口
  URL_MFA_AUTH?: string; // 验证 MFA 设备的接口
  // 发送验证码后的冷却时间
  COOLING_AFTER_SENT?: number; // 发送验证码成功后的冷却时间（秒）
  COOLING_AFTER_SEND_FAIL?: number; // 发送验证码失败后的冷却时间（秒）
  U2F_TIMEOUT?: number; // U2F 设备的超时时间
  // 其他
  REQUEST_METHOD?: 'POST' | 'GET';
}

/**
 * 旧版主账号风控参数
 */
export interface IOldMainRiskInfo {
  risk: ERisk.OLD_MAIN;
  type: EVerifyType; // 解析后的类型
  verifyType: string; // 原始的 verifyType，通过 IRiskConfig.DATA_PATH_VERIFY_TYPE 从错误返回的 data 中获取
  detail: string;
  codeType: string;
}

/**
 * 新版主账号风控参数
 */
export interface IMainAccountRiskInfo {
  risk: ERisk.NEW_MAIN;
  verifyUrl: string;
}

/**
 * 新版子账号风控参数
 */
export interface ISubAccountRiskInfo {
  risk: ERisk.NEW_SUB;
  userPrincipalName: string; // 子账号完整名称
  verifyType: string; // 原始的风控验证方式
  type: EVerifyType; // 解析后的风控验证方式
  detail: string;
}

export type TRiskInfo = IOldMainRiskInfo | ISubAccountRiskInfo | IMainAccountRiskInfo;

/**
 * 旧版主账号风控 - 弹窗的 data 类型
 */
export interface IRiskVerifyDialogData {
  request: FetcherFnRequest;
  riskInfo: IOldMainRiskInfo;
  riskConfig: IFetcherInterceptorConfig;
  code: string;
  requestId: string;
  errorMessage: string;
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
  getBindMfaInfoPayload?: IGetBindMfaInfoPayload; // 获取 MFA 绑定信息的接口 /identity/getMfaInfoToBind 的 payload
  getBindMfaInfoData?: TGetBindMfaInfoData; // 获取 MFA 绑定信息的接口 /identity/getMfaInfoToBind 的返回 data
  bindMfaPayload?: TBindMfaPayload; // 绑定 MFA 接口 /identity/bindMfa 的 payload
  bindMfaData?: IMfaData; // 绑定 MFA 接口 /identity/bindMfa 的返回 data
  getAuthMfaInfoPayload?: IGetAuthMfaInfoPayload; // 获取 MFA 验证信息的接口 /identity/getMfaInfoToAuth 的 payload
  getAuthMfaInfoData?: TGetAuthMfaInfoData; // 获取 MFA 验证信息的接口 /identity/getMfaInfoToAuth 的返回 data
  verifyMfaPayload?: TVerifyMfaPayload; // 验证 MFA 接口 /identity/verify 的 payload
  verifyMfaData?: IMfaData; // 验证 MFA 接口 /identity/verify 的返回 data
  primaryButtonDisabled?: boolean; // primary button 是否禁用
  u2fTimeout?: number; // u2f 设备绑定/验证的超时时间
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