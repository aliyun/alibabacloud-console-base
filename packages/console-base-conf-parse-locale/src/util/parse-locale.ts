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
  const LOCALE: ELocale = ALIYUN_CONSOLE_CONFIG.LOCALE || LOCALE_MAP_BY_LANGUAGE[LANGUAGE] || ELocale.ZH;
  
  return {
    LANGUAGES,
    LANGUAGE: LOCALE === ELocale.ZT && LANGUAGE !== ELanguage.ZT ? ELanguage.ZT : LANGUAGE, // 修正 OneConsole 的错误
    LOCALE,
    COOKIE_LANGUAGE: LANGUAGE_IN_COOKIE,
    COOKIE_LOCALE: LANGUAGE_IN_COOKIE ? LOCALE_MAP_BY_LANGUAGE[LANGUAGE_IN_COOKIE] : undefined
  };
}
