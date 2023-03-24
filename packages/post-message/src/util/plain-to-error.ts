import {
  isPlainObject as _isPlainObject,
  forEach as _forEach
} from 'lodash-es';

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
