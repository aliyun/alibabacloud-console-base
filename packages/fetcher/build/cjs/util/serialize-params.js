"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = serializeParams;

var _qs = _interopRequireDefault(require("qs"));

/**
 * 对参数进行序列化
 */
function serializeParams(params, options) {
  if (!params) {
    return '';
  }

  if (typeof params === 'string') {
    return params;
  }

  return _qs.default.stringify(params, options);
}