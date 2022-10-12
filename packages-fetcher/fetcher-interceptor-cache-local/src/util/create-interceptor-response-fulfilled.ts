import _cloneDeep from 'lodash/cloneDeep';

import {
  FetcherFnInterceptResponseFulfilled
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtendedForResponse
} from '../types';

import removeMatched from './cache/remove-matched';
import cacheResolve from './cache/resolve';

export default function createInterceptorResponseFulfilled(): FetcherFnInterceptResponseFulfilled<IFetcherConfigExtendedForResponse> {
  return (data: unknown, {
    cacheLocal,
    cacheLocalRemove
  }: IFetcherConfigExtendedForResponse): unknown => {
    if (cacheLocalRemove) {
      removeMatched(cacheLocalRemove);
    }
    
    if (cacheLocal) {
      cacheResolve(cacheLocal.key, data, cacheLocal.ttl);
    }
    
    return _cloneDeep(data); // 避免第一个请求对 data 做了 mutation 而影响到后续的结果
  };
}
