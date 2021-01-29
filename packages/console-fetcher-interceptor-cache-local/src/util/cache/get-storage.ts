import {
  ICache
} from '../../types';

const WINDOW_CACHE_STORAGE = '__fetcher_cache_storage_v1__'; // 为了便于不同 bundle 下的 fetcher 可以共用一套缓存，如果缓存的逻辑有重大的变化，需要改这里

interface IWin extends Window {
  [WINDOW_CACHE_STORAGE]?: Record<string, ICache>;
}

export default function cacheGetStorage(): Record<string, ICache | null> {
  const win = window as IWin;
  let cacheStorage = win[WINDOW_CACHE_STORAGE];
  
  if (!cacheStorage) {
    cacheStorage = {};
    win[WINDOW_CACHE_STORAGE] = cacheStorage;
  }
  
  return cacheStorage;
}
