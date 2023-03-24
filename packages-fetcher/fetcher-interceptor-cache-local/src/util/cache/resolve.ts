import {
  cloneDeep as _cloneDeep
} from 'lodash-es';

import get from './get';

export default function resolve(key: string, data: unknown, ttl: number): void {
  const cache = get(key);
  
  if (!cache) {
    return;
  }
  
  const {
    queue
  } = cache;
  
  cache.time = Date.now();
  cache.queue = null; // 标识已经完成
  cache.ttl = ttl;
  cache.data = _cloneDeep(data);
  
  // setTimeout 以第 0 个请求最先 resolve
  setTimeout(() => queue?.forEach(({
    resolve: promiseResolve
  }) => promiseResolve(_cloneDeep(data))), 0);
}
