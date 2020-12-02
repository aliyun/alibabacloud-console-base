"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ELocale = exports.ELanguage = void 0;
// 阿里云 cookie 中的 aliyun_lang 的可能值
var ELanguage; // language 对应的 locale

exports.ELanguage = ELanguage;

(function (ELanguage) {
  ELanguage["ZH"] = "zh";
  ELanguage["ZT"] = "zh-TW";
  ELanguage["EN"] = "en";
  ELanguage["JA"] = "ja";
  ELanguage["KO"] = "ko";
  ELanguage["FR"] = "fr";
  ELanguage["DE"] = "de";
})(ELanguage || (exports.ELanguage = ELanguage = {}));

var ELocale;
exports.ELocale = ELocale;

(function (ELocale) {
  ELocale["ZH"] = "zh-CN";
  ELocale["ZT"] = "zh-TW";
  ELocale["EN"] = "en-US";
  ELocale["JA"] = "ja-JP";
  ELocale["KO"] = "ko-KR";
  ELocale["FR"] = "fr-FR";
  ELocale["DE"] = "de-DE";
})(ELocale || (exports.ELocale = ELocale = {}));