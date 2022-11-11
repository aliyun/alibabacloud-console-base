export enum EDialogType {
  ERROR, // 风控弹窗流程中可能会存在调用接口失败等情况，这时的弹窗是错误信息提示弹窗
  NEW_MAIN_RISK,
  OLD_MAIN_OR_MPK_RISK,
  SUB_RISK_MFA_CHOOSE,
  SUB_RISK_VMFA_BIND,
  SUB_RISK_U2F_BIND,
  SUB_RISK_VMFA_AUTH,
  SUB_RISK_U2F_AUTH
}

export enum ESubAccountIdentityServiceType {
  BIND_MFA = 'bind_mfa',
  GET_MFA_INFO_TO_AUTH = 'get_mfa_info_to_auth',
  GET_MFA_INFO_TO_BIND = 'get_mfa_info_to_bind',
  VERIFY_SUB_ACCOUNT_MFA = 'verify_sub_account_mfa'
}

/**
 * 这里内部使用的二次验证类型，跟数据解耦
 */
export enum EVerifyType {
  SMS = 'sms',
  EMAIL = 'email',
  MFA = 'mfa',
  NONE = 'NONE', // 没有
  UNKNOWN = 'UNKNOWN', // 有，但不支持
  NOT_NEED = 'NOT_NEED' // 不需要，新版主账号风控场景
}

/**
 * U2F Message 的 Icon
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
  U2F_ERROR = 'u2f_error', // 新版子账号风控 - u2f 报错埋点
  RISK_STARTUP = 'risk_startup', // 风控弹窗 PV 埋点
  RISK_INVALID = 'risk_invalid', // 无效的风控 code 的弹窗提示埋点
  INVALID_VERIFY_URL = 'invalid_verify_url', // 不合法的新版主账号核身 URL 埋点
  GET_VMFA_CODE_FROM_WINDVANE = 'get_vmfa_code_from_windvane' // 阿里云 APP 内通过 windvane 获取虚拟 MFA 验证码
}

/**
 * 子账号风控类型，用于埋点上传
 */
export enum ESlsSubRiskType {
  AUTH_MFA = 'auth_mfa',
  BIND_MFA = 'bind_mfa',
  SKIP_BIND_MFA = 'skip_bind_mfa'
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