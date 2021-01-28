import {
  FetcherFnInterceptRequest,
  FetcherInterceptRequestReturn,
  FetcherUtils
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtended
} from '../types';

import parseCacheLocalOptions from './parse-cache-local-options';
import getCachedData from './get-cached-data';

export default function createInterceptorRequest(): FetcherFnInterceptRequest<IFetcherConfigExtended> {
  return (fetcherConfig: IFetcherConfigExtended): FetcherInterceptRequestReturn<IFetcherConfigExtended> => {
    const cacheLocal = parseCacheLocalOptions(fetcherConfig);
    
    fetcherConfig.cacheLocal = cacheLocal; // 保证 response 拿到的是对象或 null
    
    // 不需要 cacheLocal 或 需要失效已有的时候，直接跳过，将继续请求
    if (!cacheLocal || cacheLocal.invalidateOld) {
      return;
    }
    
    const cachedResult = getCachedData(cacheLocal);
    
    if (cachedResult) {
      throw FetcherUtils.createErrorSkipNetwork(cachedResult, fetcherConfig);
    }
  };
}
