// 风控错误码
export const CODE_NEED_VERIFY = 'FoundRiskAndDoubleConfirm';
export const CODE_FORBIDDEN = 'FoundRiskAndTip';
export const CODE_INVALID_INPUT = 'verifyCodeInvalid';

// 处理过了的风控错误，业务 UI 层无需再对其进行报错视图，忽略即可（但对于数据层来说还是一种错误）
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
  VMFA_ICON_WHITE: 'https://img.alicdn.com/imgextra/i1/O1CN01RoiIfD1wtg3vK02Fk_!!6000000006366-55-tps-123-123.svg'
};

export const DEFAULT_RISK_CONFIG = {
  bySms: 'sms',
  byEmail: 'email',
  byMfa: 'ga',
  urlSetting: '//account.console.aliyun.com/#/secure',
  coolingAfterSent: 60,
  coolingAfterSentFail: 10,
  dataPathVerifyType: 'data.verifyType',
  dataPathVerifyDetail: 'data.verifyDetail',
  dataPathCodeType: 'data.codeType',
  dataPathVerifyUrl: 'data.VerifyURL',
  dataPathValidators: 'data.Validators.Validator',
  dataPathUserId: 'data.AliyunIdkp',
  dataPathExtend: 'data.Extend',
  dataPathNewCodeType: 'data.CodeType',
  dataPathNewVerifyType: 'data.VerifyType',
  dataPathNewVerifyDetail: 'data.VerifyDetail'
};

/**
 * 阿里云 APP 下载链接
 */
export const ALIYUN_APP_DOWNLOAD_URL = 'https://download.app.aliyun.com/app/aliyunapp/download/home?ulinks_fallback=aliyun%3A%2F%2Fforward%2Fapp%3Ftarget_%3D%2Fram%2Fhome%26pluginId_%3D9';

/**
 * 校验虚拟 MFA 校验码的规则：6位数字
 */
export const REG_MFA_CODE = /^[0-9]{6}$/;

/**
  * U2F 的超时时间
  */
export const U2F_TIME_OUT = 180000;
 
/**
  * Web Authentication API 默认的 KEY TYPE
  */
export const WEBAUTHN_KEY_TYPE = 'public-key';
 
export const ALIYUN_APP_VERSION = ((): string => {
  if (/aliyun(?:app)?\/([\d.]+)/i.test(navigator.userAgent)) {
    return RegExp.$1;
  }
   
  return '';
})();
 
export const DEFAULT_DIALOG_SIZE = ALIYUN_APP_VERSION ? 'xs' : 'm'; // 移动端阿里云 app 内的风控弹窗尺寸较小