import _uniq from 'lodash/uniq';

export interface IParamsForDebug {
  _fetcher_: string;
}

/**
 * 由于相同类型的 API 调用的接口 URL 都是一个，为了方便快速定位，需要在 URL 上拼上对应产品和 action
 */
export default function buildParamsForDebug(product: string, action: string | string[]): IParamsForDebug {
  const actionArr = Array.isArray(action) ? _uniq(action) : [action];
  
  return {
    _fetcher_: `${product}__${actionArr.join('~')}`
  };
}
