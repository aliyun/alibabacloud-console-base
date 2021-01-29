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
    
    // 不需要 cacheLocal，直接跳过，将继续请求
    if (!cacheLocal) {
      return;
    }
    
    const {
      key
    } = cacheLocal;
    const cache = cacheGet(key);
    
    // 第 0 个请求
    if (!cache) {
      cacheAdd(key);
      
      return;
    }
    
    const {
      queue,
      data
    } = cache;
    
    // 有缓存，依次判断
    // 1. 还在请求中
    if (queue) {
      const promise = new Promise((resolve, reject) => queue.push({
        resolve,
        reject
      }));
      
      throw FetcherUtils.createErrorSkipNetwork(promise, fetcherConfig); // 返回 clone 后的数据避免副作用
    }
    //
    // if (!cache) {
    //   return null;
    // }
    //
    // const {
    //   time,
    //   ttl
    // } = cache;
    //
    // if (ttl > 0 && Date.now() - time > ttl) { // 过期
    //   return null;
    // }
    //
    // if (ttl <= 0 && options.ttl > 0) { // 记录是「不过期」的，但新的需要过期，返回 null
    //   return null;
    // }
    
    throw FetcherUtils.createErrorSkipNetwork(_cloneDeep(data), fetcherConfig); // 返回 clone 后的数据避免副作用
  };
}
