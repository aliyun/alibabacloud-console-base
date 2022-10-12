import {
  ICache
} from '../../types';

import storage from './_storage';

export default function get(key: string): ICache | null {
  return storage()[key] || null;
}
