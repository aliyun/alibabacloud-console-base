import cacheGet from './get';
import cacheRemove from './remove';

export default function cacheReject(key: string, err: Error): void {
  const cache = cacheGet(key);
  
  if (!cache) {
    return;
  }
  
  const {
    queue
  } = cache;
  
  cacheRemove(key);
  
  // setTimeout 以第 0 个请求最先 reject
  setTimeout(() => queue?.forEach(({
    reject
  }) => reject(err)), 0);
}
