export const ALIYUN_APP_VERSION = ((): string => {
  if (/aliyun(?:app)?\/([\d.]+)/i.test(navigator.userAgent)) {
    return RegExp.$1;
  }
  
  return '';
})();

export const WEBAUTHN_KEY_TYPE = 'public-key';

export const DEFAUT_DIALOG_SIZE = ALIYUN_APP_VERSION ? 'xs' : 'm'; // 移动端阿里云 app 内的风控弹窗尺寸较小

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