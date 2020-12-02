import {
  Fetcher,
  FetcherFnInterceptRequest
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtraSecurity as FetcherConfigExtraSecurity,
  IFetcherConfigExtendedSecurity as FetcherConfigExtendedSecurity
} from './types';
import createInterceptor from './util/create-interceptor';

export default function intercept(fetcher: Fetcher<FetcherConfigExtendedSecurity>): () => void {
  const interceptor: FetcherFnInterceptRequest = createInterceptor();
  
  return fetcher.interceptRequest(interceptor);
}

export type {
  FetcherConfigExtraSecurity, // 便于外边扩展（当需要多次扩展的时候）
  FetcherConfigExtendedSecurity // 便于直接使用
};
