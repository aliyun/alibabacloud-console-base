"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = switchLanguage;

var _fetcherJsonp = _interopRequireDefault(require("@alicloud/fetcher-jsonp"));

var _getLanguageInCookie = _interopRequireDefault(require("./get-language-in-cookie"));

var _setLanguageInCookie = _interopRequireDefault(require("./set-language-in-cookie"));

/**
 * 切换语言
 * 
 * 1. 之前还有一个 www.alibabacloud.com/api/changeLanguage，它只有在国际站登录的场景下有效（否则会 302 到错误页）
 * 2. 此接口没有日常环境，但日常环境下仍旧可以调用通 `.com`（实际上是切了线上的环境），所以日常直接设 cookie
 * 3. 如果接口出错，则强行设置 cookie
 */
function switchLanguage(lang) {
  if (/.test$/.test(location.hostname)) {
    // 不要依赖 console-base-conf-env
    (0, _setLanguageInCookie.default)(lang);
    return Promise.resolve();
  } // response 为 JSONP 的 `{ code: 200, message: 'success' }`
  // response header 带 cookie 如下：
  // set-cookie: aliyun_lang=_传入的值_; path=/; max-age=2592000; expires=...; domain=.aliyun.com; samesite=none; secure


  return (0, _fetcherJsonp.default)("//intl.aliyun.com/api/changeLanguage?lang=".concat(encodeURIComponent(lang)), {
    timeout: 2000
  }).then(function (response) {
    return response.json();
  }).then(function () {
    return (0, _getLanguageInCookie.default)() !== lang;
  }, function () {
    return true;
  }).then(function (needFix) {
    if (needFix) {
      (0, _setLanguageInCookie.default)(lang);
    }
  });
}