import {
  FetcherConfig,
  FetcherResponse,
  FetcherFnRequest,
  FetcherError,
  FetcherFnInterceptResponseRejected,
  mergeConfig,
  canHaveBody
} from '@alicloud/fetcher';

import {
  IFetcherInterceptorConfig
} from '../types';
import {
  SafeguardErrorCode
} from '../data';
import {
  opSafeguard
} from '../op';

export default function createInterceptorResponseRejected(interceptorConfig?: IFetcherInterceptorConfig): FetcherFnInterceptResponseRejected<FetcherConfig> {
  return async (err: FetcherError, fetcherConfig: FetcherConfig, _response: FetcherResponse | undefined, fetcherRequest: FetcherFnRequest): Promise<any> => { // 
    if (err.code === SafeguardErrorCode.CM || err.code === SafeguardErrorCode.CF) {
      try {
        const extraInfo = await opSafeguard(err, interceptorConfig);
        
        return fetcherRequest<unknown>(mergeConfig(fetcherConfig, canHaveBody(fetcherConfig) ? {
          body: {
            ...extraInfo
          }
        } : {
          params: {
            ...extraInfo
          }
        }));
      } catch (_err) {
        // TODO throw User dismiss
        
        throw new Error();
      }
    }
    
    throw err; // 继续错下去
  };
}
