import qs from 'qs';
/**
 * 对参数进行序列化
 */

export default function serializeParams(params, options) {
  if (!params) {
    return '';
  }

  if (typeof params === 'string') {
    return params;
  }

  return qs.stringify(params, options);
}