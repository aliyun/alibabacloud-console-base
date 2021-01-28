import {
  FetcherFnRequest
} from '@alicloud/fetcher';

import {
  EVerifyType
} from '../const';

export interface IRiskInfo {
  type: EVerifyType; // 解析后的类型
  verifyType: string; // 原始的 verifyType，通过 IRiskConfig.DATA_PATH_VERIFY_TYPE 从错误返回的 data 中获取
  detail: string;
  codeType: string;
}

export interface IFetcherInterceptorConfig {
  // 从错误 data 中获取对应的信息
  DATA_PATH_VERIFY_TYPE?: string; // 如何从原始返回中获取风控类型，重新请求的时候需要带上
  DATA_PATH_VERIFY_DETAIL?: string; // 如何从原始返回中获取风控展示信息（邮箱或手机）
  DATA_PATH_VERIFY_CODE_TYPE?: string; // 请求验证码的接口需要它
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
  // 发送验证码后的冷却时间
  COOLING_AFTER_SENT?: number; // 发送验证码成功后的冷却时间（秒）
  COOLING_AFTER_SEND_FAIL?: number; // 发送验证码失败后的冷却时间（秒）
  // 其他
  METHOD_SEND_CODE?: 'POST' | 'GET';
}

export interface IRiskVerifyDialogData {
  request: FetcherFnRequest;
  riskInfo: IRiskInfo;
  riskConfig: IFetcherInterceptorConfig;
  code: string;
  requestId: string;
  errorMessage: string;
}
