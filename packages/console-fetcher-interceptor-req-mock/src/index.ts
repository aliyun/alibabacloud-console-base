import {
  Fetcher,
  FetcherFnInterceptRequest
} from '@alicloud/fetcher';

import {
  IMockOptions
} from './types';
import createInterceptor from './util/create-interceptor';

/**
 * 利用 mocks.alibaba-inc.com 对接口（OneConsole 和 非 OneConsole 接口）进行，可通过 options 参数进行微调
 */
export default function intercept(fetcher: Fetcher, options?: IMockOptions): () => void {
  const interceptorReq: FetcherFnInterceptRequest = createInterceptor(options);
  
  fetcher.sealInterceptors(false); // 可能已被锁
  
  const release = fetcher.interceptRequest(interceptorReq);
  
  fetcher.sealInterceptors(true);
  
  return release;
}
