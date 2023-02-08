import {
  getWindow
} from '@alicloud/sandbox-escape';
import ONE_CONF from '@alicloud/console-one-config';
import CONF_ENV from '@alicloud/console-base-conf-env';
import {
  FetcherConfig,
  FetcherFnInterceptRequest,
  FetcherInterceptRequestReturn,
  canHaveBody
} from '@alicloud/fetcher';

import {
  isFecs,
  isRelativeOneApi,
  cookieGetToken
} from '../util';

// FECS 仅支持 .aliyun.com 或其对应日常
const FECS_COMPATIBLE: boolean = (() => {
  const arr1 = getWindow().location.hostname.split('.');
  const arr2 = CONF_ENV.FECS_HOST.split('.');
  
  return arr1[arr1.length - 2] === arr2[arr2.length - 2] && arr1[arr1.length - 1] === arr2[arr2.length - 1];
})();

/**
 * 此拦截器做了两个事情：
 * 
 * 1. 对于处理去往 FECS 的接口，为 POST 添加 FECS 专属的 sec_token
 * 2. 对于 OneConsole 封装的 open/inner/container 系列 API，在非 OneConsole 下自动走 FECS
 */
function interceptRequest(fetcherConfig: FetcherConfig): FetcherInterceptRequestReturn<FetcherConfig> {
  if (!canHaveBody(fetcherConfig)) {
    return;
  }
  
  // 走 FECS，填充 FECS 特有的 sec_token
  if (isFecs(fetcherConfig)) {
    return {
      body: {
        sec_token: cookieGetToken()
      }
    };
  }
  
  // 不走 FECS 的当前域名下的 OneConsole API，需要判断当前是不是 OneConsole
  if (isRelativeOneApi(fetcherConfig)) {
    if (ONE_CONF.ONE || !FECS_COMPATIBLE) { // 是 OneConsole，或非 FECS 兼容的域名，则不需要处理什么
      return;
    }
    
    // 强走 FECS
    return {
      urlBase: CONF_ENV.FECS_URL_BASE,
      body: {
        sec_token: cookieGetToken()
      }
    };
  }
}

export default function createInterceptorRequest(): FetcherFnInterceptRequest {
  return interceptRequest;
}
