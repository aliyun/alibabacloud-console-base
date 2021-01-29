import {
  FetcherError,
  FetcherFnInterceptResponseRejected
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtendedForResponseFulfilled
} from '../types';

import cacheReject from './cache/reject';

export default function createInterceptorResponseRejected(): FetcherFnInterceptResponseRejected<IFetcherConfigExtendedForResponseFulfilled> {
  return (err: FetcherError, {
    cacheLocal
  }: IFetcherConfigExtendedForResponseFulfilled): void => {
    if (cacheLocal) {
      cacheReject(cacheLocal.key, err);
    }
    
    throw err;
  };
}
