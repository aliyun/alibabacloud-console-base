import _isError from 'lodash/isError';
import _forEach from 'lodash/forEach';

/**
 * postMessage 不支持传 Error 对象
 */
export default function errorToPlain(err: unknown): Record<string, unknown> {
  if (!_isError(err)) {
    return err as Record<string, unknown>;
  }
  
  const plain: Record<string, unknown> = {};
  
  _forEach(err, (v, k) => {
    plain[k] = v;
  });
  
  ['message', 'name', 'stack'].forEach(v => {
    if (!plain[v]) {
      plain[v] = (err as any)[v];
    }
  });
  
  return plain;
}
