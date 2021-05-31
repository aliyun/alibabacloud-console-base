import storage from './_storage';
import get from './get';

export default function remove(key: string): void {
  const queue = get(key);
  
  if (!queue) {
    return;
  }
  
  const o = storage();
  
  o[key] = null as any;
  delete o[key];
}
