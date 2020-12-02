import {
  FetcherFnInterceptRequest,
  FetcherUtils
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtendedSecurity
} from '../types';

import defaultGetCollina from './get-collina';
import defaultGetUmid from './get-umid';
import defaultGetSecToken from './get-sec-token';

/**
 * 对有 body 的请求，在 body 中添加阿里云安全必需的参数，这三个参数都可以可以在发送请求的时候覆盖的
 */
export default function createInterceptor(): FetcherFnInterceptRequest<IFetcherConfigExtendedSecurity> {
  return ({
    method,
    getCollina = defaultGetCollina,
    getUmid = defaultGetUmid,
    getSecToken = defaultGetSecToken
  }: IFetcherConfigExtendedSecurity): void | Partial<IFetcherConfigExtendedSecurity> => {
    if (!FetcherUtils.canHaveBody(method)) {
      return;
    }
    
    const body: Record<'sec_token' | 'collina' | 'umid', string> = {
      collina: getCollina(),
      umid: getUmid(),
      sec_token: getSecToken()
    };
    
    return {
      body // body 会被 mix
    };
  };
}

