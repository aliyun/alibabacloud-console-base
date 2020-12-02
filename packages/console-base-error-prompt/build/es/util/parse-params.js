import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import _isString from 'lodash/isString';
import _isEmpty from 'lodash/isEmpty';
import qs from 'qs';
var DEFAULT_IGNORED_KEYS = ['sec_token', 'secToken', 'collina', 'umid'];
/**
 * 获取去干扰的 body 参数
 */

export default function parseParams(params) {
  if (!params) {
    return null;
  }

  var o = _isString(params) ? qs.parse(params) : _objectSpread({}, params);
  DEFAULT_IGNORED_KEYS.forEach(function (v) {
    delete o[v];
  });
  return _isEmpty(o) ? null : o;
}
/**
 * 获取去干扰的 body 参数
 */

export function parseBody(body) {
  var o = parseParams(body);

  if (o) {
    DEFAULT_IGNORED_KEYS.forEach(function (v) {
      delete o[v];
    });
  }

  return _isEmpty(o) ? null : o;
}