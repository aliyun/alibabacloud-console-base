import {
  Fetcher
} from '@alicloud/fetcher';

import createInterceptorRequest from './create-interceptor-request';
import createInterceptorResponseFulfilled from './create-interceptor-response-fulfilled';
import createInterceptorResponseRejected from './create-interceptor-response-rejected';

export default function intercept(fetcher: Fetcher): () => void {
  const release1 = fetcher.interceptRequest(createInterceptorRequest());
  const release2 = fetcher.interceptResponse(createInterceptorResponseFulfilled(), createInterceptorResponseRejected());
  
  return () => {
    release1();
    release2();
  };
}
