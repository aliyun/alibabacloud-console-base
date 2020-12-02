/**
 * 纯 jsonp options
 */
export interface IJsonpOptions {
    timeout?: number;
    charset?: string;
    jsonpCallback?: string;
    jsonpCallbackFunction?: string;
}
/**
 * 模仿 Response 对象，fetch 的 Response 对象包含如下属性
 * - body: ReadableStream;
 * - bodyUsed: boolean;
 * - headers: Headers; // JSONP 无法有 headers
 * - redirected: boolean;
 * - ok: boolean; // 跟 status 有关，对应 status 在 200-299 范围内，所以 status 和 statusText 就直接忽略了
 * - status: number;
 * - statusText: string;
 * - type: string; // basic
 * - url: string;
 * - json(): Promise<any>;
 */
export interface IJsonpResponse<T = void> {
    ok: boolean;
    url: string;
    json(): Promise<T>;
}
