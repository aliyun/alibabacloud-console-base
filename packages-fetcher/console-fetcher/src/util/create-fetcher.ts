import {
  FetcherConfig,
  Fetcher,
  createFetcher
} from '@alicloud/console-fetcher-basic';
import interceptRisk from '@alicloud/console-fetcher-interceptor-res-risk';

import {
  TNewRiskOption,
  IConsoleFetcherInterceptorOptions
} from '../types';

export default (config?: FetcherConfig, interceptorOptions: IConsoleFetcherInterceptorOptions = {}, newRiskOption?: TNewRiskOption): Fetcher => {
  let configBody: FetcherConfig['body'] = config?.body;
  const newRisk = ((): boolean => {
    // 这里是为了兼容第三个参数为 boolean 的情况
    if (typeof newRiskOption === 'boolean') {
      return newRiskOption;
    }

    if (newRiskOption && typeof newRiskOption === 'object') {
      return newRiskOption.newRisk;
    }

    return false; // 默认是使用老版本的风控
  })();

  if (newRisk && typeof config?.body !== 'string') {
    configBody = {
      riskVersion: '3.0', // 通过第三个参数来控制是否使用新版本的风控
      ...config?.body
    };
  }

  const fetcher: Fetcher = createFetcher<FetcherConfig>({
    ...config,
    body: configBody
  }, interceptorOptions);
  
  interceptRisk(fetcher, interceptorOptions.riskConfig);
  
  return fetcher;
};
