import {
  FetcherConfig,
  FetcherResponse,
  FetcherError,
  FetcherFnInterceptResponseRejected
} from '@alicloud/fetcher';

import {
  IFetcherInterceptorConfig
} from '../types';

import logApi from './log-api';

export default function createInterceptorResponseRejected(interceptorConfig?: IFetcherInterceptorConfig): FetcherFnInterceptResponseRejected<FetcherConfig> {
  return (err: FetcherError, fetcherConfig: FetcherConfig, response?: FetcherResponse): void => {
    if (!interceptorConfig?.shouldIgnore || !interceptorConfig.shouldIgnore(fetcherConfig, err)) {
      logApi(fetcherConfig, response?.headers['Eagleeye-Traceid'], false, err.code, err.message);
    }
    
    throw err; // 继续错下去
  };
}
