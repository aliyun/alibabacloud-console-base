"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ERROR_RESPONSE_PARSE = exports.ERROR_RESPONSE_STATUS = exports.ERROR_NETWORK = exports.ERROR_TIMEOUT = void 0;
// 错误定义，用枚举不好扩展，故此用常量
var ERROR_TIMEOUT = 'FetcherErrorTimeout'; // 超时（不是真正的超时，前端模拟）

exports.ERROR_TIMEOUT = ERROR_TIMEOUT;
var ERROR_NETWORK = 'FetcherErrorNetwork'; // 网络错误（未到业务层）

exports.ERROR_NETWORK = ERROR_NETWORK;
var ERROR_RESPONSE_STATUS = 'FetcherErrorResponseStatus'; // 响应状态错误 response.ok 为 false，即 response.status 在 200-299 之外时的错误

exports.ERROR_RESPONSE_STATUS = ERROR_RESPONSE_STATUS;
var ERROR_RESPONSE_PARSE = 'FetcherErrorResponseParse'; // 响应解析错误，一般出现在非 JSON 的场景

exports.ERROR_RESPONSE_PARSE = ERROR_RESPONSE_PARSE;