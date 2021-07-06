import {
  IconProductType
} from '../types';

export function normalizeType(type: string): IconProductType {
  let normalizedType = (type || '').toLocaleLowerCase();
  
  normalizedType = normalizedType
      .replace(/next$/, '')
      .replace(/[_-]buy$/, '')
      .replace(/-intl$/, '');
  
  if (normalizedType !== 'renew') {
    normalizedType = normalizedType.replace(/new$/, '');
  }
  
  return normalizedType as IconProductType;
}
