import ENV from '@alicloud/console-base-conf-env';

/**
 * 
 * @param accountId 子账号 ID
 * @returns RAM 详情页地址。用于设置 RAM 用户安全手机/邮箱
 */
export default function getSubVerificationSettingUrl(accountId: string): string {
  if (!accountId) {
    return '';
  }

  const subDomainName = ((): string => {
    if (ENV.DOMAIN_IS_4SERVICE) {
      return 'ram4service';
    }

    if (ENV.ENV_IS_PRE) {
      return 'pre-ram';
    }

    return 'ram';
  })();

  const topLevelDomain = ENV.ENV_IS_DAILY ? 'test' : 'com';

  return `https://${subDomainName}.console.aliyun.${topLevelDomain}/users/detail?userId=${accountId}`;
}