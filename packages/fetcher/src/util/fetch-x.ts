import fetch, {
  FetchOptions
} from '@alicloud/fetcher-fetch';
import jsonp, {
  JsonpOptions
} from '@alicloud/fetcher-jsonp';

import {
  IFetcherConfig,
  IFetcherResponse
} from '../types';

import serializeParams from './serialize-params';
import buildUrl from './build-url';
import canHaveBody from './can-have-body';
import {
  convertResponseFromFetch,
  convertResponseFromJsonp
} from './convert-response';

/**
 * 将 fetch 和 jsonp 整合在一起（即当 method 为 'JSONP' 的时候会发送 JSONP 请求）
 */
export default async function fetchX<T = void, C extends IFetcherConfig = IFetcherConfig>(config: C): Promise<IFetcherResponse<T>> {
  const {
    url = '',
    method: method0 = 'GET',
    urlBase,
    urlCacheBusting = /^(GET|JSONP)$/i.test(method0), // 只有 GET 和 JSONP 请求的默认 urlCacheBusting 为 true
    params,
    body,
    // 默认 URL 参数序列化操作，qs 默认 a[0]=b&a[1]=c&a[2]=d，但我们需要 a=0&a=1&a=2
    paramsSerializeOptions = {
      indices: false
    },
    // 默认简单数组 `a: [1, 2]` 会变成 `a[]=1&a[]=2`，而一般我们需要 `a=1&a=2`，所以默认使用 `arrayFormat: 'repeat'`
    // 但有的时候，复杂对象数组 `arr: [{a: xx, b, c}, ...]` 默认转成 arr[0][a]=xx 需要搞成 `arr[0].a=xx`，这个时候可以传 `{ allowDots: true }` 覆盖默认行为
    bodySerializeOptions = {
      arrayFormat: 'repeat'
    },
    ...options
  } = config;
  const method = method0.toUpperCase() as string; // 转成大写
  const fetchUrl = buildUrl(url, {
    urlBase,
    urlCacheBusting,
    params,
    serializeOptions: paramsSerializeOptions
  });
  
  if (method === 'JSONP') {
    return jsonp<T>(fetchUrl, options as JsonpOptions).then(response => convertResponseFromJsonp<T>(response));
  }
  
  const fetchOptions: FetchOptions = {
    method,
    ...options
  };
  
  // 调用 fetch 的时候，如果对 GET/HEAD 请求传入 body，哪怕只是一个空字符串，
  // 浏览器直接报错「HEAD or GET Request cannot have a body.」
  if (canHaveBody(method) && body) {
    fetchOptions.body = serializeParams(body, bodySerializeOptions);
  }
  
  return fetch(fetchUrl, fetchOptions).then(response => convertResponseFromFetch<T>(response));
}
