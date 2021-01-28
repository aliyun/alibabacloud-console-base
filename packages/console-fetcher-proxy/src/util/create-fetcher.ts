import {
  Fetcher,
  FetcherConfig,
  FetcherInterceptorOptions,
  createFetcher
} from '@alicloud/console-fetcher';

import intercept from './intercept';

export default (config?: FetcherConfig, interceptorOptions?: FetcherInterceptorOptions): Fetcher => {
  const fetcher = createFetcher(config, interceptorOptions);
  
  intercept(fetcher);
  
  return fetcher;
};
