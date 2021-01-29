import {
  FetcherError,
  FetcherFnInterceptResponseRejected
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtendedForResponseFulfilled
} from '../types';

import cacheRemove from './cache/remove';

export default function createInterceptorResponseRejected(): FetcherFnInterceptResponseRejected<IFetcherConfigExtendedForResponseFulfilled> {
  return (err: FetcherError, fetcherConfig: IFetcherConfigExtendedForResponseFulfilled): void => {
    cacheRemove(fetcherConfig.cacheLocal);
    
    throw err;
  };
}
