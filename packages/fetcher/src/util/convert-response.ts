import {
  JsonpResponse
} from '@alicloud/fetcher-jsonp';

import {
  IFetcherResponse
} from '../types';
import {
  ERROR_RESPONSE_STATUS,
  ERROR_RESPONSE_PARSE
} from '../const';

import normalizeHeaderKey from './normalize-header-key';

/**
 * 普通 error
 */
function createError(name: string, message: string): Error {
  const error = new Error(message);
  
  error.name = name;
  
  return error;
}

export async function convertResponseFromFetch<T = void>(response: Response): Promise<IFetcherResponse<T>> {
  const headers: Record<string, string> = {};
  
  if (typeof response.headers?.forEach === 'function') {
    response.headers.forEach((v, k) => {
      headers[normalizeHeaderKey(k)] = v;
    });
  }
  
  if (!response.ok) { // 如 400 500 系列错误
    throw createError(ERROR_RESPONSE_STATUS, `response status ${response.status}`);
  }
  
  try { // TODO 可能要一个非 JSON 的设置
    return {
      url: response.url,
      headers,
      data: await response.json() as T
    };
  } catch (err) { // 如果后端返回的不是 JSON，这里会报错「JSON.parse: unexpected character at line 1 column 1 of the JSON data」
    throw createError(ERROR_RESPONSE_PARSE, err?.message);
  }
}

/**
 * 将 JSONP 的返回转成通用的 FetcherResponse
 * 
 * 由于 JSONP 的实现原理，它没有 headers，且一定是成功的（因为如果失败或返回无效的话是无法走到回调的）
 */
export async function convertResponseFromJsonp<T>(response: JsonpResponse<T>): Promise<IFetcherResponse<T>> {
  return {
    url: response.url,
    headers: {},
    data: await response.json()
  };
}
