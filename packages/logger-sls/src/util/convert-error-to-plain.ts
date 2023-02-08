import _forEach from 'lodash/forEach';

/**
 * Error 身上的 name、message、stack 用 _forEach 遍历不到
 */
export default function convertErrorToPlain(err: Error): Record<string, unknown> {
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