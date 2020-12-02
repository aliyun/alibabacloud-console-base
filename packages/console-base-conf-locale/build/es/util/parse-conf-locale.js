import { ELocale, LOCALE_MAP_BY_LANGUAGE } from '../const';
import getLanguageInCookie from './get-language-in-cookie';
import parseLanguages from './parse-languages';
import parseLanguage from './parse-language';
export default function parseConfLocale() {
  var _ref = window,
      _ref$CONSOLE_BASE_SET = _ref.CONSOLE_BASE_SETTINGS,
      CONSOLE_BASE_SETTINGS = _ref$CONSOLE_BASE_SET === void 0 ? {} : _ref$CONSOLE_BASE_SET,
      _ref$viewframeSetting = _ref.viewframeSetting,
      viewframeSetting = _ref$viewframeSetting === void 0 ? {} : _ref$viewframeSetting;
  var LANGUAGE_IN_COOKIE = getLanguageInCookie();
  var LANGUAGES = parseLanguages(CONSOLE_BASE_SETTINGS.LANGUAGES || viewframeSetting.languages);
  var LANGUAGE = parseLanguage(LANGUAGES, LANGUAGE_IN_COOKIE);
  return {
    LANGUAGES: LANGUAGES,
    LANGUAGE: LANGUAGE,
    LOCALE: LOCALE_MAP_BY_LANGUAGE[LANGUAGE] || ELocale.ZH,
    LANGUAGE_IN_COOKIE: LANGUAGE_IN_COOKIE,
    LOCALE_FROM_COOKIE: LANGUAGE_IN_COOKIE ? LOCALE_MAP_BY_LANGUAGE[LANGUAGE_IN_COOKIE] : undefined
  };
}