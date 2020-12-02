import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import createLogger, { chooseStoreByEnv } from '@alicloud/console-logger-sls';
import CONF_PRODUCT_ID from '@alicloud/console-base-conf-product-id';
import getVersions from './util/get-versions';

var _getVersions = getVersions(),
    _getVersions2 = _slicedToArray(_getVersions, 2),
    loaderVersions = _getVersions2[0],
    consoleBaseVersions = _getVersions2[1];

export var SLS_OPTIONS = {
  // export 出去，在 console-base-fetcher 里会用到
  project: 'console-base',
  endpoint: 'log-global.aliyuncs.com',
  logstore: chooseStoreByEnv('prod', {
    dev: 'dev',
    daily: 'daily',
    pre: 'pre'
  }),
  defaultParams: {
    product: CONF_PRODUCT_ID,
    versionOfLoader: loaderVersions.join('~') || 'NONE',
    // 本地的时候可能是 NONE
    versionOfConsoleBase: consoleBaseVersions.join('~') || 'NONE' // 本地的时候可能是 NONE

  }
};
/**
 * console-base 专用 logger
 */

export default createLogger(SLS_OPTIONS);