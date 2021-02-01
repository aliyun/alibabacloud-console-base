import _cloneDeep from 'lodash/cloneDeep';

import mergerGet from './get';
import mergerRemove from './remove';

export default function mergerResolve(key: string, data: unknown): void {
  const queue = mergerGet(key);
  
  if (queue) {
    mergerRemove(key);
    
    // setTimeout 以第 0 个请求最先 resolve
    setTimeout(() => queue.forEach(({
      resolve
    }) => resolve(_cloneDeep(data))), 0);
  }
}
