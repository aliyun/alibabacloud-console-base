import {
  Fetcher,
  FetcherConfig,
  FetcherInterceptorOptions,
  createFetcher
} from '@alicloud/console-fetcher';

import interceptFetcherWithProxy from './intercept-fetcher-with-proxy';

export default (config?: FetcherConfig, interceptorOptions?: FetcherInterceptorOptions): Fetcher => {
  const fetcher = createFetcher(config, interceptorOptions);
  
  interceptFetcherWithProxy(fetcher);
  
  return fetcher;
};
