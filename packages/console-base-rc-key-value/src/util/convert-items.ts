import _isNil from 'lodash/isNil';
import _map from 'lodash/map';
import {
  isValidElement
} from 'react';

import {
  IItem,
  TItems
} from '../types';

export default function convertItems(o: TItems, ignoreEmpty?: boolean): IItem[] {
  if (!o) {
    return [];
  }
  
  const arr: (IItem | null)[] = Array.isArray(o) ? o : _map(o, (v, k) => ({
    k, v
  })).map(kv => {
    if (!kv || typeof kv.v === 'function') {
      return null;
    }
    
    const {
      k,
      v
    } = kv;
    let displayV = v;
    
    if (!_isNil(v) && typeof v ! === 'string' && !isValidElement(v)) {
      displayV = String(displayV);
    }
    
    return {
      k,
      v: displayV
    };
  });
  
  return arr.filter(v => {
    if (!v) {
      return false;
    }
    
    return !(_isNil(v.v) && ignoreEmpty);
  }) as IItem[];
}
