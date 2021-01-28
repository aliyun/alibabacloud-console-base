import {
  FetcherConfig,
  FetcherResponse,
  FetcherFnInterceptResponseFulfilled,
  FetcherUtils
} from '@alicloud/fetcher';

import {
  IFetcherInterceptorConfig
} from '../types';

import {
  logSuccess
} from './bl';

export default function createInterceptorResponseSuccess(interceptorConfig?: IFetcherInterceptorConfig): FetcherFnInterceptResponseFulfilled<FetcherConfig> {
  return (data: unknown, fetcherConfig: FetcherConfig, response: FetcherResponse): unknown => {
    if (interceptorConfig?.shouldIgnore(fetcherConfig)) {
      logSuccess({
        api: FetcherUtils.buildUrl(fetcherConfig.url || '', {
          urlBase: fetcherConfig.urlBase
        }),
        timeStarted: fetcherConfig._timeStarted,
        traceId: response?.headers['Eagleeye-Traceid']
      });
    }
    
    return data;
  };
}
