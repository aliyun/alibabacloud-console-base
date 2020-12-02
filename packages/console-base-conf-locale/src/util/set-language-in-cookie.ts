import {
  setCookie
} from '@alicloud/cookie';

import {
  ELanguage,
  COOKIE_KEY
} from '../const';

export default function setLanguageInCookie(lang: ELanguage): void {
  setCookie(COOKIE_KEY, lang);
}
