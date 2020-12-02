import _forEach from 'lodash/forEach';

import normalizeHeaderKey from './normalize-header-key';

/**
 * 关于 Headers 参考 https://developer.mozilla.org/en-US/docs/Web/API/Headers
 * 
 * Headers 的 key 是大小写无关的，但比较标准的写法如 `Content-Type`，这里就是保证所有的 key 都是这种格式
 */
export default function normalizeHeaders(headers?: Record<string, string>): Record<string, string> {
  const normalizedHeaders: Record<string, string> = {};
  
  _forEach(headers, (v, k) => {
    normalizedHeaders[normalizeHeaderKey(k)] = v;
  });
  
  return normalizedHeaders;
}
