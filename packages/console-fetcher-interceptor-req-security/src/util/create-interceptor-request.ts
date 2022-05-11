import {
  FetcherFnInterceptRequest,
  FetcherInterceptRequestReturn,
  canHaveBody
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtended
} from '../types';

import defaultGetCollina from './get-collina';
import defaultGetUmid from './get-umid';
import defaultGetSecToken from './get-sec-token';

/**
 * 对有 body 的请求，在 body 中添加阿里云安全必需的参数，这三个参数都可以可以在发送请求的时候覆盖的
 */
export default function createInterceptorRequest(): FetcherFnInterceptRequest<IFetcherConfigExtended> {
  return (fetcherConfig: IFetcherConfigExtended): FetcherInterceptRequestReturn<IFetcherConfigExtended> => {
    if (!canHaveBody(fetcherConfig)) {
      return;
    }
    
    const {
      getCollina = defaultGetCollina,
      getUmid = defaultGetUmid,
      getSecToken = defaultGetSecToken
    } = fetcherConfig;
    
    return {
      body: {
        collina: getCollina(),
        umid: getUmid(),
        sec_token: getSecToken()
      }
    };
  };
}
