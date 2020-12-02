import { IJsonpOptions, IJsonpResponse } from '../types';
/**
 * 一个「纯」的 Promise 封装的 JSONP
 *
 * 参考 https://github.com/camsong/fetch-jsonp
 */
export default function jsonp<T = void>(url?: string, { timeout, charset, jsonpCallback, jsonpCallbackFunction }?: IJsonpOptions): Promise<IJsonpResponse<T>>;
