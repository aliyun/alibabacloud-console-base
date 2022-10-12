import get from './get';
import remove from './remove';

export default function reject(key: string, err: Error): void {
  const cache = get(key);
  
  if (!cache) {
    return;
  }
  
  const {
    queue
  } = cache;
  
  remove(key);
  
  // setTimeout 以第 0 个请求最先 reject
  setTimeout(() => queue?.forEach(({
    reject: promiseReject
  }) => promiseReject(err)), 0);
}
