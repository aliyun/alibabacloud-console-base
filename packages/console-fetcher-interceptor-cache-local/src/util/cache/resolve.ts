import cacheGet from './get';

export default function cacheResolve(key: string, data: unknown, ttl: number): void {
  const cache = cacheGet(key);
  
  if (!cache) {
    return;
  }
  
  const {
    queue
  } = cache;
  
  cache.time = Date.now();
  cache.queue = null; // 标识已经完成
  cache.ttl = ttl;
  cache.data = data;
  
  // setTimeout 以第 0 个请求最先 resolve
  setTimeout(() => queue?.forEach(({
    resolve
  }) => resolve(data)), 0);
}
