import getCacheStorage from './get-cache-storage';

interface ICache<T = unknown> {
  expire: number;
  data: T;
}

export default function putCache<T = unknown>(key: string, data: T, ttl: number): void {
  const cacheStorage = getCacheStorage();
  const cache: ICache = {
    data,
    expire: -1
  };
  
  if (ttl > 0) {
    cache.expire = Date.now() + ttl;
  }
  
  cacheStorage[key] = cache;
}
