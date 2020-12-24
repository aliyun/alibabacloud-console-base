import _isString from 'lodash/isString';
import _isEmpty from 'lodash/isEmpty';
import qs from 'qs';

const DEFAULT_IGNORED_KEYS = [
  'sec_token',
  'secToken',
  'collina',
  'umid'
];

/**
 * 获取去干扰的 params 参数
 */
export default function parseParams(params?: string | Record<string, unknown>): Record<string, unknown> | null {
  if (!params) {
    return null;
  }
  
  const o: Record<string, unknown> = _isString(params) ? qs.parse(params) : {
    ...params
  };

  DEFAULT_IGNORED_KEYS.forEach(v => {
    delete o[v];
  });

  return _isEmpty(o) ? null : o;
}

/**
 * 获取去干扰的 body 参数
 */
export function parseBody(body?: string | Record<string, unknown>): Record<string, unknown> | null {
  const o = parseParams(body);
  
  if (o) {
    DEFAULT_IGNORED_KEYS.forEach(v => {
      delete o[v];
    });
  }

  return _isEmpty(o) ? null : o;
}
