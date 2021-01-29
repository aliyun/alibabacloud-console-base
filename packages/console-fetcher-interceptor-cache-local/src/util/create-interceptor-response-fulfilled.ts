import {
  FetcherFnInterceptResponseFulfilled
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtendedForResponseFulfilled
} from '../types';

import cacheAdd from './cache/add';

export default function createInterceptorResponseFulfilled(): FetcherFnInterceptResponseFulfilled<IFetcherConfigExtendedForResponseFulfilled> {
  return (o: unknown, {
    cacheLocal
  }: IFetcherConfigExtendedForResponseFulfilled): unknown => {
    if (cacheLocal) {
      cacheAdd(cacheLocal, o);
    }
    
    return o;
  };
}
