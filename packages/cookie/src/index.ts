export { default as getAllCookies } from './util/get-all-cookies';
export { default as getCookie } from './util/get-cookie';
export { default as setCookie } from './util/set-cookie';
export { default as deleteCookie } from './util/delete-cookie';

export type {
  ICookieSetOptions as CookieSetOptions,
  ICookieDeleteOptions as CookieDeleteOptions
} from './types';
