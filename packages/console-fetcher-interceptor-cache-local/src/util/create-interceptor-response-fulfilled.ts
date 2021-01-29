import {
  FetcherFnInterceptResponseFulfilled
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtendedForResponseFulfilled
} from '../types';

import cacheResolve from './cache/resolve';

export default function createInterceptorResponseFulfilled(): FetcherFnInterceptResponseFulfilled<IFetcherConfigExtendedForResponseFulfilled> {
  return (data: unknown, {
    cacheLocal
  }: IFetcherConfigExtendedForResponseFulfilled): unknown => {
    if (cacheLocal) {
      cacheResolve(cacheLocal.key, data, cacheLocal.ttl);
    }
    
    return data;
  };
}
