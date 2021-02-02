import {
  FetcherConfig,
  FetcherResponse,
  FetcherFnInterceptResponseFulfilled
} from '@alicloud/fetcher';

import {
  IFetcherInterceptorConfig
} from '../types';

import logApi from './bl';

export default function createInterceptorResponseFulfilled(interceptorConfig?: IFetcherInterceptorConfig): FetcherFnInterceptResponseFulfilled<FetcherConfig> {
  return (data: unknown, fetcherConfig: FetcherConfig, response: FetcherResponse): unknown => {
    if (!interceptorConfig?.shouldIgnore(fetcherConfig)) {
      logApi(fetcherConfig, response?.headers['Eagleeye-Traceid']);
    }
    
    return data;
  };
}
