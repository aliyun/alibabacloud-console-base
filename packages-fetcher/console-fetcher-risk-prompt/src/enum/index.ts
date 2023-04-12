export enum EDialogType {
  ERROR = 'error', // 风控弹窗流程中可能会存在调用接口失败等情况，这时的弹窗是错误信息提示弹窗
  NEW_MAIN_RISK = 'new_risk_main',
  OLD_MAIN_OR_MPK_RISK = 'old_main_or_mpk_risk',
  SUB_RISK_MFA_BIND = 'sub_risk_mfa_bind',
  SUB_RISK_VERIFICATION_AUTH = 'sub_risk_verification_auth'
}

/**
 * 绑定 MFA 设备 UI 的形态
 * 1. 选择要绑定的 MFA 设备类型（虚拟 MFA 或者 U2F）
 * 2. 绑定虚拟 MFA 或者绑定 U2F
 */
export enum ESubBindMfaStep {
  CHOOSE_BIND_MFA_TYPE,
  BIND_VMFA,
  BIND_U2F
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
  NOTICE = 'loading',
  SUCCESS = 'success-circle-fill',
  WARNING = 'alert-circle-fill'
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
  GET_VMFA_CODE_FROM_WINDVANE = 'get_vmfa_code_from_windvane' // 阿里云 APP 内通过 windvane 获取虚拟 MFA 验证码
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
  BIND_MFA = 'bind_mfa',
  MAIN_ACCOUNT = 'main_account',
  RISK_PROMPT_ERROR = 'risk_prompt_error'
}

export enum ESlsResultType {
  FAIL = 'fail',
  SUCCESS = 'success',
  // 在风控流程中，拿到 verifyCode 后会将其作为参数重新被风控的接口。即使 verifyCode 校验通过，接口也可能会报业务错误。api_error 用于区分业务错误
  API_ERROR = 'api_error'
}

export enum EBindSceneDialogSubmitType {
  BIND_MFA = 'bind_mfa',
  SKIP_BIND_MFA = 'skip_bind_mfa'
}