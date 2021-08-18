import {
  IConfLocale,
  IWin
} from '../types';
import {
  ELanguage,
  LOCALE_MAP_BY_LANGUAGE
} from '../const';

import parseLanguages from './parse-languages';
import parseLanguageLocale from './parse-language-locale';

export default function parseConfLocale(): IConfLocale {
  const {
    CONSOLE_BASE_SETTINGS = {},
    viewframeSetting = {}
  } = window as IWin;
  const LANGUAGES: ELanguage[] = parseLanguages(CONSOLE_BASE_SETTINGS.LANGUAGES || viewframeSetting.languages);
  let [LANGUAGE, LOCALE] = parseLanguageLocale();
  
  // 根据配置项进行降级
  // 当前语言不支持的情况下：繁体降级到简体，其它到英文
  if (!LANGUAGES.includes(LANGUAGE)) {
    if (LANGUAGE === ELanguage.ZT) {
      LANGUAGE = LANGUAGES.includes(ELanguage.ZH) ? ELanguage.ZH : ELanguage.EN;
    } else {
      LANGUAGE = ELanguage.EN;
    }
    
    LOCALE = LOCALE_MAP_BY_LANGUAGE[LANGUAGE];
  }
  
  return {
    LOCALE,
    LANGUAGE,
    LANGUAGES
  };
}
