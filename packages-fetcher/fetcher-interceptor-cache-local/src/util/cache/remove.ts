import storage from './_storage';
import get from './get';

export default function remove(key: string): void {
  const cache = get(key);
  
  if (!cache) {
    return;
  }
  
  const o = storage();
  
  o[key] = null;
  delete o[key];
}
