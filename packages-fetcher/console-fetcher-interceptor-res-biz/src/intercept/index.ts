import {
  Fetcher
} from '@alicloud/fetcher';

import createInterceptorResponseFulfilled from './create-interceptor-response-fulfilled';

export default function intercept(fetcher: Fetcher): () => void {
  return fetcher.interceptResponse(createInterceptorResponseFulfilled());
}
