import {
  FetcherFnInterceptResponseFulfilled
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtendedForResponseFulfilled
} from '../types';

import putCache from './put-cache';

export default function createInterceptorResponseFulfilled(): FetcherFnInterceptResponseFulfilled<IFetcherConfigExtendedForResponseFulfilled> {
  return (o: unknown, {
    cacheLocal
  }: IFetcherConfigExtendedForResponseFulfilled): unknown => {
    if (cacheLocal) {
      putCache(cacheLocal.key, o, cacheLocal.ttl);
    }
    
    return o;
  };
}
