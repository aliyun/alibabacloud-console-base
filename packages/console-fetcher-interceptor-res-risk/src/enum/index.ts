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