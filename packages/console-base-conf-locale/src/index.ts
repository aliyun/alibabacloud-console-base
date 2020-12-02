import {
  IConfLocale as ConsoleBaseConfLocale
} from './types';
import {
  ELanguage,
  ELocale
} from './const';
import parseConfLocale from './util/parse-conf-locale';
import switchLanguage from './util/switch-language';

export default parseConfLocale();

export {
  ELocale,
  ELanguage,
  switchLanguage
};

export type {
  ConsoleBaseConfLocale
};
