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

export type TRequestMethod = 'POST' | 'GET';

// 兼容分包前的 console-fetcher-interceptor-res-risk 的配置
export interface IExtraRiskConfig {
  BY_SMS?: string; // 通过短信验证的方法，默认 sms
  BY_EMAIL?: string; // 通过邮箱验证的方法，默认 email
  BY_MFA?: string; // 通过 MFA 设备验证，默认 ga
  URL_SETTINGS?: string; // 旧版主账号风控验证方式设置地址
  URL_SEND_CODE?: string; // 旧版主账号风控验证码发送接口地址，默认 /risk/sendVerifyMessage.json
  REQUEST_METHOD?: TRequestMethod; // 默认 POST，影响旧版主账号发送验证码接口
}

export type TOldMainRiskExtraConfig = Pick<Required<IExtraRiskConfig>, 'URL_SEND_CODE' | 'URL_SETTINGS' | 'REQUEST_METHOD'>;
export type TRiskTypeConfig = Pick<Required<IExtraRiskConfig>, 'BY_SMS' | 'BY_EMAIL' | 'BY_MFA'>;

// 解析风控响应的方式
export interface IRiskDataPathConfig {
  DATA_PATH_VERIFY_URL?: string; // 如何从风控响应中获取新版主账号风控的会员核身 URL 
  DATA_PATH_VALIDATORS?: string; // 如何从风控响应中获取新版子账号风控信息
  DATA_PATH_USER_ID?: string; // 如何从风控响应中中获取账号 ID
  DATA_PATH_NEW_EXTEND?: string; // 如何从风控响应中获取扩展信息，比如虚商相关的配置信息
  DATA_PATH_NEW_VERIFY_CODE_TYPE?: string; // 如何从风控响应中新版风控的风控码
  DATA_PATH_NEW_VERIFY_TYPE?: string; // 如何从风控响应中新版主账号风控的风控类型
  DATA_PATH_NEW_VERIFY_DETAIL?: string; // 如何从风控响应中获取新版主账号风控详细信息（邮箱或手机）
  // OneConsole 控制台才可能传的参数
  DATA_PATH_VERIFY_CODE_TYPE?: string; // 如何从原始数据中获取旧版主账号风控码
  DATA_PATH_VERIFY_TYPE?: string; // 如何从风控响应中获取旧版主账号的风控类型（邮箱、手机或者 MFA）
  DATA_PATH_VERIFY_DETAIL?: string; // 如何从风控响应中获取旧版主账号风控详细信息（邮箱或手机）
}

// 风控配置类型定义
export interface IRiskConfig extends IRiskDataPathConfig, IExtraRiskConfig {}

export interface IRiskValidator {
  VerifyDetail: string;
  VerifyType: string;
}

export interface IRiskParameters {
  accountId: string; // 用户 ID
  codeType: string; // 风控码
  verifyType: string; // 风控验证方式
  verifyDetail?: string | boolean; // 风控验证详情
  validators?: (IRiskValidator | null)[]; // 子账号风控的风控验证方式及详情集合数组
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