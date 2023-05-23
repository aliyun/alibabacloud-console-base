import {
  forEach as _forEach,
  map as _map
} from 'lodash-es';

import {
  IStack,
  IStackItem
} from '../types';

export default function stackCreate(): IStack {
  const STACK: Record<string, IStackItem> = {};
  
  /**
   * 放入一个元素，返回变更后的长度，如果 id 已存在，则替换它并返回 -1，否则返回变更后的个数（> 0）。
   */
  function put(id: string, o: IStackItem): number {
    const existed = !!STACK[id];
    
    STACK[id] = o;
    
    return existed ? -1 : _map(STACK).length;
  }
  
  /**
   * 移除一个元素，若 id 对应的元素不存在，返回 -1，否则返回变更后的个数（>= 0）
   */
  function remove(id: string): number {
    const existed = !!STACK[id];
    
    if (!existed) {
      return -1;
    }
    
    delete STACK[id];
    
    return _map(STACK).length;
  }
  
  /**
   * 遍历方法
   */
  function each(fn: (v: IStackItem, k: string) => void): void {
    _forEach(STACK, fn);
  }
  
  /**
   * 获取元素
   */
  function get(k: string | number): IStackItem | undefined {
    return STACK[k];
  }
  
  return {
    put,
    remove,
    get,
    each
  };
}
