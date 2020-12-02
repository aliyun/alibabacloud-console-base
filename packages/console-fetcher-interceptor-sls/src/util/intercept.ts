import {
  Fetcher
} from '@alicloud/fetcher';

import {
  IInterceptorSlsConfig
} from '../types';

import createInterceptor from './create-interceptor';

export default function intercept(fetcher: Fetcher, interceptorConfig: IInterceptorSlsConfig): () => void {
  const interceptorRejected = createInterceptor(interceptorConfig);
  
  return fetcher.interceptResponse(undefined, interceptorRejected);
}
