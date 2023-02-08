/**
 * 一些需要特殊处理的错误码，并非后端定义的错误码，需在 data 层将后端错误码标准成这些
 */
export enum EDialogueErrorCode {
  // 初始化的错误
  UNAVAILABLE_FOR_PRODUCT = 'UnavailableForProduct', // 当前产品不可用
  UNAVAILABLE_FOR_ACCOUNT_ROLE = 'UnavailableForAccountRole', // 对 RAM 角色账号（STS）不可用
  ACCOUNT_PROFILE_INCOMPLETE = 'AccountProfileIncomplete', // 用户资料缺失，需要绑定手机号
  // 开始对话和轮询对话的错误
  NON_SERVICE_TIME = 'NonServiceTime'
}