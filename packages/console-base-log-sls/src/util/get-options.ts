import {
  FactoryOptions,
  chooseStoreByEnv
} from '@alicloud/console-logger-sls';
import CONF_PRODUCT_ID from '@alicloud/console-base-conf-product-id';

import getVersions from './get-versions';

const [loaderVersions, consoleBaseVersions] = getVersions();

export default function getOptions(): FactoryOptions {
  return {
    project: 'console-base',
    endpoint: 'log-global.aliyuncs.com',
    logstore: chooseStoreByEnv('prod', {
      dev: 'dev',
      daily: 'daily',
      pre: 'pre'
    }),
    defaultParams: {
      product: CONF_PRODUCT_ID,
      versionOfLoader: loaderVersions.join('~') || 'NONE', // 本地的时候可能是 NONE
      versionOfConsoleBase: consoleBaseVersions.join('~') || 'NONE' // 本地的时候可能是 NONE
    }
  };
}