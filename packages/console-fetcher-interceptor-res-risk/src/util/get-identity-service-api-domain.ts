import CONF_ENV from '@alicloud/console-base-conf-env';

export default function getIdentityServiceApiDomain(): string {
  if (CONF_ENV.ENV_IS_DAILY) {
    return 'identity.aliyun.test';
  }

  if (CONF_ENV.ENV_IS_PRE) {
    return 'pre-identity.aliyun.com';
  }

  return 'identity.aliyun.com'; // 默认返回线上的域名
}