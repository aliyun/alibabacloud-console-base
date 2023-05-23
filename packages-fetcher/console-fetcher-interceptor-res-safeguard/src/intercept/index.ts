import {
  Fetcher
} from '@alicloud/fetcher';

import createInterceptorResponseRejected from './create-interceptor-response-rejected';

export default function intercept(fetcher: Fetcher): () => void { // interceptorConfig?: IFetcherInterceptorConfig
  return fetcher.interceptResponse(undefined, createInterceptorResponseRejected()); // interceptorConfig
}
