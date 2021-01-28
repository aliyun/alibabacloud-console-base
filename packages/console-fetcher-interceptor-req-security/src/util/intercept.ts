import {
  Fetcher
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtendedSecurity
} from '../types';

import createInterceptorRequest from './create-interceptor-request';

export default function intercept(fetcher: Fetcher<IFetcherConfigExtendedSecurity>): () => void {
  return fetcher.interceptRequest(createInterceptorRequest());
}
