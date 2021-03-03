import getAllCookies from './get-all-cookies';

/**
 * 获取单个 cookie
 */
export default function getCookie<T extends string = string>(name: string): T | undefined {
  return getAllCookies()[name] as T | undefined;
}
