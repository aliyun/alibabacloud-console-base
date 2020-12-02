"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseParams;
exports.parseBody = parseBody;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _isString2 = _interopRequireDefault(require("lodash/isString"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _qs = _interopRequireDefault(require("qs"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DEFAULT_IGNORED_KEYS = ['sec_token', 'secToken', 'collina', 'umid'];
/**
 * 获取去干扰的 body 参数
 */

function parseParams(params) {
  if (!params) {
    return null;
  }

  var o = (0, _isString2.default)(params) ? _qs.default.parse(params) : _objectSpread({}, params);
  DEFAULT_IGNORED_KEYS.forEach(function (v) {
    delete o[v];
  });
  return (0, _isEmpty2.default)(o) ? null : o;
}
/**
 * 获取去干扰的 body 参数
 */


function parseBody(body) {
  var o = parseParams(body);

  if (o) {
    DEFAULT_IGNORED_KEYS.forEach(function (v) {
      delete o[v];
    });
  }

  return (0, _isEmpty2.default)(o) ? null : o;
}