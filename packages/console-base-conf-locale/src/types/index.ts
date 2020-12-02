import {
  ELocale,
  ELanguage
} from '../const';

export interface IWin extends Window {
  CONSOLE_BASE_SETTINGS?: {
    LANGUAGES?: ELanguage[]; // 支持的语言列表
  };
  viewframeSetting?: { // 兼容旧版 - TODO 杀
    languages?: ELanguage[];
  };
}

export interface IConfLocale {
  LANGUAGES: ELanguage[];
  LANGUAGE: ELanguage;
  LOCALE: ELocale;
  LANGUAGE_IN_COOKIE: ELanguage;
  LOCALE_FROM_COOKIE: ELocale;
}
