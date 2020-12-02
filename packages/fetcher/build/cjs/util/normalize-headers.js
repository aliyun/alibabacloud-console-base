"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeHeaders;

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

var _normalizeHeaderKey = _interopRequireDefault(require("./normalize-header-key"));

/**
 * 关于 Headers 参考 https://developer.mozilla.org/en-US/docs/Web/API/Headers
 * 
 * Headers 的 key 是大小写无关的，但比较标准的写法如 `Content-Type`，这里就是保证所有的 key 都是这种格式
 */
function normalizeHeaders(headers) {
  var normalizedHeaders = {};
  (0, _forEach2.default)(headers, function (v, k) {
    normalizedHeaders[(0, _normalizeHeaderKey.default)(k)] = v;
  });
  return normalizedHeaders;
}