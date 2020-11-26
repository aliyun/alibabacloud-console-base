import {
  IFetcherBuildUrlOptions
} from '../types';

import extractProtocolHost from './extract-protocol-host';
import mergeParams from './merge-params';
import serializeParams from './serialize-params';

/**
 * GET / JSONP 的参数需要放到 URL 的 search 部分，这里参数 **可能** 由以下组成：
 *  - URL 中本身的 search，这部分是字符串
 *  - `params` 传入，一般是对象，但也有可能是字符串
 * 
 * 另外，原生 fetch 的 cache option 可以做到缓存控制，但是 whatwg-fetch 貌似没有对该选项进行任何处理，
 * 所以保险起见，GET 的时候加上参数，毕竟 IE11 都还没有支持 fetch
 * 
 * 这里，我们会将以上参数混合在一起，并生成一个新 URL
 */
export default function buildUrl(url: string, {
  urlBase,
  urlCacheBusting,
  params,
  serializeOptions
}: IFetcherBuildUrlOptions): string {
  const searchIndex = url.indexOf('?');
  let urlWithoutQuery = url;
  let searchStr = '';
  
  if (searchIndex >= 0) {
    urlWithoutQuery = url.substring(0, searchIndex);
    searchStr = url.substring(searchIndex + 1);
  }
  
  // 传入了 urlBase 且 url 是相对路径，则需要将 urlBase 拼接在前部
  if (urlBase && !extractProtocolHost(urlWithoutQuery)) {
    urlWithoutQuery = `${urlBase}${urlWithoutQuery}`;
  }
  
  const finalParams = mergeParams([
    searchStr,
    urlCacheBusting ? {
      _cache_busting_: Date.now()
    } : undefined,
    params
  ], serializeOptions);
  const finalQueryStr = serializeParams(finalParams, serializeOptions);
  
  return finalQueryStr ? `${urlWithoutQuery}?${finalQueryStr}` : urlWithoutQuery;
}
