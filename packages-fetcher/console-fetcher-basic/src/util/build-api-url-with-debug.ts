import {
  uniq as _uniq
} from 'lodash-es';

import {
  buildUrl
} from '@alicloud/fetcher';

/**
 * 相同类型的 API 调用的接口 URL 都是一个，为了方便快速定位，需要在 URL 上拼上对应产品和 action。
 * 之所以直接放到 URL 参数里，是因为如果用 post 的 params 话无法被拦截器获取，从而无法在 arms 日志中获得。
 */
export default function buildApiUrlWithDebug(url: string, product: string, action: string | string[]): string {
  const actionArr = Array.isArray(action) ? _uniq(action) : [action];
  
  return buildUrl({
    url,
    params: {
      _fetcher_: `${product}__${actionArr.join('~')}`
    },
    urlCacheBusting: false
  });
}
