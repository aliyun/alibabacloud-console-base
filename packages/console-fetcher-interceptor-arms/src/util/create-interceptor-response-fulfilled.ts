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
  return (data: unknown, config: FetcherConfig, response: FetcherResponse): unknown => {
    if (interceptorConfig?.shouldIgnore(config)) {
      logSuccess({
        api: FetcherUtils.buildUrl(config.url || '', {
          urlBase: config.urlBase
        }),
        timeStarted: config._timeStarted,
        traceId: response?.headers['Eagleeye-Traceid']
      });
    }
    
    return data;
  };
}
