import _isString from 'lodash/isString';
import _isPlainObject from 'lodash/isPlainObject';
import _isEmpty from 'lodash/isEmpty';
import qs from 'qs';

const DEFAULT_IGNORED_KEYS = [
  'sec_token',
  'secToken',
  'collina',
  'umid'
];

function getPlainObject(o?: unknown): Record<string, unknown> | null {
  if (!o) {
    return null;
  }
  
  if (_isString(o)) {
    return qs.parse(o);
  }
  
  if (_isPlainObject(o)) {
    return o as Record<string, unknown>;
  }
  
  return null;
}

/**
 * 获取去干扰的 params/body 参数
 */
export default function parseParams(params?: unknown): Record<string, unknown> | null {
  const o = getPlainObject(params);
  
  if (!o) {
    return null;
  }
  
  DEFAULT_IGNORED_KEYS.forEach(v => {
    delete o[v];
  });

  return _isEmpty(o) ? null : o;
}
