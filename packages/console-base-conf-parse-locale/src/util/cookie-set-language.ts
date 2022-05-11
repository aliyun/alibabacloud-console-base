import {
  setCookie
} from '@alicloud/cookie';

import {
  ELanguage
} from '../enum';
import {
  COOKIE_KEY
} from '../const';

export default function cookieSetLanguage(lang: ELanguage): void {
  setCookie(COOKIE_KEY, lang);
}
