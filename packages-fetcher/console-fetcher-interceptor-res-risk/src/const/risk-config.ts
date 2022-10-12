import CONF_ENV from '@alicloud/console-base-conf-env';

import {
  IFetcherInterceptorConfig
} from '../types';

const identityServiceApiDomain = ((): string => {
  if (CONF_ENV.ENV_IS_DAILY) {
    return 'identity.aliyun.test';
  }

  if (CONF_ENV.ENV_IS_PRE) {
    return 'pre-identity.aliyun.com';
  }

  return 'identity.aliyun.com'; // 默认返回线上的域名
})();

export const TICKET_TYPE = ((): string => {
  const forService = CONF_ENV.DOMAIN_IS_4SERVICE;

  return forService ? 'mini' : '';
})();

/**
 * 风控设置
 */
export const DEFAULT_RISK_CONFIG: Required<IFetcherInterceptorConfig> = {
  // 从错误 data 中获取对应信息
  DATA_PATH_VERIFY_TYPE: 'data.verifyType',
  DATA_PATH_VERIFY_DETAIL: 'data.verifyDetail',
  DATA_PATH_VERIFY_CODE_TYPE: 'data.codeType',
  DATA_PATH_VALIDATORS: 'data.Validators.Validator',
  DATA_PATH_USER_ID: 'data.AliyunIdkp',
  DATA_PATH_NEW_VERIFY_CODE_TYPE: 'data.CodeType',
  DATA_PATH_ACCOUNT_TYPE: 'data.AccountType',
  DATA_PATH_VERIFY_URL: 'data.VerifyURL',
  DATA_PATH_NEW_EXTEND: 'data.Extend',
  DATA_PATH_NEW_VERIFY_TYPE: 'data.VerifyType',
  DATA_PATH_NEW_VERIFY_DETAIL: 'data.VerifyDetail',
  CONFIG_PATH_RISK_VERSION: 'body.riskVersion',
  // 风控错误码
  CODE_NEED_VERIFY: 'FoundRiskAndDoubleConfirm',
  CODE_FORBIDDEN: 'FoundRiskAndTip',
  CODE_INVALID_INPUT: 'verifyCodeInvalid', // 愚蠢 干啥这个就小写了...
  // 旧版主账号风控 & 新版子账号风控的类型，通过 DATA_PATH_VERIFY_TYPE 从初始 response.data 中得到的值
  BY_SMS: 'sms',
  BY_EMAIL: 'email',
  BY_MFA: 'ga',
  // 旧版主账号风控接口 URL
  URL_SEND_CODE: '/risk/sendVerifyMessage.json',
  URL_SETTINGS: '//account.console.aliyun.com/#/secure',
  // 新版子账号风控 URL
  URL_VERIFY: `//${identityServiceApiDomain}/identity/verify`,
  URL_MFA_BIND: `//${identityServiceApiDomain}/identity/bindMFA`,
  URL_GET_MFA_INFO_TO_BIND: `//${identityServiceApiDomain}/identity/getMfaInfoToBind`,
  URL_GET_MFA_INFO_TO_AUTH: `//${identityServiceApiDomain}/identity/getMfaInfoToAuth`,
  URL_SKIP_BIND_MFA: `//${identityServiceApiDomain}/identity/skip`,
  URL_SUB_OR_MPK_SEND_CODE: `//${identityServiceApiDomain}/identity/send`,
  // 旧版主账号风控冷却/超时时间设置 (单位：秒)
  COOLING_AFTER_SENT: 60,
  COOLING_AFTER_SEND_FAIL: 10,
  // U2F 超时时间（单位：毫秒）
  U2F_TIMEOUT: 180000,
  // 其他
  REQUEST_METHOD: 'POST'
};