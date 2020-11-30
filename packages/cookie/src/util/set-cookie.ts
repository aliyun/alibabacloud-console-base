import {
  ICookieSetOptions
} from '../types';

import getExpireDate from './get-expire-date';
import getDomain from './get-domain';

/**
 * 设置 cookie，默认为时间为 180 天，设置 extra.days 为 0 可以保存为 session cookie
 */
export default function setCookie(name: string, value: string, {
  domain = getDomain(),
  path = '/',
  days = 180
}: ICookieSetOptions = {}): void {
  document.cookie = [
    `${name}=${encodeURIComponent(value)}`,
    `domain=${domain}`,
    `path=${path}`,
    `expires=${getExpireDate(days)}`
  ].join(';');
}
