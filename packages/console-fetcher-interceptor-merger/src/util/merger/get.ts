import {
  IMergerQueueItem
} from '../../types';

import getStorage from './get-storage';

export default function cacheGet(key: string): IMergerQueueItem[] | null {
  return getStorage()[key] || null;
}
