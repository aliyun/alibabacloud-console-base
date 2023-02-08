import _forEach from 'lodash/forEach';
import _isPlainObject from 'lodash/isPlainObject';
import _isError from 'lodash/isError';
import _isEmpty from 'lodash/isEmpty';

import {
  convertErrorToPlain
} from '../util';

interface IFnIgnore {
  (path: string, key: string, value: unknown): boolean;
}

interface IFlattenOptions {
  depth?: number;
  /**
   * 可忽略部分属性（注意这里的 path 和 prefix 没有关系）
   */
  ignore?: string[] | IFnIgnore;
}

function normalizeObject<T extends object>(o: T): Record<string, unknown> {
  return _isError(o) ? convertErrorToPlain(o) : o as Record<string, unknown>;
}

function shouldIgnore(ignore: IFlattenOptions['ignore'], path: string, key: string, value: unknown): boolean {
  if (!ignore) {
    return false;
  }
  
  if (typeof ignore === 'function') {
    return ignore(path, key, value);
  }
  
  if (Array.isArray(ignore)) {
    return ignore.includes(path);
  }
  
  return false;
}

/**
 * 有时候为了统计方便，需要把传入的对象展平，比如 error 对象，可能会展平成如下形状：
 * 
 * ```
 * {
 *   "error.name": "..",
 *   "error.message": "..",
 *   "error.stack": ".."
 * }
 * ```
 */
export default function flattenObject<T extends object>(o: T, prefix?: string, {
  depth = 3,
  ignore
}: IFlattenOptions = {}): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  
  function loop(currentObj: Record<string, unknown>, parentPaths: string[]): void {
    const depthFull = depth > 0 && parentPaths.length + 1 >= depth;
    
    _forEach(currentObj, (v: unknown, k: string) => {
      const key = [...parentPaths, k].join('.');
      const prefixedKey = prefix ? `${prefix}.${key}` : key;
      
      // 可以忽略不重要的信息
      if (ignore && shouldIgnore(ignore, key, k, v)) {
        return;
      }
      
      // 深度满了，或者不是对象，或者空对象（或数组），则不继续 loop
      if (depthFull || !_isPlainObject(v) || _isEmpty(v)) {
        result[prefixedKey] = v;
        
        return;
      }
      
      loop(v as Record<string, unknown>, [...parentPaths, k]);
    });
  }
  
  loop(normalizeObject(o), []);
  
  return result;
}