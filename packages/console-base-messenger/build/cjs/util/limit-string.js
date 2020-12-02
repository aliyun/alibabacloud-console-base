"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = limitString;

/**
 * SLS 对参数长度有限制（主要是浏览器限制），为了保证尽可能不漏日志，这里对记录的 value 强制做一些长度限制
 */
function limitString(str) {
  if (!str) {
    return str;
  }

  var len = str.length;

  if (len <= 512) {
    return str;
  }

  return "".concat(str.substr(0, 500), "...length=").concat(len);
}