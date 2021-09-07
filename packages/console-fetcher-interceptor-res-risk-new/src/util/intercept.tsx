import {
  Fetcher
} from '@alicloud/fetcher';

import {
  IFetcherInterceptorConfig
} from '../types';

import createInterceptorResponseRejected from './create-interceptor-response-rejected';

export default function intercept(fetcher: Fetcher, config?: IFetcherInterceptorConfig): () => void {
  return fetcher.interceptResponse(undefined, createInterceptorResponseRejected(config));
}