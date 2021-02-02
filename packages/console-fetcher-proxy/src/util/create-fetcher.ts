import {
  Fetcher,
  FetcherConfig,
  FetcherInterceptorOptions,
  createFetcher as createFetcher0
} from '@alicloud/console-fetcher';

import intercept from './intercept';

export default function createFetcher(config?: FetcherConfig, interceptorOptions?: FetcherInterceptorOptions): Fetcher {
  const fetcher = createFetcher0(config, interceptorOptions);
  
  intercept(fetcher);
  
  return fetcher;
}
