import {
  IMergerQueueItem
} from '../../types';

// 为了便于不同 bundle 下的 fetcher 可以共用一套合并器
const WINDOW_MERGER_STORAGE = '__fetcher_merger_storage_v1__';

interface IWin extends Window {
  [WINDOW_MERGER_STORAGE]?: Record<string, IMergerQueueItem[]>;
}

export default function storage(): Record<string, IMergerQueueItem[]> {
  const win = window as IWin;
  let o = win[WINDOW_MERGER_STORAGE];
  
  if (!o) {
    o = {};
    win[WINDOW_MERGER_STORAGE] = o;
  }
  
  return o;
}
