import cacheGetStorage from './get-storage';

export default function cacheAdd(key: string): void {
  const cacheStorage = cacheGetStorage();
  
  cacheStorage[key] = [];
}
