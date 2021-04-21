import {
  Fetcher
} from '@alicloud/fetcher';

import {
  IMockOptions
} from '../types';

import createInterceptorRequest from './create-interceptor-request';

/**
 * 利用 oneapi.alibaba-inc.com 对接口（OneConsole 和 非 OneConsole 接口）进行，可通过 options 参数进行微调
 */
export default function intercept(fetcher: Fetcher, options?: IMockOptions): () => void {
  fetcher.sealInterceptors(false); // 可能已被锁
  
  const release = fetcher.interceptRequest(createInterceptorRequest(options));
  
  fetcher.sealInterceptors(true);
  
  return release;
}
