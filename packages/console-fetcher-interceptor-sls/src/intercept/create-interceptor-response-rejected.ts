import {
  FetcherError,
  FetcherConfig,
  FetcherResponse,
  FetcherFnInterceptResponseRejected
} from '@alicloud/fetcher';
import createLogger, {
  chooseStoreByEnv
} from '@alicloud/console-logger-sls';

import {
  IFetcherInterceptorConfig,
  ISlsInfo
} from '../types';
import {
  removeSecParamsFromBody,
  shouldIgnoreError
} from '../util';

interface IResponseData {
  requestId?: string;
}

export default function createInterceptorResponseRejected({
  topicError = 'api_error',
  logstoreDev,
  logstoreDaily,
  logstorePre,
  shouldIgnore,
  ...slsOptions
}: IFetcherInterceptorConfig): FetcherFnInterceptResponseRejected {
  slsOptions.logstore = chooseStoreByEnv(slsOptions.logstore, {
    dev: logstoreDev,
    daily: logstoreDaily,
    pre: logstorePre
  });
  
  const sls = createLogger(slsOptions);
  
  return (err: FetcherError | undefined, fetcherConfig: FetcherConfig, response?: FetcherResponse<IResponseData | null>): void => {
    if (!err || shouldIgnoreError(err, shouldIgnore)) {
      throw err;
    }
    
    const slsParams: ISlsInfo = {
      fetcherMethod: fetcherConfig.method,
      fetcherUrl: fetcherConfig.url,
      fetcherUrlBase: fetcherConfig.urlBase,
      fetcherParams: fetcherConfig.params,
      fetcherBody: removeSecParamsFromBody(fetcherConfig.body),
      errorName: err.name || '__no_name__',
      errorCode: err.code || '__no_code__',
      errorMessage: err.message || '__no_message__',
      requestId: response?.data?.requestId,
      eagleEyeTraceId: response?.headers['Eagleeye-Traceid']
    };
    
    sls.error<ISlsInfo>(topicError, slsParams, {
      delay: 2000 // 延时 2s
    });
    
    throw err;
  };
}
