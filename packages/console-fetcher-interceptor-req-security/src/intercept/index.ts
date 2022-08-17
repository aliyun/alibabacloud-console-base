import {
  Fetcher
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtended
} from '../types';

import createInterceptorRequest from './create-interceptor-request';

export default function intercept(fetcher: Fetcher<IFetcherConfigExtended>): () => void {
  return fetcher.interceptRequest(createInterceptorRequest());
}
