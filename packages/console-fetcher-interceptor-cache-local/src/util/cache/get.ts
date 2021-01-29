import {
  ICache
} from '../../types';

import getStorage from './get-storage';

export default function cacheGet(key: string): ICache | null {
  return getStorage()[key] || null;
}
