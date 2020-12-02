"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseConfLocale;

var _const = require("../const");

var _getLanguageInCookie = _interopRequireDefault(require("./get-language-in-cookie"));

var _parseLanguages = _interopRequireDefault(require("./parse-languages"));

var _parseLanguage = _interopRequireDefault(require("./parse-language"));

function parseConfLocale() {
  var _ref = window,
      _ref$CONSOLE_BASE_SET = _ref.CONSOLE_BASE_SETTINGS,
      CONSOLE_BASE_SETTINGS = _ref$CONSOLE_BASE_SET === void 0 ? {} : _ref$CONSOLE_BASE_SET,
      _ref$viewframeSetting = _ref.viewframeSetting,
      viewframeSetting = _ref$viewframeSetting === void 0 ? {} : _ref$viewframeSetting;
  var LANGUAGE_IN_COOKIE = (0, _getLanguageInCookie.default)();
  var LANGUAGES = (0, _parseLanguages.default)(CONSOLE_BASE_SETTINGS.LANGUAGES || viewframeSetting.languages);
  var LANGUAGE = (0, _parseLanguage.default)(LANGUAGES, LANGUAGE_IN_COOKIE);
  return {
    LANGUAGES: LANGUAGES,
    LANGUAGE: LANGUAGE,
    LOCALE: _const.LOCALE_MAP_BY_LANGUAGE[LANGUAGE] || _const.ELocale.ZH,
    LANGUAGE_IN_COOKIE: LANGUAGE_IN_COOKIE,
    LOCALE_FROM_COOKIE: LANGUAGE_IN_COOKIE ? _const.LOCALE_MAP_BY_LANGUAGE[LANGUAGE_IN_COOKIE] : undefined
  };
}