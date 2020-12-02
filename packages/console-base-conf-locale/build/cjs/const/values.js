"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_MAP_BY_LANGUAGE = exports.LANGUAGES_ALL = exports.LANGUAGES_DEFAULT = exports.COOKIE_KEY = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _enum = require("./enum");

var _LOCALE_MAP_BY_LANGUA;

var COOKIE_KEY = 'aliyun_lang';
exports.COOKIE_KEY = COOKIE_KEY;
var LANGUAGES_DEFAULT = [_enum.ELanguage.EN, _enum.ELanguage.ZH, _enum.ELanguage.ZT, _enum.ELanguage.JA];
exports.LANGUAGES_DEFAULT = LANGUAGES_DEFAULT;
var LANGUAGES_ALL = [_enum.ELanguage.EN, _enum.ELanguage.ZH, _enum.ELanguage.ZT, _enum.ELanguage.JA, _enum.ELanguage.KO, _enum.ELanguage.FR, _enum.ELanguage.DE];
exports.LANGUAGES_ALL = LANGUAGES_ALL;
var LOCALE_MAP_BY_LANGUAGE = (_LOCALE_MAP_BY_LANGUA = {}, (0, _defineProperty2.default)(_LOCALE_MAP_BY_LANGUA, _enum.ELanguage.ZH, _enum.ELocale.ZH), (0, _defineProperty2.default)(_LOCALE_MAP_BY_LANGUA, _enum.ELanguage.ZT, _enum.ELocale.ZT), (0, _defineProperty2.default)(_LOCALE_MAP_BY_LANGUA, _enum.ELanguage.EN, _enum.ELocale.EN), (0, _defineProperty2.default)(_LOCALE_MAP_BY_LANGUA, _enum.ELanguage.JA, _enum.ELocale.JA), (0, _defineProperty2.default)(_LOCALE_MAP_BY_LANGUA, _enum.ELanguage.KO, _enum.ELocale.KO), (0, _defineProperty2.default)(_LOCALE_MAP_BY_LANGUA, _enum.ELanguage.FR, _enum.ELocale.FR), (0, _defineProperty2.default)(_LOCALE_MAP_BY_LANGUA, _enum.ELanguage.DE, _enum.ELocale.DE), _LOCALE_MAP_BY_LANGUA);
exports.LOCALE_MAP_BY_LANGUAGE = LOCALE_MAP_BY_LANGUAGE;