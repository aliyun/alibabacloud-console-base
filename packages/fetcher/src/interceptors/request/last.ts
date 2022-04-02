import {
  IFetcherConfig
} from '../../types';
import {
  isCors,
  isJsonp,
  canHaveBody
} from '../../util';

/**
 * request 最后一个拦截器，写入 _timeStarted，如果不是 JSONP，对 headers 和 credentials 做补充
 */
export default function requestInterceptorLast(fetcherConfig: IFetcherConfig): Partial<IFetcherConfig> {
  const c: Partial<IFetcherConfig> = {
    _timeStarted: Date.now()
  };
  
  if (isJsonp(fetcherConfig)) {
    return c;
  }
  
  const headers = fetcherConfig.headers || {};
  
  if (!headers['Content-Type'] && canHaveBody(fetcherConfig)) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }
  
  c.headers = headers;
  c.credentials = fetcherConfig.credentials || (isCors(fetcherConfig) ? 'include' : 'same-origin'); // MUST
  
  return c;
}
