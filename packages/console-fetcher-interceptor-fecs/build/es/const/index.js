export var COOKIE_SEC_TOKEN = 'FECS-XSRF-TOKEN';
/**
 * 后端给的 CSRF token 错误，给出的错误 message 如下：
 * 「Invalid CSRF Token '3a7864e9-1735-41ad-a3ea-f9d89ec430e1' was found on the request parameter 'sec_token' or header 'X-CSRF-TOKEN'.」
 */

export var ERROR_CODE_TOKEN_INVALID = 'CsrfTokenError';
/**
 * ##新增前端错误码##
 * 
 * 调用 FECS 的刷新 token 接口失败
 */

export var ERROR_CODE_TOKEN_REFRESH_FAILED = 'CsrfTokenError.RefreshFailed';
export var ERROR_MESSAGE_TOKEN_REFRESH_FAILED = '[FECS] token auto refresh failed.';
/**
 * ##新增前端错误码##
 * 
 * 使用了刷新后的 token 还是同样的错误
 */

export var ERROR_CODE_TOKEN_AFTER_REFRESH = 'CsrfTokenError.AfterRefresh';
export var ERROR_MESSAGE_TOKEN_AFTER_REFRESH = '[FECS] token not right even after refresh.';