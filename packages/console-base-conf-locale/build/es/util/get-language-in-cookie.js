import { getCookie } from '@alicloud/cookie';
import { COOKIE_KEY } from '../const';
export default function getLanguageInCookie() {
  return getCookie(COOKIE_KEY);
}