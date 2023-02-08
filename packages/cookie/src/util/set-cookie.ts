import {
  ICookieSetOptions
} from '../types';

import getExpireDate from './get-expire-date';
import getDomain from './get-domain';

/**
 * 设置 cookie，默认为时间为 180 天，设置 extra.days 为 0 可以保存为 session cookie
 * 
 * HTTP 下，非 Iframe、Iframe 不跨域、Iframe 跨子域（跨全域都不行）成功的测试用例：
 *
 * | SameSite     | Secure      | Firefox | Chrome | Safari |
 * |--------------|-------------|---------|--------|--------|
 * | `undefined`  | `undefined` | ✅       | ✅      | ✅      |
 * | Lax          | `undefined` | ✅       | ✅      | ✅      |
 * | Strict       | `undefined` | ✅       | ✅      | ✅      |
 *
 * HTTPS 下，非 Iframe、Iframe 不跨域、Iframe 跨子域、Iframe 跨全域（Safari 都不行）成功的测试用例：
 *
 * | SameSite     | Secure      | Firefox | Chrome | Safari |
 * |--------------|-------------|---------|--------|--------|
 * | None         | `true`      | ✅       | ✅      | ✅      |
 * | None         | `false`     | ✅       | ✅      | ✅      |
 *
 * 1. 若 HTTPS，则 `sameSite=None; secure=true`
 * 2. 若 HTTP，则 `SameSite` 和 `secure` 不设置
 */
export default function setCookie(name: string, value: string | number | boolean, {
  domain = getDomain(),
  path = '/',
  days = 180,
  sameSite: sameSite0,
  secure: secure0
}: ICookieSetOptions = {}): void {
  const parts: string[] = [
    `${name}=${encodeURIComponent(value)}`,
    `domain=${domain}`,
    `path=${path}`,
    `expires=${getExpireDate(days)}`
  ];
  let sameSite = sameSite0;
  let secure = secure0;
  
  // 自动 sameSite + secure
  if (location.protocol === 'https:' && sameSite === undefined && secure === undefined) {
    sameSite = 'None';
    secure = true;
  }
  
  if (sameSite !== undefined) {
    parts.push(`sameSite=${sameSite}`);
  }
  
  if (secure !== undefined) {
    parts.push(`secure=${secure}`);
  }
  
  document.cookie = parts.join('; ');
}
