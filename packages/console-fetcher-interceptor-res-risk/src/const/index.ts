import {
  IFetcherInterceptorConfig
} from '../types';
import aliyunAppVersion from '../util/aliyun-app-version';
import getIdentityServiceApiDomain from '../util/get-identity-service-api-domain';

const identityServiceApiDomain = getIdentityServiceApiDomain();

// 处理过了的风控错误，业务 UI 层无需再对其进行报错视图，忽略即可（但对于数据层来说还是一种错误）
export const ERROR_RISK_FORBIDDEN = 'FetcherErrorRiskForbidden'; // 风控说「你无法继续」 - 有 UI 对用户提示
export const ERROR_RISK_INVALID = 'FetcherErrorRiskInvalid'; // 风控验证设置无效，需用户进行设置 - 有 UI 对用户提示
export const ERROR_RISK_CANCELLED = 'FetcherErrorRiskCancelled'; // 用户取消风控验证

/**
 * 风控设置
 */
export const DEFAULT_RISK_CONFIG: Required<IFetcherInterceptorConfig> = {
  // 从错误 data 中获取对应信息
  DATA_PATH_VERIFY_TYPE: 'data.verifyType',
  DATA_PATH_VERIFY_DETAIL: 'data.verifyDetail',
  DATA_PATH_VERIFY_CODE_TYPE: 'data.codeType',
  DATA_PATH_VALIDATORS: 'data.Validators.Validator',
  DATA_PATH_USER_ID: 'data.AliyunIdkp',
  DATA_PATH_NEW_VERIFY_CODE_TYPE: 'data.CodeType',
  DATA_PATH_ACCOUNT_TYPE: 'data.AccountType',
  DATA_PATH_VERIFY_URL: 'data.VerifyURL',
  DATA_PATH_NEW_EXTEND: 'data.Extend',
  DATA_PATH_NEW_VERIFY_TYPE: 'data.VerifyType',
  DATA_PATH_NEW_VERIFY_DETAIL: 'data.VerifyDetail',
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
  URL_VERIFY: `//${identityServiceApiDomain}/identity/verify`,
  URL_MFA_BIND: `//${identityServiceApiDomain}/identity/bindMFA`,
  URL_GET_MFA_INFO_TO_BIND: `//${identityServiceApiDomain}/identity/getMfaInfoToBind`,
  URL_GET_MFA_INFO_TO_AUTH: `//${identityServiceApiDomain}/identity/getMfaInfoToAuth`,
  URL_SKIP_BIND_MFA: `//${identityServiceApiDomain}/identity/skip`,
  URL_SUB_OR_MPK_SEND_CODE: `//${identityServiceApiDomain}/identity/send`,
  // 旧版主账号风控冷却/超时时间设置 (单位：秒)
  COOLING_AFTER_SENT: 60,
  COOLING_AFTER_SEND_FAIL: 10,
  // U2F 超时时间（单位：毫秒）
  U2F_TIMEOUT: 180000,
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

export const WEBAUTHN_KEY_TYPE = 'public-key';

export const defaultDialogSize = aliyunAppVersion ? 'xs' : 'm'; // 移动端阿里云 app 内的风控弹窗尺寸较小

/**
 * 封装的 WindVane 错误名称
 */
export const WINDVANE_ERROR_NAME = 'WindvaneError';

/**
 * WindVine 错误码
 * - HY_NOT_IN_WINDVANE：不在 WindVane 运行环境下（此时 WindVane.isAvailable 为 false）
 * - HY_NO_HANDLER：没有对应的 module 或 method
 * - HY_USER_CANCELLED：填写 MFA 验证码时，用户点取消
 */
export const WINDVANE_ERROR_CODE = {
  NOT_IN_WINDVANE: 'HY_NOT_IN_WINDVANE',
  NO_HANDLER: 'HY_NO_HANDLER',
  USER_CANCELLED: 'HY_USER_CANCELLED'
};

/**
 * 阿里云 APP 下载链接
 */
export const ALIYUN_APP_DOWNLOAD_URL = 'https://download.app.aliyun.com/app/aliyunapp/download/home?ulinks_fallback=aliyun%3A%2F%2Fforward%2Fapp%3Ftarget_%3D%2Fram%2Fhome%26pluginId_%3D9';