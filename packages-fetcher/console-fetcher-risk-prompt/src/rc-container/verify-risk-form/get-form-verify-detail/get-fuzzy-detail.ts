import _repeat from 'lodash/repeat';

// 对手机号码做部分信息隐藏
export function getFuzzyPhoneNumber(phoneNumber: string): string {
  const phoneNumberLength = phoneNumber.length;
  
  return `${phoneNumber.substring(0, 3)}${_repeat('*', phoneNumberLength - 7)}${phoneNumber.substring(phoneNumberLength - 4)}`;
}

// 对邮箱名称做部分信息隐藏
export function getFuzzyEmailAddress(emailAddress: string): string {
  const splitArray = emailAddress.split('@');

  // 解析 email，获取 emailName 和 emailDomain
  const emailDomain = splitArray[splitArray.length - 1];
  const emailName = splitArray.slice(0, splitArray.length - 1).join('@');

  // 隐藏 email 的一半字符
  const normalWordsLength = Math.floor(emailName.length / 2);
  const fuzzyEmailName = `${emailName.slice(0, normalWordsLength)}${_repeat('*', emailName.length - normalWordsLength)}`;

  if (emailDomain) {
    return `${fuzzyEmailName}@${emailDomain}`;
  }

  return fuzzyEmailName;
}