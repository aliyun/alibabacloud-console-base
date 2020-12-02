"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _const = require("../const");

var _createError = _interopRequireDefault(require("./create-error"));

/**
 * 「几乎」纯生的 fetch，增加 timeout，且返回到 json 这一层
 * 
 * 引自 https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * 
 * The fetch specification differs from jQuery.ajax() in two main ways:
 * 
 * - The Promise returned from `fetch()` won't reject on HTTP error status even if the response is an HTTP 404 or 500.
 *   Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or
 *   if anything prevented the request from completing.
 * - By default, fetch won't send or receive any cookies from the server, resulting in unauthenticated requests if the
 *   site relies on maintaining a user session (to send cookies, the credentials init option must be set).
 * 
 * 引自 https://github.github.io/fetch/
 * 
 * fetch options
 * 
 * - `method` (String) - HTTP request method. GET (Default), POST, PUT, DELETE
 * - `body` (String, body types) - HTTP request body
 * - `headers` (Object, Headers) - Default: {}
 * - `credentials` (String) - Authentication credentials mode. Default: "omit"
 *    + "omit" - don't include authentication credentials (e.g. cookies) in the request
 *    + "same-origin" - include credentials in requests to the same site
 *    + "include" - include credentials in requests to all sites
 */
function _default(url) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 0 : _ref$timeout,
      fetchOptions = (0, _objectWithoutProperties2.default)(_ref, ["timeout"]);

  var promise = fetch(url, fetchOptions).catch(function (err) {
    // URL 不存在或者请求过程被中断（例如刷新页面）会发生此类错误
    if (err.name === _const.EFetchError.TIMEOUT) {
      throw err;
    } // TypeError: "NetworkError when attempting to fetch resource."


    throw (0, _createError.default)(_const.EFetchError.NETWORK, err === null || err === void 0 ? void 0 : err.message);
  });
  return timeout > 0 ? new Promise(function (resolve, reject) {
    var theTimer = setTimeout(function () {
      reject((0, _createError.default)(_const.EFetchError.TIMEOUT, "fetch('".concat(url, "') timeout after ").concat(timeout, "ms")));
    }, timeout);
    promise.then(function (response) {
      clearTimeout(theTimer);
      resolve(response);
    }, function (err) {
      clearTimeout(theTimer);
      reject(err);
    });
  }) : promise;
}