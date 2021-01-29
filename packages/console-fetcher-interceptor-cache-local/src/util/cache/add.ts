import {
  ICacheLocalOptionsParsed
} from '../../types';

import getCacheStorage from './get-storage';

export default function cacheAdd<T = unknown>(options: ICacheLocalOptionsParsed, data: T): void {
  const cacheStorage = getCacheStorage();
  
  cacheStorage[options.key] = {
    time: Date.now(),
    ttl: options.ttl,
    data
  };
}
