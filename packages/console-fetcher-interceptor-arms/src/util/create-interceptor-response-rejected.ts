import {
  FetcherConfig,
  FetcherResponse,
  FetcherError,
  FetcherFnInterceptResponseRejected,
  FetcherUtils
} from '@alicloud/fetcher';

import {
  IInterceptorArmsConfig
} from '../types';

import {
  logError
} from './bl';

export default function createInterceptorResponseRejected(interceptorConfig?: IInterceptorArmsConfig): FetcherFnInterceptResponseRejected<FetcherConfig> {
  return (err: FetcherError, config: FetcherConfig, response?: FetcherResponse): void => {
    if (!interceptorConfig?.shouldIgnore(config, err)) {
      logError({
        api: FetcherUtils.buildUrl(config.url || '', {
          urlBase: config.urlBase
        }),
        code: err.code,
        message: err.message,
        timeStarted: config._timeStarted,
        traceId: response?.headers['Eagleeye-Traceid']
      });
    }
    
    throw err; // 继续错下去
  };
}
