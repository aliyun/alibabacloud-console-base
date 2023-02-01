/**
 * 一些需要特殊处理的错误码（需在 data 层标准化）
 */
export enum EDialogueErrorCode {
  UNAVAILABLE_FOR_PRODUCT = 'UnavailableForProduct', // 当前产品不可用
  UNAVAILABLE_FOR_ACCOUNT_ROLE = 'UnavailableForAccountRole', // 对 RAM 角色账号（STS）不可用
  ACCOUNT_PROFILE_INCOMPLETE = 'AccountProfileIncomplete' // 用户资料缺失，需要绑定手机号
}