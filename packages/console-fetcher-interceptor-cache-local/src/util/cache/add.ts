import {
  ICache
} from '../../types';

import cacheGetStorage from './get-storage';

/**
 * 添加一个新的缓存，此时没有数据，因此 time、ttl 没有意义
 */
export default function cacheAdd(key: string): ICache {
  const cacheStorage = cacheGetStorage();
  const cache: ICache = {
    time: 0,
    ttl: -1,
    queue: []
  };
  
  cacheStorage[key] = cache;
  
  return cache;
}
