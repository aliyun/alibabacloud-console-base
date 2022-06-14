import CONF_ENV from '@alicloud/console-base-conf-env';

export default function getTicketType(): string {
  const forService = CONF_ENV.DOMAIN_IS_4SERVICE;

  return forService ? 'mini' : '';
}