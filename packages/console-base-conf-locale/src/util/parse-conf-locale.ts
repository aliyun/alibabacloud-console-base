import {
  IConfLocale,
  IWin
} from '../types';
import {
  ELanguage,
  ELocale,
  LOCALE_MAP_BY_LANGUAGE
} from '../const';

import getLanguageInCookie from './get-language-in-cookie';
import parseLanguages from './parse-languages';
import parseLanguage from './parse-language';

export default function parseConfLocale(): IConfLocale {
  const {
    CONSOLE_BASE_SETTINGS = {},
    viewframeSetting = {}
  } = window as IWin;
  const LANGUAGE_IN_COOKIE = getLanguageInCookie();
  const LANGUAGES: ELanguage[] = parseLanguages(CONSOLE_BASE_SETTINGS.LANGUAGES || viewframeSetting.languages);
  const LANGUAGE: ELanguage = parseLanguage(LANGUAGES, LANGUAGE_IN_COOKIE);
  
  return {
    LANGUAGES,
    LANGUAGE,
    LOCALE: LOCALE_MAP_BY_LANGUAGE[LANGUAGE] || ELocale.ZH,
    LANGUAGE_IN_COOKIE,
    LOCALE_FROM_COOKIE: LANGUAGE_IN_COOKIE ? LOCALE_MAP_BY_LANGUAGE[LANGUAGE_IN_COOKIE] : undefined
  };
}
