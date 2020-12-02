import { setCookie } from '@alicloud/cookie';
import { COOKIE_KEY } from '../const';
export default function setLanguageInCookie(lang) {
  setCookie(COOKIE_KEY, lang);
}