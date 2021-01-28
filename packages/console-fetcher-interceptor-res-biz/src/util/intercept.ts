import {
  Fetcher
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtendedBiz
} from '../types';

import createInterceptorResponseFulfilled from './create-interceptor-response-fulfilled';

export default function intercept(fetcher: Fetcher<IFetcherConfigExtendedBiz>): () => void {
  return fetcher.interceptResponse(createInterceptorResponseFulfilled());
}
