import {
  ICache
} from '../../types';

const WINDOW_CACHE_STORAGE = '__fetcher_cache_storage_v1__'; // 为了便于不同 bundle 下的 fetcher 可以共用一套缓存，如果缓存的逻辑有重大的变化，需要改这里

interface IWin extends Window {
  [WINDOW_CACHE_STORAGE]?: Record<string, ICache>;
}

export default function storage(): Record<string, ICache | null> {
  const win = window as IWin;
  let o = win[WINDOW_CACHE_STORAGE];
  
  if (!o) {
    o = {};
    win[WINDOW_CACHE_STORAGE] = o;
  }
  
  return o;
}
