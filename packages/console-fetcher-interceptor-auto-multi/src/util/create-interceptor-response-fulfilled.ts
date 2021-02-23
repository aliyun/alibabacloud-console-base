import {
  FetcherFnInterceptResponseFulfilled
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtendedForResponse
} from '../types';

import mergerResolve from './merger/resolve';

export default function createInterceptorResponseFulfilled(): FetcherFnInterceptResponseFulfilled<IFetcherConfigExtendedForResponse> {
  return (data: unknown, {
    merger
  }: IFetcherConfigExtendedForResponse): unknown => {
    if (merger) {
      mergerResolve(merger.key, data);
    }
    
    return data;
  };
}
