/**
 * 扩展了的 fetch options
 */
export interface IFetchOptions extends Omit<RequestInit, 'headers'> {
  timeout?: number;
  // 原生的 headers 的 Record<string, string> 用起来很不爽力
  headers?: HeadersInit | Record<string, string | number | boolean>;
}
