import get from './get';
import remove from './remove';

export default function reject(key: string, err: Error): void {
  const queue = get(key);
  
  if (queue) {
    remove(key);
    
    // setTimeout 以第 0 个请求最先
    setTimeout(() => queue?.forEach(({
      reject: promiseReject
    }) => promiseReject(err)), 0);
  }
}
