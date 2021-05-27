import {
  FetcherError,
  FetcherFnInterceptResponseRejected
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtendedForResponse
} from '../types';

import cacheReject from './cache/reject';

export default function createInterceptorResponseRejected(): FetcherFnInterceptResponseRejected<IFetcherConfigExtendedForResponse> {
  return (err: FetcherError, {
    cacheLocal
  }: IFetcherConfigExtendedForResponse): void => {
    if (cacheLocal) {
      cacheReject(cacheLocal.key, err);
    }
    
    throw err;
  };
}
