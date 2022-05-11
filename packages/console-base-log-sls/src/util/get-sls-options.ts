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
    defaultParams: getSlsDefaultParams
  };
}