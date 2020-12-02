import {
  Fetcher,
  FetcherFnInterceptResponseRejected
} from '@alicloud/fetcher';

import createInterceptor from './util/create-interceptor';

export default function intercept(fetcher: Fetcher): () => void {
  const interceptor: FetcherFnInterceptResponseRejected = createInterceptor();
  
  return fetcher.interceptResponse(undefined, interceptor);
}
