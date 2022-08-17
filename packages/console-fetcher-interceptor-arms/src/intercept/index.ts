import {
  Fetcher
} from '@alicloud/fetcher';

import {
  IFetcherInterceptorConfig
} from '../types';

import createInterceptorResponseFulfilled from './create-interceptor-response-fulfilled';
import createInterceptorResponseRejected from './create-interceptor-response-rejected';

/**
 * 为 fetcher 增加 arms 埋点
 */
export default function intercept(fetcher: Fetcher, interceptorConfig?: IFetcherInterceptorConfig): () => void {
  return fetcher.interceptResponse(createInterceptorResponseFulfilled(interceptorConfig), createInterceptorResponseRejected(interceptorConfig));
}
