import {
  TIconProductType
} from '../types';

export function normalizeType(type: string): TIconProductType {
  let normalizedType = (type || '').toLocaleLowerCase();
  
  normalizedType = normalizedType
      .replace(/next$/, '')
      .replace(/[_-]buy$/, '')
      .replace(/-intl$/, '');
  
  if (normalizedType !== 'renew') {
    normalizedType = normalizedType.replace(/new$/, '');
  }
  
  return normalizedType as TIconProductType;
}
