import {
  Fetcher
} from '@alicloud/fetcher';

import {
  IInterceptorSlsConfig
} from '../types';

import createInterceptorResponseRejected from './create-interceptor-response-rejected';

export default function intercept(fetcher: Fetcher, interceptorConfig: IInterceptorSlsConfig): () => void {
  return fetcher.interceptResponse(undefined, createInterceptorResponseRejected(interceptorConfig));
}
