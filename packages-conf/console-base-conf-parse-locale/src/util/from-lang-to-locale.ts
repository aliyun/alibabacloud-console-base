import {
  ELanguage,
  ELocale
} from '../enum';
import {
  LOCALE_MAP_BY_LANGUAGE
} from '../const';

export default function fromLangToLocale(lang: ELanguage): ELocale | undefined {
  return LOCALE_MAP_BY_LANGUAGE[lang];
}