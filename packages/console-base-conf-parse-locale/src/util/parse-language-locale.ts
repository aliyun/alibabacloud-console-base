import ONE_CONF from '@alicloud/console-one-config';

import {
  ELanguage,
  ELocale
} from '../enum';
import {
  LOCALE_MAP_BY_LANGUAGE
} from '../const';

import cookieGetLanguage from './cookie-get-language';

/**
 * 不经过配置项修正的 language + locale，默认从 OneConsole 的配置项下拿，非 OneConsole 从 cookie 中取，
 * 但 cookie 中只有 aliyun_lang，需要根据它映射到 locale
 * 
 * 需要注意的是，有的控制台虽然不是 OneConsole 但会自己生 ALIYUN_CONSOLE_CONFIG 比如 usercenter2.aliyun.com
 * 它只有 LOCALE 而且不标准（中文下是 zh、英文下是 en、日文是 ja、繁体还是 zh）
 */
export default function parseLanguageLocale(): [ELanguage, ELocale] {
  let lang: ELanguage;
  let locale: ELocale;
  
  if (ONE_CONF.ONE) { // OneConsole 的话，直接用
    lang = ONE_CONF.LANG as ELanguage;
    locale = ONE_CONF.LOCALE as ELocale;
  } else {
    lang = cookieGetLanguage() || ELanguage.ZH;
    locale = LOCALE_MAP_BY_LANGUAGE[lang];
    
    if (!locale) {
      lang = ELanguage.ZH;
      locale = ELocale.ZH;
    }
  }
  
  return [lang, locale];
}