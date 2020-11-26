import {
  getCookie
} from '@alicloud/cookie';

import {
  ELanguage,
  COOKIE_KEY
} from '../const';

export default function getLanguageInCookie(): ELanguage | undefined {
  return getCookie(COOKIE_KEY) as (ELanguage | undefined);
}
