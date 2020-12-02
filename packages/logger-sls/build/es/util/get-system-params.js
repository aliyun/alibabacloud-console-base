import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { getUaBrowser, getUaOs } from './ua';
var IN_IFRAME = window !== window.top;

var _getUaBrowser = getUaBrowser(),
    _getUaBrowser2 = _slicedToArray(_getUaBrowser, 2),
    BROWSER = _getUaBrowser2[0],
    BROWSER_VERSION = _getUaBrowser2[1];

var _getUaOs = getUaOs(),
    _getUaOs2 = _slicedToArray(_getUaOs, 2),
    OS = _getUaOs2[0],
    OS_VERSION = _getUaOs2[1];
/**
 * 获取系统参数（最基础的日志参数）
 */


export default function getSystemParams() {
  return {
    BROWSER: BROWSER,
    BROWSER_VERSION: BROWSER_VERSION,
    OS: OS,
    OS_VERSION: OS_VERSION,
    IN_IFRAME: IN_IFRAME,
    TIME: Date.now(),
    // 浏览器时间，日志其实有自己的时间 `__tag__:__receive_time__`，但它是秒，且它仅表示服务端接收到的时间
    REFERRER: document.referrer,
    LOCATION_HOST: window.location.host,
    LOCATION_PATHNAME: window.location.pathname,
    LOCATION_SEARCH: window.location.search.replace('?', '&') // 保证下一个正则不会误伤
    .replace(/&(?:spm|scm|accounttraceid)=[^&]+/g, '') // 剔除 spm、scm、accounttraceid 等非应用参数
    .replace(/^&+/, ''),
    // 去掉起首的 &，让 search 更纯粹
    LOCATION_HASH: window.location.hash.substring(1)
  };
}