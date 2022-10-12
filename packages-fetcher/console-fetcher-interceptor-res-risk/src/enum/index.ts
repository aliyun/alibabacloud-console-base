/**
 * 这里内部使用的二次验证类型，跟数据解耦
 */
export enum EVerifyType {
  SMS = 'sms',
  EMAIL = 'email',
  MFA = 'mfa',
  NONE = 'NONE', // 没有
  UNKNOWN = 'UNKNOWN' // 有，但不支持
}

/**
 * 区分新旧风控，以及新版风控中的主/子账号风控
 */
export enum ERisk {
  MPK = 'mpk', // 轻量级虚商风控
  OLD_MAIN = 'old_main', // 旧版主账号风控
  NEW_MAIN = 'new_main', // 新版主账号风控
  NEW_SUB = 'new_sub' // 新版子账号风控
}

/**
 * 子账号验证接口 /identity/verify 的参数 VerifyType，一期只有 MFA
 */
export enum EPayloadVerifyType {
  MFA = 'mfa'
}

/**
 * 新版子账号风控 MFA 设备类型 - 虚拟 MFA / U2F
 */
export enum ESubMfaDeviceType {
  VMFA = 'VMFA',
  U2F = 'U2F'
}

/**
 * 发送验证码接口 /identity/send 要传的账号类型，主要供主账号轻量级虚商，以及预留给子账号短信/邮箱验证风控方式使用
 */
export enum EAccountType {
  MAIN = 'idkp',
  SUB = 'subidkp'
}

/**
 * 新版子账号风控类型为 MFA 时，可能出现的几种状态的页面
 */
export enum EStep {
  MFA_CHOOSE = 'mfa_choose', // 绑定 MFA，选择 MFA 设备类型
  VMFA_BIND = 'vmfa_bind', // 绑定 MFA，虚拟 MFA
  U2F_BIND = 'u2f_bind', // 绑定 MFA，U2F 设备
  VMFA_AUTH = 'vmfa_auth', // 验证 MFA，虚拟 MFA
  U2F_AUTH = 'u2f_auth' // 验证 MFA，U2F 设备
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

export enum ESlsResultType {
  SUCCESS = 'success',
  FAIL = 'fail',
  SKIP_BIND_SUCCESS = 'skip_bind_success',
  SKIP_BIND_FAIL = 'skip_bind_fail'
}

/**
 * 埋点 Topic 列表
 */
export enum ESlsTopic {
  RISK_STARTUP = 'risk_startup', // 展示正常风控弹窗，包括旧版主账号风控以及新版主子账号风控
  RISK_FORBIDDEN = 'risk_forbidden', // 不合法的风控 code 的弹窗提示
  RISK_INVALID = 'risk_invalid', // 无效的风控 code 的弹窗提示
  MPK_RISK = 'mpk_risk', // 轻量级虚商风控
  OLD_MAIN_RISK = 'old_main_risk', // 旧版主账号风控
  NEW_MAIN_RISK = 'new_main_risk', // 新版主账号风控
  SUB_RISK = 'sub_risk', // 新版子账号风控
  U2F_ERROR = 'u2f_error', // 新版子账号风控 - u2f 报错埋点
  SUB_AUTH_MFA = 'sub_auth_mfa', // 新版子账号风控 - 正常验证 MFA 设备
  SUB_BIND_MFA = 'sub_bind_mfa', // 新版子账号风控 - 正常绑定 MFA 设备
  SKIP_BIND_MFA = 'skip_bind_mfa', // 新版子账号风控 - 跳过绑定 MFA 
  SUB_GET_MFA_INFO = 'sub_get_mfa_info', // 新版子账号风控 - 获取验证 MFA 设备信息
  OLD_MAIN_RISK_SEND_CODE ='old_main_risk_send_code', // 旧版主账号风控 - 发送验证码
  MPK_VERIFY = 'mpk_verify', // 新版风控的轻量级虚商场景 - 验证验证码接口
  MPK_SEND_CODE = 'mpk_send_code' // 新版风控的轻量级虚商场景 - 发送验证码
}