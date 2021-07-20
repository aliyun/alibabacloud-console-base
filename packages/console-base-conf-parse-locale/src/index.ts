export { default } from './util/parse-locale';

export {
  ELanguage,
  ELocale
} from './const';

export { default as cookieGetLanguage } from './util/cookie-get-language';
export { default as cookieSetLanguage } from './util/cookie-set-language';

export type {
  IConfLocale as ConsoleBaseConfLocale
} from './types';
