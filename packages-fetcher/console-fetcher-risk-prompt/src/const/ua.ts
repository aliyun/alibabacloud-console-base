import UA, {
  OsType
} from '@alicloud/ua';

import {
  EClientType
} from '../enum';

const IS_MOBILE = (() => {
  const mobileOsList = [OsType.WINDOWS_PHONE, OsType.WINDOWS_MOBILE, OsType.IOS, OsType.ANDROID];

  return mobileOsList.includes(UA.OS);
})();

const [IS_DINGTALK_PC, DINGTALK_PC_VERSION] = (() => {
  try {
    // 钉钉 PC 端的 userAgent 的格式是 DingTalk(6.3.9-macOS-15321923)
    const match = navigator.userAgent.match(/DingTalk\(([^ /;()]+)\)/i);

    if (match) {
      return [true, match[1] || ''];
    }

    return [false, ''];
  } catch (error) {
    return [false, ''];
  }
})();

const [IS_DINGTALK_MOBILE, DINGTALK_MOBILE_VERSION] = (() => {
  try {
    // 钉钉移动端的 userAgent 的格式是 DingTalk/6.2.1
    const match = navigator.userAgent.match(/DingTalk\/([^ /;()]+)/i);

    if (match) {
      return [true, match[1] || ''];
    }

    return [false, ''];
  } catch (error) {
    return [false, ''];
  }
})();

// 阿里云 APP 的版本
const ALIYUN_APP_VERSION = ((): string => {
  if (/aliyun(?:app)?\/([\d.]+)/i.test(navigator.userAgent)) {
    return RegExp.$1;
  }
   
  return '';
})();

// 打开 identity verification 页面需要携带的 clientType
const CLIENT_TYPE = ((): EClientType => {
  if (ALIYUN_APP_VERSION) {
    return EClientType.APP;
  }

  if (IS_DINGTALK_MOBILE) {
    return EClientType.DINGTALK;
  }

  if (IS_DINGTALK_PC) {
    return EClientType.DINGTALK_PC;
  }

  if (IS_MOBILE) {
    return EClientType.H5;
  }

  return EClientType.PC;
})();

export { IS_MOBILE, IS_DINGTALK_PC, IS_DINGTALK_MOBILE, DINGTALK_PC_VERSION, DINGTALK_MOBILE_VERSION, ALIYUN_APP_VERSION, CLIENT_TYPE };