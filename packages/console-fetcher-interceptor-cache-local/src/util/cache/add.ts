import {
  ICache
} from '../../types';

import storage from './_storage';

/**
 * 添加一个新的缓存，此时没有数据，因此 time、ttl 没有意义
 */
export default function add(key: string): ICache {
  const o = storage();
  const cache: ICache = {
    time: 0,
    ttl: -1,
    queue: []
  };
  
  o[key] = cache;
  
  return cache;
}
