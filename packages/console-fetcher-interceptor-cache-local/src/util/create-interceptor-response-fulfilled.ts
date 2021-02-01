import {
  FetcherFnInterceptResponseFulfilled
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtendedForResponse
} from '../types';

import cacheResolve from './cache/resolve';

export default function createInterceptorResponseFulfilled(): FetcherFnInterceptResponseFulfilled<IFetcherConfigExtendedForResponse> {
  return (data: unknown, {
    cacheLocal
  }: IFetcherConfigExtendedForResponse): unknown => {
    if (cacheLocal) {
      cacheResolve(cacheLocal.key, data, cacheLocal.ttl);
    }
    
    return data;
  };
}
