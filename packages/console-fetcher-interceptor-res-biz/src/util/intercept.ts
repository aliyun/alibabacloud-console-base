import {
  Fetcher
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtended
} from '../types';

import createInterceptorResponseFulfilled from './create-interceptor-response-fulfilled';

export default function intercept(fetcher: Fetcher<IFetcherConfigExtended>): () => void {
  return fetcher.interceptResponse(createInterceptorResponseFulfilled());
}
