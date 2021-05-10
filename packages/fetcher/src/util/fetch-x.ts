import fetch, {
  FetchOptions
} from '@alicloud/fetcher-fetch';
import jsonp from '@alicloud/fetcher-jsonp';

import {
  IFetcherConfig,
  IFetcherResponse
} from '../types';

import isJsonp from './is-jsonp';
import serializeBody from './serialize-body';
import buildUrl from './build-url';
import canHaveBody from './can-have-body';
import convertResponseFromFetch from './convert-response-from-fetch';
import convertResponseFromJsonp from './convert-response-from-jsonp';

/**
 * 将 fetch 和 jsonp 整合在一起（即当 method 为 'JSONP' 的时候会发送 JSONP 请求）
 */
export default async function fetchX<T = void, C extends IFetcherConfig = IFetcherConfig>(fetcherConfig: C): Promise<IFetcherResponse<T>> {
  const {
    method,
    body,
    charset,
    jsonpCallback,
    jsonpCallbackFunction,
    ...options
  } = fetcherConfig;
  const fetchUrl = buildUrl(fetcherConfig);
  
  if (isJsonp(fetcherConfig)) {
    return jsonp<T>(fetchUrl, {
      timeout: fetcherConfig.timeout,
      charset,
      jsonpCallback,
      jsonpCallbackFunction
    }).then(response => convertResponseFromJsonp<T>(response));
  }
  
  const fetchOptions: FetchOptions = {
    method,
    ...options
  };
  
  /*
   * 调用 fetch 的时候，如果对 GET/HEAD 请求传入 body，哪怕只是一个空字符串，
   * 浏览器直接报错「HEAD or GET Request cannot have a body.」
   * 所以一定要 if
   */
  if (canHaveBody(fetcherConfig) && body) {
    fetchOptions.body = serializeBody(fetcherConfig);
  }
  
  return fetch(fetchUrl, fetchOptions).then(response => convertResponseFromFetch<T>(response, fetcherConfig));
}
