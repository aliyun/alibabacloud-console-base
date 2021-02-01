import mergerGetStorage from './get-storage';
import mergerGet from './get';

export default function mergerRemove(key: string): void {
  const queue = mergerGet(key);
  
  if (!queue) {
    return;
  }
  
  const mergerStorage = mergerGetStorage();
  
  mergerStorage[key] = null;
  delete mergerStorage[key];
}
