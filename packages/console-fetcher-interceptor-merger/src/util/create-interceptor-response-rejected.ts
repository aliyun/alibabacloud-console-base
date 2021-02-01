import {
  FetcherError,
  FetcherFnInterceptResponseRejected
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtendedForResponse
} from '../types';

import mergerReject from './merger/reject';

export default function createInterceptorResponseRejected(): FetcherFnInterceptResponseRejected<IFetcherConfigExtendedForResponse> {
  return (err: FetcherError, {
    merger
  }: IFetcherConfigExtendedForResponse): void => {
    if (merger) {
      mergerReject(merger.key, err);
    }
    
    throw err;
  };
}
