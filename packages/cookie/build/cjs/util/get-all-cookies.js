"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAllCookies;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

/**
 * 获取当前页面可以访问到的全部 cookie
 */
function getAllCookies() {
  return document.cookie ? document.cookie.split(/\s*;\s*/).reduce(function (result, v) {
    var _v$split = v.split('='),
        _v$split2 = (0, _slicedToArray2.default)(_v$split, 2),
        cookieName = _v$split2[0],
        cookieValue = _v$split2[1]; // 原来的实现有问题，set 的时候用的是 `escape`，get 的时候用的是 `decodeURIComponent`，这在大多数情况下
    // 没有问题，但，当 set 了一个中文的，就会抛错「URIError: malformed URI sequence」
    // 这里做一下兼容，因为大部分情况下 `decodeURIComponent(escape(value)) === value`


    result[cookieName] = decodeURIComponent(cookieValue);
    return result;
  }, {}) : {};
}