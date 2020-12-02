import _uniq from 'lodash/uniq';

/**
 * 由于相同类型的 API 调用的接口 URL 都是一个，为了方便快速定位，在 URL 上拼上对应产品和 action
 */
export default function composeApiUrl(apiUrl: string, product: string, action: string | string[]): string {
  const actionArr = Array.isArray(action) ? _uniq(action) : [action];
  
  return `${apiUrl}?_${product}__${actionArr.join('~')}_`;
}
