import _isPlainObject from 'lodash/isPlainObject';
import _forEach from 'lodash/forEach';

export default function plainToError(o: any): unknown {
  if (!_isPlainObject(o)) {
    return o;
  }
  
  const err = new Error();
  
  _forEach(o as Record<string, unknown>, (v, k) => {
    (err as any)[k] = o[k];
  });
  
  return err;
}
