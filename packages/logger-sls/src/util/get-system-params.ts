import {
  getUaBrowser,
  getUaOs
} from './ua';

interface ISystemParams {
  BROWSER: string;
  BROWSER_VERSION: string;
  OS: string;
  OS_VERSION: string;
  IN_IFRAME: boolean;
  TIME: number;
  REFERRER: string;
  LOCATION_HOST: string;
  LOCATION_PATHNAME: string;
  LOCATION_SEARCH: string; // 去掉 ?
  LOCATION_HASH: string; // 去掉 #
}

const IN_IFRAME: boolean = window !== window.top;
const [BROWSER, BROWSER_VERSION] = getUaBrowser();
const [OS, OS_VERSION] = getUaOs();

/**
 * 获取系统参数（最基础的日志参数）
 */
export default function getSystemParams(): ISystemParams {
  return {
    BROWSER,
    BROWSER_VERSION,
    OS,
    OS_VERSION,
    IN_IFRAME,
    TIME: Date.now(), // 浏览器时间，日志其实有自己的时间 `__tag__:__receive_time__`，但它是秒，且它仅表示服务端接收到的时间
    REFERRER: document.referrer,
    LOCATION_HOST: window.location.host,
    LOCATION_PATHNAME: window.location.pathname,
    LOCATION_SEARCH: window.location.search.replace('?', '&') // 保证下一个正则不会误伤
        .replace(/&(?:spm|scm|accounttraceid)=[^&]+/g, '') // 剔除 spm、scm、accounttraceid 等非应用参数
        .replace(/^&+/, ''), // 去掉起首的 &，让 search 更纯粹
    LOCATION_HASH: window.location.hash.substring(1)
  };
}
