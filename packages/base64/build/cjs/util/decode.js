"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decode;

var _atob = _interopRequireDefault(require("./atob"));

var _btou = _interopRequireDefault(require("./btou"));

function _decode(a) {
  return (0, _btou.default)((0, _atob.default)(a));
}
/**
 * 支持 unicode 的 base64 解码
 */


function decode(str) {
  return _decode(String(str).replace(/[-_]/g, function (m0) {
    return m0 === '-' ? '+' : '/';
  }).replace(/[^A-Za-z0-9+/]/g, ''));
}