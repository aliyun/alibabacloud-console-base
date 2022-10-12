import {
  Fetcher,
  FetcherConfig,
  FetcherInterceptorOptions,
  createFetcher as createFetcher0
} from '@alicloud/console-fetcher';

import intercept from './intercept';

export default function createFetcher(config?: FetcherConfig, interceptorOptions?: FetcherInterceptorOptions, useNewRisk?: boolean): Fetcher {
  const fetcher = createFetcher0(config, interceptorOptions, useNewRisk);
  
  intercept(fetcher);
  
  return fetcher;
}
