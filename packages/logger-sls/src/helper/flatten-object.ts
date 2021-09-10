import _forEach from 'lodash/forEach';
import _isPlainObject from 'lodash/isPlainObject';
import _isError from 'lodash/isError';
import _isEmpty from 'lodash/isEmpty';

/**
 * Error 身上的 name、message、stack 用 _forEach 遍历不到
 */
function convertError(err: Error): Record<string, unknown> {
  const plainError: Record<string, unknown> = {
    name: err.name,
    message: err.message,
    stack: err.stack
  };
  
  _forEach(err, (v, k) => {
    plainError[k] = v;
  });
  
  return plainError;
}

function normalizeObject(o: Error | Record<string, unknown>): Record<string, unknown> {
  if (_isError(o)) {
    return convertError(o);
  }
  
  return o;
}

/**
 * 有时候为了统计方便，需要把传入的对象展平，比如 error 对象，可能会展平成如下形状：
 * 
 * ```
 * {
 *   "error.name": "..",
 *   "error.name": "..",
 *   "error.stack": ".."
 * }
 * ```
 */
export default function flattenObject(o: Error | Record<string, unknown>, prefix?: string, depth = 3): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  function generateKey(parentPaths: string[], k: string): string {
    const key = [...parentPaths, k].join('.');
    
    return prefix ? `${prefix}.${key}` : key;
  }

  function loop(currentObj: Record<string, unknown>, parentPaths: string[]): void {
    const depthFull = depth > 0 && parentPaths.length + 1 >= depth;
    
    _forEach(currentObj, (v: unknown, k: string) => {
      if (depthFull || !_isPlainObject(v) || _isEmpty(v)) {
        result[generateKey(parentPaths, k)] = v;
        
        return;
      }
      
      loop(v as Record<string, unknown>, [...parentPaths, k]);
    });
  }
  
  loop(normalizeObject(o), []);
  
  return result;
}