import {
  IAutoMultiQueueItem
} from '../../types';

import storage from './_storage';

export default function get(key: string): IAutoMultiQueueItem[] | null {
  return storage()[key] || null;
}
