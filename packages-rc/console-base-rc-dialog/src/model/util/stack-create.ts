import {
  forEach as _forEach,
  map as _map
} from 'lodash-es';

import {
  IStack,
  IDialogStackItem
} from '../types';

export default function stackCreate(): IStack {
  const STACK: Record<string, IDialogStackItem> = {};
  
  /**
   * 放入一个元素，返回变更后的长度，如果 id 已存在，则替换它并返回 -1，否则返回变更后的个数（> 0）。
   */
  function put(id: string, o: IDialogStackItem): number {
    const existed = !!STACK[id];
    
    STACK[id] = o;
    
    if (existed) {
      return -1;
    }
    
    return _map(STACK).length;
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
  function each(fn: (v: IDialogStackItem, k: string) => void): void {
    _forEach(STACK, fn);
  }
  
  /**
   * 获取元素
   */
  function get(k: string | number): IDialogStackItem | undefined {
    return STACK[k];
  }
  
  return {
    put,
    remove,
    get,
    each
  };
}
