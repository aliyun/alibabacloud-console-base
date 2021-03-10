import {
  EBrowserType
} from '../const';

/**
 * Opera、Safari 会用 Version/xx 来表示浏览器的版本
 */
function getVersion(fallback: string, ua: string): string {
  if (/Version\/([^ /;()]+)/i.test(ua)) {
    return RegExp.$1;
  }
  
  return fallback;
}

/**
 * 从 UA 中获取浏览器信息，不需要精确，覆盖 95% 即可
 * 
 * 注意顺序不要轻易改
 */
export default function getBrowser(ua: string): [EBrowserType, string] {
  // OperaMini
  // Opera/9.80 (Windows Mobile; Opera Mini/5.1.21594/37.6270; U; en) Presto/2.12.423 Version/12.16
  if (/Opera Mini\/([^ /;()]+)/i.test(ua)) {
    return [EBrowserType.OPERA_MINI, RegExp.$1];
  }
  
  // e.g. Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16.2
  // e.g. Mozilla/5.0 (Windows NT 5.1; U; en; rv:1.8.1) Gecko/20061208 Firefox/2.0.0 Opera 9.50
  if (/Opera[/ ]([^ /;()]+)/i.test(ua)) {
    return [EBrowserType.OPERA, getVersion(RegExp.$1, ua)];
  }
  
  // Opera
  // e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36 OPR/67.0.3575.79
  if (/OPR\/([^ /;()]+)/i.test(ua)) {
    return [EBrowserType.OPERA, RegExp.$1];
  }
  
  // Firefox
  // e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:85.0) Gecko/20100101 Firefox/85.0
  if (/Firefox\/([^ /;()]+)/i.test(ua)) {
    return [EBrowserType.FIREFOX, RegExp.$1];
  }
  
  // Safari
  // e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15
  if (/Version\/([\w.]+)\s+Safari\//i.test(ua)) { // 不要拆开，因为太多浏览器里边有 Safari 了
    return [EBrowserType.SAFARI, RegExp.$1];
  }
  
  // Yandex
  // e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 YaBrowser/20.2.0.1145 Yowser/2.5 Safari/537.36
  if (/YaBrowser\/([^ /;()]+)/i.test(ua)) {
    return [EBrowserType.YANDEX, RegExp.$1];
  }
  
  // 淘宝
  // e.g. Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.11 TaoBrowser/2.0 Safari/536.11
  if (/TaoBrowser\/([^ /;()]+)/i.test(ua)) {
    return [EBrowserType.TAO_BAO, RegExp.$1];
  }
  
  // 猎豹
  // e.g. Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.71 Safari/537.1 LBBROWSER
  if (/LBBROWSER/i.test(ua)) {
    return [EBrowserType.LIE_BAO, ''];
  }
  
  // QQ
  // e.g. Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; .... QQBrowser/7.0.3698.400)
  if (/QQBrowser\/([^ /;()]+)/i.test(ua)) {
    return [EBrowserType.QQ, RegExp.$1];
  }
  
  // 搜狗
  // e.g. Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.84 Safari/535.11 SE 2.X MetaSr 1.0
  if (/\sSE\s([^ /;()]+)/i.test(ua)) {
    return [EBrowserType.SOU_GOU, RegExp.$1];
  }
  
  // 傲游
  // Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.3.4000 Chrome/30.0.1599.101 Safari/537.36
  if (/Maxthon\/([^ /;()]+)/i.test(ua)) {
    return [EBrowserType.MAXTHON, RegExp.$1];
  }
  
  // UC
  // e.g. Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 UBrowser/4.0.3214.0 Safari/537.36
  if (/UBrowser\/([^ /;()]+)/i.test(ua)) {
    return [EBrowserType.UC, RegExp.$1];
  }
  
  // HeadlessChrome
  // e.g. Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/69.0.3494.0 Safari/537.36
  if (/HeadlessChrome\/([^ /;()]+)/i.test(ua)) {
    return [EBrowserType.HEADLESS_CHROME, RegExp.$1];
  }
  
  // Edge
  // e.g. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18363
  // e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36 Edg/89.0.774.48
  if (/Edge?\/([^ /;()]+)/i.test(ua)) {
    return [EBrowserType.EDGE, RegExp.$1];
  }
  
  // IE11
  // e.g. Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko
  if (/Trident\/7\.0;/i.test(ua)) {
    return [EBrowserType.IE, '11'];
  }
  
  // e.g. Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko
  if (/MSIE\s+([^ /;()]+)/i.test(ua)) {
    return [EBrowserType.IE, RegExp.$1];
  }
  
  // Chrome
  // 几乎所有基于它的都会被判成 Chrome...
  // e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36
  if (/\sChrome\/([^ /;()]+)/i.test(ua)) {
    return [EBrowserType.CHROME, RegExp.$1];
  }
  
  return [EBrowserType.OTHER, ''];
}
