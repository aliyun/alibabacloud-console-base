import ONE_CONF from '@alicloud/console-one-config';

import {
  ELanguage,
  ELocale
} from '../enum';

import cookieGetLanguage from './cookie-get-language';
import fromLangToLocale from './from-lang-to-locale';

/**
 * 不经过配置项修正的 language + locale，默认从 OneConsole 的配置项下拿，非 OneConsole 从 cookie 中取，
 * 但 cookie 中只有 aliyun_lang，需要根据它映射到 locale
 * 
 * 需要注意的是，有的控制台虽然不是 OneConsole 但会自己生 ALIYUN_CONSOLE_CONFIG 比如 usercenter2.aliyun.com
 * 它只有 LOCALE 而且不标准（中文下是 zh、英文下是 en、日文是 ja、繁体还是 zh）
 */
export default function parseLanguageLocale(): [ELanguage, ELocale] {
  if (ONE_CONF.ONE) { // OneConsole 的话，直接用
    return [
      ONE_CONF.LANG as ELanguage,
      ONE_CONF.LOCALE as ELocale
    ];
  }
  
  let lang = cookieGetLanguage() || ELanguage.ZH;
  let locale = fromLangToLocale(lang);
  
  if (!locale) {
    lang = ELanguage.ZH;
    locale = ELocale.ZH;
  }
  
  return [lang, locale];
}