import { getCookie } from '@alicloud/cookie';
import { COOKIE_SEC_TOKEN } from '../const';
export default function cookieGetToken() {
  return getCookie(COOKIE_SEC_TOKEN) || '';
}