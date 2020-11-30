import {
  FetcherConfig,
  Fetcher,
  createFetcher
} from '@alicloud/console-fetcher-basic';
import interceptRisk from '@alicloud/console-fetcher-interceptor-res-risk';

import {
  IConsoleFetcherInterceptorOptions
} from '../types';

export default (config?: FetcherConfig, interceptorOptions: IConsoleFetcherInterceptorOptions = {}): Fetcher => {
  const fetcher: Fetcher = createFetcher(config, interceptorOptions);
  
  interceptRisk(fetcher, interceptorOptions.riskConfig);
  
  return fetcher;
};
