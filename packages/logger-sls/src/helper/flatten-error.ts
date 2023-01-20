import flattenObject from './flatten-object';

/**
 * 通用的将 Error 进行平铺的方法
 */
export default function flattenError(err: Error | object): Record<string, unknown> {
  return flattenObject(err, 'error');
}