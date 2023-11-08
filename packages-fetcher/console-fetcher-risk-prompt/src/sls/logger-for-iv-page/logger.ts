import createLogger from '@alicloud/console-logger-sls';
import {
  SLS_OPTIONS
} from '@alicloud/console-base-log-sls';
import CONF_ENV from '@alicloud/console-base-conf-env';

// 3.0 的埋点，统一上报至 identity-verification 
const logger = createLogger({
  project: 'identity-verification',
  endpoint: 'cn-shanghai.log.aliyuncs.com',
  logstore: ((): string => {
    if (CONF_ENV.ENV_IS_DEV || CONF_ENV.ENV_IS_DAILY) {
      return 'daily';
    }

    if (CONF_ENV.ENV_IS_PRE) {
      return 'pre';
    }

    return 'prod';
  })(),
  // 通用风控参数
  defaultParams: SLS_OPTIONS.defaultParams,
  onBeforeSend: SLS_OPTIONS.onBeforeSend
});

export default logger;