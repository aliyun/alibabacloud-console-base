import _cloneDeep from 'lodash/cloneDeep';

import get from './get';
import remove from './remove';

export default function resolve(key: string, data: unknown): void {
  const queue = get(key);
  
  if (queue) {
    remove(key);
    
    // setTimeout 以第 0 个请求最先 resolve
    setTimeout(() => queue.forEach(({
      resolve: promiseResolve
    }) => promiseResolve(_cloneDeep(data))), 0);
  }
}
