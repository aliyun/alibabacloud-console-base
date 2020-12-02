"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseLanguage;

var _const = require("../const");

/**
 * 根据 cookie 中的值（外传）和配置中允许的 languages（外传）决定最终的 language（有可能和 cookie 中的值相左）
 */
function parseLanguage(languages, languageFromCookie) {
  var lang = languageFromCookie || _const.ELanguage.ZH; // 当前语言不支持的情况下，开始降级：繁体降级到简体，其它到英文

  if (!languages.includes(lang)) {
    if (lang === _const.ELanguage.ZT) {
      return languages.includes(_const.ELanguage.ZH) ? _const.ELanguage.ZH : _const.ELanguage.EN;
    }

    return _const.ELanguage.EN;
  }

  return lang;
}