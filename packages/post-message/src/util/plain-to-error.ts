import _isPlainObject from 'lodash/isPlainObject';
import _forEach from 'lodash/forEach';

export default function plainToError(o: Record<string, unknown>): Error {
  if (!_isPlainObject(o)) {
    return o as unknown as Error;
  }
  
  const err = new Error();
  
  _forEach(o, (_v, k) => {
    (err as unknown as Record<string, unknown>)[k] = o[k];
  });
  
  return err;
}
