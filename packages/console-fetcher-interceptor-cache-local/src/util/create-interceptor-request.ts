import _cloneDeep from 'lodash/cloneDeep';

import {
  FetcherFnInterceptRequest,
  FetcherInterceptRequestReturn,
  FetcherUtils
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtended
} from '../types';

import parseCacheLocalOptions from './parse-cache-local-options';
import cacheAdd from './cache/add';
import cacheGet from './cache/get';

export default function createInterceptorRequest(): FetcherFnInterceptRequest<IFetcherConfigExtended> {
  return (fetcherConfig: IFetcherConfigExtended): FetcherInterceptRequestReturn<IFetcherConfigExtended> => {
    const cacheLocal = parseCacheLocalOptions(fetcherConfig);
    
    fetcherConfig.cacheLocal = cacheLocal; // 保证 response 拿到的是对象或 null
    
    // 不需要 cacheLocal 或 需要失效已有的时候，直接跳过，将继续请求
    if (!cacheLocal || cacheLocal.overwrite) {
      return;
    }
    
    const cache = cacheGet(cacheLocal);
    
    if (cache) {
      throw FetcherUtils.createErrorSkipNetwork(_cloneDeep(cache.data), fetcherConfig); // 返回 clone 后的数据避免副作用
    }
    
    cacheAdd(cacheLocal, null);
  };
}
