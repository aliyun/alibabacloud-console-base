"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ERROR_MESSAGE_TOKEN_AFTER_REFRESH = exports.ERROR_CODE_TOKEN_AFTER_REFRESH = exports.ERROR_MESSAGE_TOKEN_REFRESH_FAILED = exports.ERROR_CODE_TOKEN_REFRESH_FAILED = exports.ERROR_CODE_TOKEN_INVALID = exports.COOKIE_SEC_TOKEN = void 0;
var COOKIE_SEC_TOKEN = 'FECS-XSRF-TOKEN';
/**
 * 后端给的 CSRF token 错误，给出的错误 message 如下：
 * 「Invalid CSRF Token '3a7864e9-1735-41ad-a3ea-f9d89ec430e1' was found on the request parameter 'sec_token' or header 'X-CSRF-TOKEN'.」
 */

exports.COOKIE_SEC_TOKEN = COOKIE_SEC_TOKEN;
var ERROR_CODE_TOKEN_INVALID = 'CsrfTokenError';
/**
 * ##新增前端错误码##
 * 
 * 调用 FECS 的刷新 token 接口失败
 */

exports.ERROR_CODE_TOKEN_INVALID = ERROR_CODE_TOKEN_INVALID;
var ERROR_CODE_TOKEN_REFRESH_FAILED = 'CsrfTokenError.RefreshFailed';
exports.ERROR_CODE_TOKEN_REFRESH_FAILED = ERROR_CODE_TOKEN_REFRESH_FAILED;
var ERROR_MESSAGE_TOKEN_REFRESH_FAILED = '[FECS] token auto refresh failed.';
/**
 * ##新增前端错误码##
 * 
 * 使用了刷新后的 token 还是同样的错误
 */

exports.ERROR_MESSAGE_TOKEN_REFRESH_FAILED = ERROR_MESSAGE_TOKEN_REFRESH_FAILED;
var ERROR_CODE_TOKEN_AFTER_REFRESH = 'CsrfTokenError.AfterRefresh';
exports.ERROR_CODE_TOKEN_AFTER_REFRESH = ERROR_CODE_TOKEN_AFTER_REFRESH;
var ERROR_MESSAGE_TOKEN_AFTER_REFRESH = '[FECS] token not right even after refresh.';
exports.ERROR_MESSAGE_TOKEN_AFTER_REFRESH = ERROR_MESSAGE_TOKEN_AFTER_REFRESH;