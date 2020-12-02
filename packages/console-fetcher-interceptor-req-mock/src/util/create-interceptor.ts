import CONF_ENV from '@alicloud/console-base-conf-env';
import {
  FetcherConfig,
  FetcherFnInterceptRequest
} from '@alicloud/fetcher';

import {
  IMockOptions
} from '../types';

interface IBodyWithProduct {
  product?: string;
}

const REG_ONE_API = /^\/data\/(multi)?(inner)?(api|call)\.json/i;
const MOCK_PREFIX = 'https://mocks.alibaba-inc.com/mock'; // 只能 https

export default function createInterceptor({
  one = {},
  others = []
}: IMockOptions = {}): FetcherFnInterceptRequest {
  return (config: FetcherConfig): Partial<FetcherConfig> | void => {
    // 这个包不应该被打包到应用，而只应该在 demo 中使用，若有**笨蛋🥚**很认真地把它放到项目代码里边...也不要对线上功能产生干扰
    // 同时，如果指定了 urlBase 的...忽略
    if (!CONF_ENV.ENV_IS_DEV || config.urlBase) {
      return;
    }
    
    for (let i = 0; i < others.length; i++) {
      const {
        id,
        check
      } = others[i];
      const checkResult = check(config);
      
      if (checkResult === true) {
        return {
          urlBase: `${MOCK_PREFIX}/${id}`
        };
      }
      
      if (checkResult) {
        return {
          url: checkResult,
          urlBase: `${MOCK_PREFIX}/${id}`
        };
      }
    }
    
    if (REG_ONE_API.test(config.url)) {
      const product = (config.body as IBodyWithProduct)?.product;
      
      return {
        url: `${MOCK_PREFIX}/oneconsole/data/${RegExp.$1 ? 'multiApi' : 'api'}.json`,
        body: {
          product: one[product] || product
        }
      };
    }
  };
}
