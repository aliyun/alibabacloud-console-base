import {
  IConfLocale,
  IWin
} from '../types';
import {
  ELanguage,
  ELocale,
  LOCALE_MAP_BY_LANGUAGE
} from '../const';

import cookieGetLanguage from './cookie-get-language';
import parseLanguages from './parse-languages';
import parseLanguage from './parse-language';

export default function parseLocale(): IConfLocale {
  const {
    CONSOLE_BASE_SETTINGS = {},
    viewframeSetting = {},
    ALIYUN_CONSOLE_CONFIG = {}
  } = window as IWin;
  const LANGUAGE_IN_COOKIE = cookieGetLanguage();
  const LANGUAGES: ELanguage[] = parseLanguages(CONSOLE_BASE_SETTINGS.LANGUAGES || viewframeSetting.languages);
  const LANGUAGE: ELanguage = parseLanguage(LANGUAGES, ALIYUN_CONSOLE_CONFIG.LANG || LANGUAGE_IN_COOKIE); // 以 OneConsole 的 LANG 为优先
  
  return {
    LANGUAGES,
    LANGUAGE,
    LOCALE: LOCALE_MAP_BY_LANGUAGE[LANGUAGE] || ELocale.ZH,
    COOKIE_LANGUAGE: LANGUAGE_IN_COOKIE,
    COOKIE_LOCALE: LANGUAGE_IN_COOKIE ? LOCALE_MAP_BY_LANGUAGE[LANGUAGE_IN_COOKIE] : undefined
  };
}
