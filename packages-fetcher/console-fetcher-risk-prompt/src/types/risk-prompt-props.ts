export interface IPlainError extends Error {}

/**
 * riskPrompt Resolve 之后对外输出的 verifyType 类型，该值会作为重新请求被风控接口的参数
 */
export type TResolveVerifyType = 'ga' | 'sms' | 'email' | '';

export interface IRiskPromptVerifyResult {
  verifyCode: string;
  verifyType: string;
  requestId?: string;
}

export interface IRiskPromptResolveData extends IRiskPromptVerifyResult {
  // 如果参数中有 reRequestWithVerifyResult，那么获取到 verifyResult 后会重新请求被风控的接口获取 reRequestResponse，并在作为 close 函数参数
  reRequestResponse?: unknown;
}

export type TRiskResponse<T = Record<string, unknown>> = T;

export type TNewRisk<T = Record<string, unknown>> = boolean | ((riskResponse: TRiskResponse<T>) => boolean);

// 风控配置类型定义
export interface IRiskConfig {
  dataPathVerifyUrl?: string; // 如何从原始返回中获取新版主账号风控的会员核身 URL 
  dataPathValidators?: string; // 如何从原始返回中获取新版子账号风控信息
  dataPathUserId?: string; // 如何从原始返回中中获取账号 ID
  dataPathExtend?: string; // 如何从原始返回中获取扩展信息，比如虚商相关的配置信息
  dataPathCodeType?: string; // 如何从原始返回中新版风控的风控码
  dataPathVerifyType?: string; // 如何从原始返回中新版主账号风控的风控类型
  dataPathVerifyDetail?: string; // 如何从原始返回中获取新版主账号风控详细信息（邮箱或手机）
  // 基于 Xconsole 控制台才可能传的参数
  dataPathOldCodeType?: string; // 如何从原始数据中获取旧版主账号风控码
  dataPathOldVerifyType?: string; // 如何从原始返回中获取旧版主账号的风控类型（邮箱、手机或者 MFA）
  dataPathOldVerifyDetail?: string; // 如何从原始返回中获取旧版主账号风控详细信息（邮箱或手机）
}

export interface IRiskValidator {
  VerifyDetail: string;
  VerifyType: string;
}

export interface IRiskParameters {
  accountId: string; // 用户 ID
  codeType: string; // 风控码
  verifyType: string; // 风控验证方式
  verifyDetail?: string | boolean; // 风控验证详情
  validators?: IRiskValidator[]; // 子账号风控的风控验证方式及详情集合数组，目前只包括 MFA，后续会增加手机 & 邮箱
  verifyUrl?: string; // 新版主账号风控的核身弹窗 URL
}

export type TRiskParametersGetter<T = Record<string, unknown>> = (riskResponse: TRiskResponse<T>) => IRiskParameters;
export type TReRequestWithVerifyResult = (verifyResult: IRiskPromptVerifyResult) => Promise<unknown>;

export interface IRiskPromptProps<T> {
  riskResponse: TRiskResponse<T>; // API 被风控时的返回，必需 
  error?: IPlainError;
  newRisk?: TNewRisk<T>; // 是否使用新版风控，可选
  riskConfig?: IRiskConfig; // 风控配置，可选
  riskParametersGetter?: TRiskParametersGetter<T>; // 怎样从 riskResponse 中解析出新版风控场景下，riskPrompt 所需的参数
  reRequestWithVerifyResult?: TReRequestWithVerifyResult; // 重新请求被风控接口的函数
}