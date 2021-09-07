import {
  IFetcherInterceptorConfig
} from '../types';

/**
 * 处理过了的风控错误，业务 UI 层无需再对其进行报错视图，忽略即可（但对于数据层来说还是一种错误）
 */
export const ERROR_RISK_FORBIDDEN = 'FetcherErrorRiskForbidden'; // 风控说「你无法继续（FoundRiskAndTip）」 - 有 UI 对用户提示
export const ERROR_RISK_INVALID = 'FetcherErrorRiskInvalid'; // 风控验证设置无效（无效的 verifyType），需用户进行设置 - 有 UI 对用户提示
export const ERROR_RISK_CANCELLED = 'FetcherErrorRiskCancelled'; // 用户取消风控验证

export enum EAccountType {
  MAIN,
  SUB
}

/**
 * 子账号验证接口 /identity/verify 的参数 VerifyType，一期只有 MFA
 */
export enum EPayloadVerifyType {
  MFA = 'MFA'
}

export enum ESubMFADeviceType {
  VMFA = 'VMFA',
  U2F = 'U2F'
}

/**
 * 子账号风控类型为 MFA 时，可能出现的几种状态的页面
 */
export enum EStep {
  MFA_CHOOSE = 'mfa_choose', // 绑定 MFA，选择 MFA 设备类型
  VMFA_BIND = 'vmfa_bind', // 绑定 MFA，虚拟 MFA
  U2F_BIND = 'u2f_bind', // 绑定 MFA，U2F 设备
  VMFA_AUTH = 'vmfa_auth', // 验证 MFA，虚拟 MFA
  U2F_AUTH = 'u2f_auth' // 验证 MFA，U2F 设备
}

/**
 * 子账号的二次验证类型，与数据解耦，一期只有 mfa
 */
export enum EVerifyType {
  SMS = 'sms',
  EMAIL = 'email',
  MFA = 'mfa',
  NONE = 'NONE', // 没有
  UNKNOWN = 'UNKNOWN' // 有，但不支持
}

/**
 * 风控设置
 */
export const DEFAULT_RISK_CONFIG: Required<IFetcherInterceptorConfig> = {
  // 风控错误码
  CODE_NEED_VERIFY: 'FoundRiskAndDoubleConfirm',
  CODE_FORBIDDEN: 'FoundRiskAndTip',
  CODE_INVALID_INPUT: 'verifyCodeInvalid',
  // 从错误 data 中获取对应信息
  DATA_PATH_VERIFY_URL: 'data.verifyURL',
  DATA_PATH_VERIFY_TYPE: 'data.verifyType',
  DATA_PATH_USER_PRINCIPAL_NAME: 'data.userPrincipalName',
  DATA_PATH_VERIFY_DETAIL: 'data.verifyDetail',
  // 子账号风控类型 - 通过 DATA_PATH_VERIFY_TYPE 从初始 response.data 中得到的值
  BY_SMS: 'sms',
  BY_EMAIL: 'email',
  BY_MFA: 'ga',
  // 子账号风控，接口 URL 设置
  URL_GET_MFA_INFO_TO_BIND: 'https://oneapi.alibaba-inc.com/mock/boshit/identity/getMfaInfoToBind',
  URL_MFA_BIND: 'https://oneapi.alibaba-inc.com/mock/boshit/identity/bindMfa',
  URL_GET_MFA_INFO_TO_AUTH: 'https://oneapi.alibaba-inc.com/mock/boshit/identity/getMfaInfoToAuth',
  URL_MFA_AUTH: 'https://oneapi.alibaba-inc.com/mock/boshit/identity/verify1',
  URL_SETTING: '',
  // 子账号风控冷却/超时时间设置 (单位：秒)
  COOLING_AFTER_SENT: 60,
  COOLING_AFTER_SEND_FAIL: 10,
  U2F_TIMEOUT: 180,
  // 其他
  METHOD_URL: 'POST'
};

/**
 * U2F 等待超时时间，单位为秒
 */
export const U2F_TIMEOUT = 180;

export enum EU2FDescKey {
  BIND_U2F_KEY1 = 'bind_u2f_key1',
  BIND_U2F_KEY2 = 'bind_u2f_key2',
  AUTH_U2F_KEY = 'auth_u2f_key'
}

/**
 * U2F Message 的 Icon
 */
export enum EIconType {
  error = 'alert-circle-fill',
  notice = 'notice',
  success = 'success-circle-fill'
}