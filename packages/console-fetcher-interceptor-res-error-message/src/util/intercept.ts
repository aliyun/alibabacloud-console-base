import {
  Fetcher,
  FetcherFnInterceptResponseRejected
} from '@alicloud/fetcher';

import createInterceptorResponseRejected from './create-interceptor-response-rejected';

export default function intercept(fetcher: Fetcher): () => void {
  const interceptor: FetcherFnInterceptResponseRejected = createInterceptorResponseRejected();
  
  return fetcher.interceptResponse(undefined, interceptor);
}
