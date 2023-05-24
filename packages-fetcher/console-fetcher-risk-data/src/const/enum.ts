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
  MPK_VERIFY = 'mpk_verify', // 新版风控的轻量级虚商场景 - 验证验证码接口
  SEND_CODE = 'send_code', // 新版 MPK 账号以及子账号的手机/邮箱验证码发送接口，Identity 服务提供
  SEND_CODE_OLD = 'send_code_old', // 旧版主账号风控发送验证码的接口，走的是 OneConsole 的 /risk/sendVerifyMessage.json 接口
  SUB_GET_AUTH_MFA_INFO = 'sub_get_auth_mfa_info', // 新版子账号风控 - 获取验证 MFA 设备信息
  SUB_GET_AUTH_VERIFICATION_INFO = 'sub_get_auth_verification_info' // 新版子账号风控 - 获取验证 MFA、手机、邮箱的信息
}

/**
 * API 请求结果列表
 */
export enum ESlsResultType {
  FAIL = 'fail',
  SUCCESS = 'success'
}