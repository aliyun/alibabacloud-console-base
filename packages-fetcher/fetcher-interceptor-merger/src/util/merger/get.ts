import {
  IMergerQueueItem
} from '../../types';

import storage from './_storage';

export default function get(key: string): IMergerQueueItem[] | null {
  return storage()[key] || null;
}
