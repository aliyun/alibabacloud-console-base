import {
  ERROR_TIMEOUT,
  ERROR_NETWORK,
  ERROR_RESPONSE_STATUS,
  FetcherConfig,
  FetcherFnInterceptResponseRejected
} from '@alicloud/fetcher';

import intl from '../intl';

export default function createInterceptorResponseRejected(): FetcherFnInterceptResponseRejected {
  return (err: Error, fetcherConfig: FetcherConfig): void => {
    // @alicloud/fetcher 给出的错误没有国际化 - 因为 fetcher 是最基础的，不想让它跟 console 环境有关，所以这些错误会在这里做对应的国际化
    switch (err?.name) {
      case ERROR_NETWORK:
        err.message = intl('message:error_network');
        
        break;
      case ERROR_TIMEOUT:
        err.message = intl('message:error_timeout_{n}ms', {
          n: fetcherConfig.timeout
        });
        
        break;
      case ERROR_RESPONSE_STATUS:
        err.message = intl('message:error_response_status');
        
        break;
      default:
        break;
    }
    
    throw err;
  };
}
