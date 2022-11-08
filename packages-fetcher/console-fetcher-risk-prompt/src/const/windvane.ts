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