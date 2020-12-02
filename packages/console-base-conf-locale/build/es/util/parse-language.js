import { ELanguage } from '../const';
/**
 * 根据 cookie 中的值（外传）和配置中允许的 languages（外传）决定最终的 language（有可能和 cookie 中的值相左）
 */

export default function parseLanguage(languages, languageFromCookie) {
  var lang = languageFromCookie || ELanguage.ZH; // 当前语言不支持的情况下，开始降级：繁体降级到简体，其它到英文

  if (!languages.includes(lang)) {
    if (lang === ELanguage.ZT) {
      return languages.includes(ELanguage.ZH) ? ELanguage.ZH : ELanguage.EN;
    }

    return ELanguage.EN;
  }

  return lang;
}