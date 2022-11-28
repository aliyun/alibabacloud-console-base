export interface ICookieOptions {
  domain?: string;
  path?: string;
  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
   * 
   * ❗️NOTE：轻易不要设置，请看 README
   */
  sameSite?: 'None' | 'Lax' | 'Strict';
  secure?: boolean;
}

export interface ICookieSetOptions extends ICookieOptions {
  days?: number; // expires 简化版
}

export interface ICookieDeleteOptions extends ICookieOptions {}