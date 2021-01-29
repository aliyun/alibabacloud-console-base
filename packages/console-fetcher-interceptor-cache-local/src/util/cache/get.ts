import {
  ICache,
  ICacheLocalOptionsParsed
} from '../../types';

import getStorage from './get-storage';

export default function cacheGet<T>(options: ICacheLocalOptionsParsed): ICache<T> | null {
  const cache = getStorage()[options.key] as ICache<T>;
  
  if (!cache) {
    return null;
  }
  
  const {
    time,
    ttl
  } = cache;
  
  if (ttl > 0 && Date.now() - time > ttl) { // 过期
    return null;
  }
  
  if (ttl <= 0 && options.ttl > 0) { // 记录是「不过期」的，但新的需要过期，返回 null
    return null;
  }
  
  return cache;
}
