import {
  Fetcher,
  FetcherError,
  FetcherConfig,
  FetcherResponse
} from '@alicloud/fetcher';
import createLogger from '@alicloud/console-logger-sls';

import {
  IFetcherInterceptorConfig,
  IFetcherResponseData
} from '../types';
import {
  TOPIC_SUCCESS,
  TOPIC_ERROR
} from '../const';
import {
  buildSlsInfo
} from '../util';

export default function intercept(fetcher: Fetcher, {
  slsOptions,
  topicSuccess = TOPIC_SUCCESS,
  topicError = TOPIC_ERROR
}: IFetcherInterceptorConfig): () => void {
  const sls = slsOptions ? createLogger(slsOptions) : undefined;
  
  return fetcher.interceptResponse(sls ? (data: unknown, fetcherConfig: FetcherConfig, response: FetcherResponse<IFetcherResponseData>): unknown => {
    sls(topicSuccess, buildSlsInfo(undefined, fetcherConfig, response), {
      delay: 2000 // 延时 2s
    });
    
    return data;
  } : undefined, sls ? (err: FetcherError | undefined, fetcherConfig: FetcherConfig, response?: FetcherResponse<IFetcherResponseData>): void => {
    sls.error(topicError, buildSlsInfo(err, fetcherConfig, response), {
      delay: 2000 // 延时 2s
    });
    
    throw err;
  } : undefined);
}
