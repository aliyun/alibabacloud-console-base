import {
  ELanguage,
  LANGUAGES_ALL
} from '../const';

/**
 * 获取控制台支持的语言，这里表示控制台能够支持这些语言，但右上角的切换语言菜单还会根据功能开关来决定是否要展示该语言。
 * 无论如何，支持的语言中，英语和中文肯定是有的。
 */
export default function parseLanguages(languagesInSettings: ELanguage[] = []): ELanguage[] {
  if (!languagesInSettings.length) {
    return [ELanguage.EN, ELanguage.ZH, ELanguage.ZT, ELanguage.JA];
  }
  
  const languages: ELanguage[] = [ELanguage.EN, ELanguage.ZH];
  
  languagesInSettings.forEach(v => {
    if (!languages.includes(v) && LANGUAGES_ALL.includes(v)) {
      languages.push(v);
    }
  });
  
  return languages;
}
