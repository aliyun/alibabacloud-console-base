/**
 * 子账号验证接口 /identity/verify 的参数 VerifyType，一期只有 MFA，后续会增加短信 & 邮箱
 */
export enum ESubVerifyType {
  MFA = 'mfa'
}

/**
 * 新版子账号风控 MFA 设备类型 - 虚拟 MFA / U2F / SMS / EMAIL
 */
export enum ESubVerificationDeviceType {
  VMFA = 'VMFA',
  U2F = 'U2F',
  SMS = 'SMS',
  EMAIL = 'EMAIL'
}

/**
 * 发送验证码接口 /identity/send 要传的账号类型，主要供主账号轻量级虚商，以及预留给子账号短信/邮箱验证风控方式使用
 */
export enum EAccountType {
  MAIN = 'idkp',
  SUB = 'subidkp'
}

/**
 * 埋点 Topic 列表
 */
export enum ESlsTopic {
  SUB_VERIFY = 'sub_verify', // 新版子账号风控 - 风控验证。一期只有 MFA，后续会有 sms（手机号）、email（邮箱）等方式
  SUB_BIND_MFA = 'sub_bind_mfa', // 新版子账号风控 - 正常绑定 MFA 设备
  SUB_GET_AUTH_MFA_INFO = 'sub_get_auth_mfa_info', // 新版子账号风控 - 获取验证 MFA 设备信息
  SUB_GET_BIND_MFA_INFO = 'sub_get_bind_mfa_info', // 新版子账号风控 - 获取绑定 MFA 设备信息
  SKIP_BIND_MFA = 'skip_bind_mfa', // 新版子账号风控 - 跳过绑定 MFA 
  MPK_VERIFY = 'mpk_verify', // 新版风控的轻量级虚商场景 - 验证验证码接口
  MPK_SEND_CODE = 'mpk_send_code', // 新版风控的轻量级虚商场景 - 发送验证码
  SUB_GET_AUTH_VERIFICATION_INFO = 'sub_get_auth_verification_info' // 新版子账号风控 - 获取验证 MFA、手机、邮箱的信息
}

/**
 * API 请求结果列表
 */
export enum ESlsResultType {
  FAIL = 'fail',
  SUCCESS = 'success'
}