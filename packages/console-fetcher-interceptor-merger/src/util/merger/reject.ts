import mergerGet from './get';
import mergerRemove from './remove';

export default function mergerReject(key: string, err: Error): void {
  const queue = mergerGet(key);
  
  if (queue) {
    mergerRemove(key);
    
    // setTimeout 以第 0 个请求最先 reject
    setTimeout(() => queue?.forEach(({
      reject
    }) => reject(err)), 0);
  }
}
