import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  ESceneKey
} from '../enum';

/**
 * 风控错误码
 */
export const CODE_NEED_VERIFY = 'FoundRiskAndDoubleConfirm';
export const CODE_FORBIDDEN = 'FoundRiskAndTip';
// 重新请求被风控的接口时，核验二次核身参数失败的错误码
export const CODE_INVALID_INPUT = 'verifyCodeInvalid';
export const CODE_IDENTITY_TOKEN_VALIDATE_FAILED = 'TokenValidateFailed';
export const CODE_IDENTITY_INVALID_PARAMETERS = 'InvalidParameter.IvTokenVerifyRequest.idType';
// 默认的兜底系统错误
export const CODE_IDENTITY_INTERNAL_ERROR = 'InternalError';

// 风控验证错误的错误码
export const CODE_RISK_ERROR_ARRAY = [CODE_INVALID_INPUT, CODE_IDENTITY_TOKEN_VALIDATE_FAILED, CODE_IDENTITY_INVALID_PARAMETERS];

/**
 * 处理过了的风控错误，业务 UI 层无需再对其进行报错视图，忽略即可（但对于数据层来说还是一种错误）
 */
export const ERROR_RISK_FORBIDDEN = 'FetcherErrorRiskForbidden'; // 风控说「你无法继续」 - 有 UI 对用户提示
export const ERROR_RISK_INVALID = 'FetcherErrorRiskInvalid'; // 风控验证设置无效，需用户进行设置 - 有 UI 对用户提示
export const ERROR_RISK_CANCELLED = 'FetcherErrorRiskCancelled'; // 用户取消风控验证

/*
*  用到的 SVG 图像的链接 
*/
export const SVG_URLS = {
  U2F_INSERT: 'https://img.alicdn.com/imgextra/i1/O1CN01UuCEK71WIsE3LvTB3_!!6000000002766-55-tps-86-86.svg',
  U2F_CLICK: 'https://img.alicdn.com/imgextra/i3/O1CN01ryyaVx1OZLXnuN6Mn_!!6000000001719-55-tps-86-86.svg',
  U2F_ICON: 'https://img.alicdn.com/imgextra/i3/O1CN01F386u021hNVTPjltB_!!6000000007016-55-tps-123-123.svg',
  VMFA_ICON_GREY: 'https://img.alicdn.com/imgextra/i1/O1CN01JabR2128pLi0tVEDE_!!6000000007981-55-tps-123-123.svg',
  VMFA_ICON_WHITE: 'https://img.alicdn.com/imgextra/i1/O1CN01RoiIfD1wtg3vK02Fk_!!6000000006366-55-tps-123-123.svg',
  SMS_ICON: 'https://img.alicdn.com/imgextra/i4/O1CN01eDJihn27u6JHloMYw_!!6000000007856-55-tps-200-200.svg',
  EMAIL_ICON: 'https://img.alicdn.com/imgextra/i4/O1CN01qgcbb21CvXSHlELOg_!!6000000000143-55-tps-200-200.svg'
};

export const MOBILE_SCREE_SIZE = 720;

/**
 * 阿里云 APP 下载链接
 */
export const ALIYUN_APP_DOWNLOAD_URL = 'https://download.app.aliyun.com/app/aliyunapp/download/home?ulinks_fallback=aliyun%3A%2F%2Fforward%2Fapp%3Ftarget_%3D%2Fram%2Fhome%26pluginId_%3D9';
 
/**
 * 阿里云 APP 的版本
 */
export const ALIYUN_APP_VERSION = ((): string => {
  if (/aliyun(?:app)?\/([\d.]+)/i.test(navigator.userAgent)) {
    return RegExp.$1;
  }
   
  return '';
})();
 
export const DEFAULT_DIALOG_SIZE = ALIYUN_APP_VERSION ? 'xs' : 'm'; // 移动端阿里云 app 内的风控弹窗尺寸较小

// 内置的风控配置
export const BUILT_IN_RISK_CONFIG = {
  bySms: 'sms',
  byEmail: 'email',
  byMfa: 'ga',
  coolingAfterSent: 60,
  coolingAfterSentFail: 5,
  u2fTimeOut: 180000,
  webAuthnKeyType: 'public-key' as const,
  // 阿里云 APP 设置主账号手机/邮箱的地址与 PC 端不一样
  urlSetting: ALIYUN_APP_VERSION ? '//m.console.aliyun.com/app-basic-business/account-setting?navigationBar=false' : '//account.console.aliyun.com/#/secure'
};

// 默认的风控配置
export const DEFAULT_RISK_CONFIG = {
  // 从 riskResponse 中如何解析风控信息
  dataPathOldVerifyType: 'data.verifyType',
  dataPathOldVerifyDetail: 'data.verifyDetail',
  dataPathOldCodeType: 'data.codeType',
  dataPathVerifyUrl: 'data.VerifyURL',
  dataPathValidators: 'data.Validators.Validator',
  dataPathUserId: 'data.AliyunIdkp',
  dataPathExtend: 'data.Extend',
  dataPathCodeType: 'data.CodeType',
  dataPathVerifyType: 'data.VerifyType',
  dataPathVerifyDetail: 'data.VerifyDetail'
};

export const DEFAULT_PRIMARY_BUTTON_DISABLE_OBJECT = {
  [ESceneKey.MAIN_ACCOUNT]: true,
  [ESubVerificationDeviceType.EMAIL]: true,
  [ESubVerificationDeviceType.SMS]: true,
  [ESubVerificationDeviceType.VMFA]: true,
  [ESubVerificationDeviceType.U2F]: true
};
