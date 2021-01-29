import cacheGetStorage from './get-storage';
import cacheGet from './get';

export default function cacheRemove(key: string): void {
  const cache = cacheGet(key);
  
  if (!cache) {
    return;
  }
  
  const cacheStorage = cacheGetStorage();
  
  cacheStorage[key] = null;
  delete cacheStorage[key];
}
