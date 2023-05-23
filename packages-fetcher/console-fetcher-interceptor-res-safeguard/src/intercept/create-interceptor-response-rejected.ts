import {
  FetcherConfig,
  // FetcherResponse,
  FetcherError,
  FetcherFnInterceptResponseRejected
} from '@alicloud/fetcher';

import {
  IFetcherInterceptorConfig
} from '../types';
import {
  ERROR_CODE_CM_REQUIRED,
  ERROR_CODE_CF_REQUIRED
} from '../const';
import {
  opSafeguard
} from '../op';

export default function createInterceptorResponseRejected(interceptorConfig?: IFetcherInterceptorConfig): FetcherFnInterceptResponseRejected<FetcherConfig> {
  return (err: FetcherError): Promise<any> | never => { // fetcherConfig: FetcherConfig, response?: FetcherResponse
    if (err.code === ERROR_CODE_CM_REQUIRED || err.code === ERROR_CODE_CF_REQUIRED) {
      return opSafeguard(err, interceptorConfig);
    }
    
    throw err; // 继续错下去
  };
}
