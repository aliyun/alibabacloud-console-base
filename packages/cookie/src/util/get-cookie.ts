import getAllCookies from './get-all-cookies';

/**
 * 获取单个 cookie
 */
export default function getCookie(name: string): string | undefined {
  return getAllCookies()[name];
}
