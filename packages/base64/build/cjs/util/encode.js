"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = encode;

var _btoa = _interopRequireDefault(require("./btoa"));

var _utob = _interopRequireDefault(require("./utob"));

function _encode(u) {
  return (0, _btoa.default)((0, _utob.default)(u));
}
/**
 * 支持 unicode 的 base64 编码，如果 uriSafe 为 true，则末尾的 `=` 会被抹掉，`+` 转成 `-`
 */


function encode(str, uriSafe) {
  var base64Str = _encode(String(str));

  return uriSafe ? base64Str.replace(/[+/]/g, function (m0) {
    return m0 === '+' ? '-' : '_';
  }).replace(/=/g, '') : base64Str;
}