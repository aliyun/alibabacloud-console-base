import {
  IFetcherResponse, IFetcherConfig
} from '../types';
import {
  ERROR_RESPONSE_STATUS,
  ERROR_RESPONSE_PARSE
} from '../const';

import normalizeHeaderKey from './normalize-header-key';
import createFetcherError from './error/create';

export default async function convertResponseFromFetch<T = void, C extends IFetcherConfig = IFetcherConfig>(response: Response, fetcherConfig: C): Promise<IFetcherResponse<T>> {
  const headers: Record<string, string> = {};
  
  if (typeof response.headers?.forEach === 'function') {
    response.headers.forEach((v, k) => {
      headers[normalizeHeaderKey(k)] = v;
    });
  }
  
  if (!response.ok) { // 如 400 500 系列错误，此时也可能有 response.json()
    let responseData: unknown | undefined;
    
    try {
      responseData = await response.json();
    } catch (err) {
      // ignore
    }
    
    throw createFetcherError(fetcherConfig, ERROR_RESPONSE_STATUS, `response status ${response.status}`, {
      code: `${response.status}`,
      responseData
    });
  }
  
  try { // TODO 可能要一个非 JSON 的设置
    return {
      url: response.url,
      headers,
      data: await response.json() as T
    };
  } catch (err) { // 如果后端返回的不是 JSON，这里会报错「JSON.parse: unexpected character at line 1 column 1 of the JSON data」
    throw createFetcherError(fetcherConfig, ERROR_RESPONSE_PARSE, (err as Error)?.message);
  }
}
