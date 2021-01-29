import {
  ICacheLocalOptions
} from '../../types';

import getCacheStorage from './get-storage';

export default function cacheRemove(options: ICacheLocalOptions | null): void {
  if (!options?.key) {
    return;
  }
  
  const cacheStorage = getCacheStorage();
  
  cacheStorage[options.key] = null;
  delete cacheStorage[options.key];
}
