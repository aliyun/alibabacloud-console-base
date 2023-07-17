import ONE_CONF from '@alicloud/console-one-config';
import {
  FactoryOptions,
  chooseStoreByEnv
} from '@alicloud/console-logger-sls';

import getSlsDefaultParams from './get-sls-default-params';

export default function getSlsOptions(): FactoryOptions {
  return {
    project: 'console-base',
    endpoint: 'log-global.aliyuncs.com',
    logstore: chooseStoreByEnv('prod', {
      dev: 'dev',
      daily: 'daily',
      pre: 'pre'
    }),
    defaultParams: getSlsDefaultParams,
    onBeforeSend: () => !ONE_CONF.PRIVATE_CLOUD // 专有云下不发送
  };
}

export function getSlsOptionsForRam(): FactoryOptions {
  return {
    project: 'aliyun-console-ram',
    endpoint: 'cn-hangzhou.log.aliyuncs.com',
    logstore: chooseStoreByEnv('prod', {
      dev: 'dev',
      daily: 'daily',
      pre: 'pre'
    }),
    defaultParams: getSlsDefaultParams,
    onBeforeSend: () => !ONE_CONF.PRIVATE_CLOUD
  };
}