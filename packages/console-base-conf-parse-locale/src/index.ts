export { default } from './util/parse-conf-locale';

export {
  ELanguage,
  ELocale
} from './enum';

export { default as cookieGetLanguage } from './util/cookie-get-language';
export { default as cookieSetLanguage } from './util/cookie-set-language';

export type {
  IConfLocale as ConsoleBaseConfLocale
} from './types';
