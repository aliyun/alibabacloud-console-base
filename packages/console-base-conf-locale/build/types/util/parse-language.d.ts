import { ELanguage } from '../const';
/**
 * 根据 cookie 中的值（外传）和配置中允许的 languages（外传）决定最终的 language（有可能和 cookie 中的值相左）
 */
export default function parseLanguage(languages: ELanguage[], languageFromCookie?: ELanguage): ELanguage;
