import _cloneDeep from 'lodash/cloneDeep';

import {
  FetcherFnInterceptRequest,
  FetcherInterceptRequestReturn,
  FetcherUtils
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtended
} from '../types';

import parseOptions from './parse-options';
import cacheAdd from './cache/add';
import cacheGet from './cache/get';

export default function createInterceptorRequest(): FetcherFnInterceptRequest<IFetcherConfigExtended> {
  return (fetcherConfig: IFetcherConfigExtended): FetcherInterceptRequestReturn<IFetcherConfigExtended> => {
    const cacheLocal = parseOptions(fetcherConfig);
    
    fetcherConfig.cacheLocal = cacheLocal; // 保证 response 拿到的 cacheLocal 是对象或 null
    
    // 不需要 cacheLocal，直接跳过，将继续请求
    if (!cacheLocal) {
      return;
    }
    
    const {
      key
    } = cacheLocal;
    const cache = cacheGet(key);
    
    // 第 0 个请求 - 没有缓存，或缓存已过期
    if (!cache || (cache.ttl > 0 && Date.now() - cache.time > cache.ttl)) {
      cacheAdd(key);
      
      return;
    }
    
    const {
      queue,
      data
    } = cache;
    
    // 1. 第 0 个请求还在请求中，则附之
    if (queue) {
      const promise = new Promise((resolve, reject) => queue.push({
        resolve,
        reject
      }));
      
      throw FetcherUtils.createErrorSkipNetwork(promise, fetcherConfig);
    }
    
    // 重新请求的场景，不要和之前的第 0 个请求逻辑合并
    // 1. 指定了是 overwrite
    // 2. 当前的缓存不会过期，但新的请求需要过期
    if (cacheLocal.overwrite || (cache.ttl <= 0 && cacheLocal.ttl > 0)) {
      cacheAdd(key);
      
      return;
    }
    
    // 命中缓存
    throw FetcherUtils.createErrorSkipNetwork(_cloneDeep(data), fetcherConfig); // 返回 clone 后的数据避免副作用
  };
}
