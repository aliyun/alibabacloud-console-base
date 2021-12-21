import {
  FetcherConfig,
  Fetcher,
  createFetcher
} from '@alicloud/console-fetcher-basic';
import interceptRisk from '@alicloud/console-fetcher-interceptor-res-risk';

import {
  IConsoleFetcherInterceptorOptions
} from '../types';

export default (config?: FetcherConfig, interceptorOptions: IConsoleFetcherInterceptorOptions = {}, useOldRisk?: boolean): Fetcher => {
  let configBody: FetcherConfig['body'] = config?.body;

  if (typeof config?.body !== 'string') {
    configBody = {
      riskVersion: useOldRisk ? '1.0' : '2.0', // 通过第三个参数来控制是否使用老版本的风控
      ...config?.body
    };
  }

  const fetcher: Fetcher = createFetcher<FetcherConfig>({
    credentials: 'include', // 请求核身服务的接口会跨域
    ...config,
    body: configBody
  }, interceptorOptions);
  
  interceptRisk(fetcher, interceptorOptions.riskConfig);
  
  return fetcher;
};
