import {
  ELanguage,
  ELocale
} from './enum';

export const COOKIE_KEY = 'aliyun_lang';

export const LANGUAGES_DEFAULT: ELanguage[] = [
  ELanguage.EN,
  ELanguage.ZH,
  ELanguage.ZT,
  ELanguage.JA
];

export const LANGUAGES_ALL: ELanguage[] = [
  ELanguage.EN,
  ELanguage.ZH,
  ELanguage.ZT,
  ELanguage.JA,
  ELanguage.KO,
  ELanguage.FR,
  ELanguage.DE
];

export const LOCALE_MAP_BY_LANGUAGE: Record<ELanguage, ELocale> = {
  [ELanguage.ZH]: ELocale.ZH,
  [ELanguage.ZT]: ELocale.ZT,
  [ELanguage.EN]: ELocale.EN,
  [ELanguage.JA]: ELocale.JA,
  [ELanguage.KO]: ELocale.KO,
  [ELanguage.FR]: ELocale.FR,
  [ELanguage.DE]: ELocale.DE
};
