import CONF_ENV from '@alicloud/console-base-conf-env';
import CONF_ACCOUNT from '@alicloud/console-base-conf-account';
import CONF_LOCALE from '@alicloud/console-base-conf-locale';
import {
  FactoryOptions,
  createLoggerFactory
} from '@alicloud/logger-sls';

// 所有可能的 CHANNEL 可以在 SLS 上通过 `* | SELECT DISTINCT channel` 查到
const INTL_CHANNELS = [
  'INTL',
  'SIN',
  'JP'
];

export default createLoggerFactory({
  channel: CONF_ENV.CHANNEL,
  locale: CONF_LOCALE.LOCALE,
  uid: CONF_ACCOUNT.ID,
  uidMain: CONF_ACCOUNT.ID_MAIN
}, ({
  endpoint
}: FactoryOptions): boolean | void => {
  // 不要把国外的日志提交到国内
  if (/^cn-/.test(endpoint) && INTL_CHANNELS.indexOf(CONF_ENV.CHANNEL) >= 0) {
    return false;
  }
});
