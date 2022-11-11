/**
 * 校验虚拟 MFA 校验码的规则：6位数字
 */
export const REG_MFA_CODE = /^[0-9]{6}$/;

/**
 * 新版主账号风控的 VerifyURL 的规则
 */
export const REG_NEW_MAIN_VERIFY_URL = /^https:\/\/passport\.aliyun\.com\/iv\/remote\/mini\/request\.htm\?havana_iv_token=.+$/;