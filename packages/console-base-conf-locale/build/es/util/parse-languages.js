import _intersection from 'lodash/intersection';
import { ELanguage, LANGUAGES_DEFAULT, LANGUAGES_ALL } from '../const';
/**
 * 获取控制台支持的语言，这里表示控制台能够支持这些语言，但右上角的切换语言菜单还会根据功能开关来决定是否要展示该语言。
 * 无论如何，支持的语言中，英语和中文肯定是有的。
 */

export default function parseLanguages() {
  var languagesInSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (!languagesInSettings.length) {
    return LANGUAGES_DEFAULT;
  }

  var languages = _intersection(languagesInSettings, LANGUAGES_ALL); // 保证英语和简体中文一定存在


  if (!languages.includes(ELanguage.EN)) {
    languages.unshift(ELanguage.EN);
  }

  if (!languages.includes(ELanguage.ZH)) {
    languages.push(ELanguage.ZH);
  }

  return languages;
}