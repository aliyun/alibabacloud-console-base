import {
  IFetcherInterceptorConfig
} from '../types';

// 处理过了的风控错误，业务 UI 层无需再对其进行报错视图，忽略即可（但对于数据层来说还是一种错误）
export const ERROR_RISK_FORBIDDEN = 'FetcherErrorRiskForbidden'; // 风控说「你无法继续」 - 有 UI 对用户提示
export const ERROR_RISK_INVALID = 'FetcherErrorRiskInvalid'; // 风控验证设置无效，需用户进行设置 - 有 UI 对用户提示
export const ERROR_RISK_CANCELLED = 'FetcherErrorRiskCancelled'; // 用户取消风控验证

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
  OLD_MAIN, // 旧版主账号风控
  NEW_MAIN, // 新版主账号风控
  NEW_SUB // 新版子账号风控
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
export enum ESubMFADeviceType {
  VMFA = 'VMFA',
  U2F = 'U2F'
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
  error = 'alert-circle',
  notice = 'loading',
  success = 'success-circle-fill',
  warning = 'alert-circle-fill'
}

/**
 * 风控设置
 */
export const DEFAULT_RISK_CONFIG: Required<IFetcherInterceptorConfig> = {
  // 从错误 data 中获取对应信息
  DATA_PATH_VERIFY_TYPE: 'data.verifyType',
  DATA_PATH_VERIFY_DETAIL: 'data.verifyDetail',
  DATA_PATH_VALIDATORS: 'data.validators',
  DATA_PATH_VERIFY_CODE_TYPE: 'data.codeType',
  DATA_PATH_VERIFY_URL: 'data.verifyURL',
  DATA_PATH_USER_ID: 'data.userId',
  CONFIG_PATH_RISK_VERSION: 'body.riskVersion',
  // 风控错误码
  CODE_NEED_VERIFY: 'FoundRiskAndDoubleConfirm',
  CODE_FORBIDDEN: 'FoundRiskAndTip',
  CODE_INVALID_INPUT: 'verifyCodeInvalid', // 愚蠢 干啥这个就小写了...
  // 旧版主账号风控 & 新版子账号风控的类型，通过 DATA_PATH_VERIFY_TYPE 从初始 response.data 中得到的值
  BY_SMS: 'sms',
  BY_EMAIL: 'email',
  BY_MFA: 'ga',
  // 旧版主账号风控接口 URL
  URL_SEND_CODE: '/risk/sendVerifyMessage.json',
  URL_SETTINGS: '//account.console.aliyun.com/#/secure',
  // 新版子账号风控 URL
  URL_GET_MFA_INFO_TO_BIND: '/identity/getMfaInfoToBind',
  URL_MFA_BIND: '/identity/bindMFA',
  URL_GET_MFA_INFO_TO_AUTH: '/identity/getMfaInfoToAuth',
  URL_MFA_AUTH: '/identity/verify',
  // 旧版主账号风控冷却/超时时间设置 (单位：秒)
  COOLING_AFTER_SENT: 60,
  COOLING_AFTER_SEND_FAIL: 10,
  // U2F 超时时间
  U2F_TIMEOUT: 180,
  // 其他
  REQUEST_METHOD: 'POST'
};

/**
 * 校验虚拟 MFA 校验码的规则：6位数字
 */
export const REG_MFA_CODE = /^[0-9]{6}$/;

/*
 *  用到的 SVG 图像的链接 
 */
export const SvgUrls = {
  U2F_INSERT: 'https://img.alicdn.com/imgextra/i1/O1CN01UuCEK71WIsE3LvTB3_!!6000000002766-55-tps-86-86.svg',
  U2F_CLICK: 'https://img.alicdn.com/imgextra/i3/O1CN01ryyaVx1OZLXnuN6Mn_!!6000000001719-55-tps-86-86.svg',
  U2F_ICON: 'https://img.alicdn.com/imgextra/i3/O1CN01F386u021hNVTPjltB_!!6000000007016-55-tps-123-123.svg',
  VMFA_ICON_GREY: 'https://img.alicdn.com/imgextra/i1/O1CN01JabR2128pLi0tVEDE_!!6000000007981-55-tps-123-123.svg',
  VMFA_ICON_WHITE: 'https://img.alicdn.com/imgextra/i1/O1CN01RoiIfD1wtg3vK02Fk_!!6000000006366-55-tps-123-123.svg'
};