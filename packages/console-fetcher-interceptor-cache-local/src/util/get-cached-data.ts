import {
  ICache,
  ICacheLocalOptions
} from '../types';

import getCacheStorage from './get-cache-storage';

export default function getCachedData<T>({
  key,
  ttl
}: ICacheLocalOptions): T | null {
  const cache = getCacheStorage()[key] as ICache<T>;
  
  if (!cache) {
    return null;
  }
  
  const {
    data,
    expire
  } = cache;
  
  // 过期，或传入了 ttl 但记录是「不过期」的，返回 null
  if ((expire > 0 && expire < Date.now()) || (expire <= 0 && ttl > 0)) {
    return null;
  }
  
  return data;
}
