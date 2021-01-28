import {
  FetcherConfig,
  FetcherResponse,
  FetcherError,
  FetcherFnInterceptResponseRejected,
  FetcherUtils
} from '@alicloud/fetcher';

import {
  IFetcherInterceptorConfig
} from '../types';

import {
  logError
} from './bl';

export default function createInterceptorResponseRejected(interceptorConfig?: IFetcherInterceptorConfig): FetcherFnInterceptResponseRejected<FetcherConfig> {
  return (err: FetcherError, fetcherConfig: FetcherConfig, response?: FetcherResponse): void => {
    if (!interceptorConfig?.shouldIgnore(fetcherConfig, err)) {
      logError({
        api: FetcherUtils.buildUrl(fetcherConfig.url || '', {
          urlBase: fetcherConfig.urlBase
        }),
        code: err.code,
        message: err.message,
        timeStarted: fetcherConfig._timeStarted,
        traceId: response?.headers['Eagleeye-Traceid']
      });
    }
    
    throw err; // 继续错下去
  };
}
