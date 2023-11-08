import {
  EAccountType,
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

export { EAccountType, ESubVerificationDeviceType };

export enum EDialogType {
  // 风控弹窗流程中可能会存在调用接口失败等情况，这时的弹窗是错误信息提示弹窗
  ERROR = 'error',
  NEW_MAIN_RISK = 'new_risk_main',
  OLD_MAIN_OR_MPK_RISK = 'old_main_or_mpk_risk',
  SUB_RISK_VERIFICATION_AUTH = 'sub_risk_verification_auth'
}

/**
 * 这里内部使用的二次验证类型，跟数据解耦
 */
export enum EConvertedVerifyType {
  SMS = 'sms',
  EMAIL = 'email',
  MFA = 'mfa',
  NONE = 'NONE', // 没有
  UNKNOWN = 'UNKNOWN', // 有，但不支持
  NOT_NEED = 'NOT_NEED' // 不需要，新版主账号风控场景
}

/**
 * U2f Message 的 Icon
 */
export enum EIconType {
  ERROR = 'alert-circle',
  NOTICE = 'loading-notice',
  SUCCESS = 'success-circle-fill',
  WARNING = 'alert-circle-fill',
  LOADING = 'loading'
}

/**
 * 埋点 Topic 列表
 */
export enum ESlsTopic {
  MPK_RISK = 'mpk_risk', // 轻量级虚商风控
  OLD_MAIN_RISK = 'old_main_risk', // 旧版主账号风控
  NEW_MAIN_RISK = 'new_main_risk', // 新版主账号风控
  SUB_RISK = 'sub_risk', // 新版子账号风控
  U2F_ERROR = 'u2f_error', // 新版子账号风控 - u2f 报错埋点
  RISK_STARTUP = 'risk_startup', // 风控弹窗 PV 埋点
  RISK_INVALID = 'risk_invalid', // 无效的风控 code 的弹窗提示埋点
  RISK_PROMPT_ERROR = 'risk_prompt_error', // riskPrompt 弹窗弹出错误信息时的埋点
  INVALID_VERIFY_URL = 'invalid_verify_url', // 不合法的新版主账号核身 URL 埋点
  GET_VMFA_CODE_FROM_WINDVANE = 'get_vmfa_code_from_windvane', // 阿里云 APP 内通过 windvane 获取虚拟 MFA 验证码
  RISK_TERMINATED_WITH_UNEXPECTED_ERROR = 'risk_terminated_with_unexpected_error'
}

/**
 * 风控类型
 */
export enum ERiskType {
  MPK = 'mpk', // 轻量级虚商风控
  OLD_MAIN = 'old_main', // 旧版主账号风控
  NEW_MAIN = 'new_main', // 新版主账号风控
  NEW_SUB = 'new_sub' // 新版子账号风控
}
/**
 * primaryButtonDisableObject 或者 errorMessageObject 的 Key
 */
export enum ESceneKey {
  MAIN_ACCOUNT = 'main_account',
  RISK_PROMPT_ERROR = 'risk_prompt_error'
}

export enum ESlsResultType {
  FAIL = 'fail',
  SUCCESS = 'success',
  // 自建网关型控制台直接调用 @alicloud/console-fetcher-risk-prompt 且没有传入 reRequestWithVerifyResult 时，当风控验证完成后，会把风控验证参数（verifyCode/verifyType 等）resolve 出去。
  // 调用方接受到风控验证参数后，需要主动把风控验证参数放进重新调用被风控的请求的参数中，而风控验证是否通过被调用方所知晓。
  RISK_PROMPT_RESOLVE = 'risk_prompt_resolve',
  // 在风控流程中，拿到 verifyCode 后会将其作为参数重新被风控的接口。即使 verifyCode 校验通过，接口也可能会报业务错误。biz_api_error 用于区分业务错误
  BIZ_API_ERROR = 'biz_api_error'
}

// 客户关闭弹窗时非预期错误的类型枚举
export enum EUnexpectedErrorType {
  // 非法风控
  RISK_INVALID = 'risk_invalid',
  // riskPrompt 报错
  RISK_PROMPT_ERROR = 'risk_prompt_error',
  // 新版主账号风控 VerifyUrl 不合法
  INVALID_VERIFY_URL = 'invalid_verify_url',
  // 子账号风控 Validators 解析结果不合法
  SUB_INVALID_VALIDATORS = 'sub_invalid_validators',
  // 旧版主账号风控发送验证码报预期外的错误
  OLD_MAIN_SEND_VERIFY_CODE_ERROR = 'old_main_send_code_error',
  // MPK 账号风控发送验证码报预期外的错误
  MPK_SEND_VERIFY_CODE_ERROR = 'mpk_send_code_error',
  // 子账号风控发送验证码（手机或邮箱）报预期外的错误
  SUB_SEND_VERIFY_CODE_ERROR = 'sub_send_code_error',
  // MPK 账号调用 identity/verify 接口报预期外的错误
  MPK_RISK_VERIFY_FAILED = 'mpk_risk_verify_failed',
  // 子账号调用 identity/verify 接口报预期外的错误
  SUB_RISK_VERIFY_FAILED = 'sub_risk_verify_failed'
}

export enum EClientType {
  PC = 'pc',
  H5 = 'h5',
  APP = 'app',
  DINGTALK = 'dingTalk',
  DINGTALK_PC = 'dingTalk-pc'
}