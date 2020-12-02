var ua = window.navigator.userAgent; // Windows 的标识一般是「Windows NT x.y」，这里把 x.y 映射成耳熟能详的 Windows 版本

var WINDOWS_NT_TO_VERSION = {
  'NT 5.0': '2000',
  'NT 5.1': 'XP',
  'NT 5.2': 'XP',
  'NT 6.0': 'Vista',
  'NT 6.1': '7',
  'NT 6.2': '8',
  'NT 6.3': '8.1',
  'NT 6.4': '10',
  'NT 10.0': '10'
};
/**
 * 从 UA 中获取 OS 信息，不需要精确，覆盖 95% 即可
 */

export function getUaOs() {
  // Windows
  // 标识 `Windows NT x.y`，其他的 Windows ME、Windows 98 就不管了
  if (/Windows NT ([\w.]+)/i.test(ua)) {
    var ntVersion = "NT ".concat(RegExp.$1);
    return ['Windows', WINDOWS_NT_TO_VERSION[ntVersion] || ntVersion];
  } // 古旧 Windows


  if (/Windows/i.test(ua)) {
    return ['Windows', 'OLD'];
  } // MacOS
  // e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:78.0) Gecko/20100101 Firefox/78.0
  // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15


  if (/Mac OS X ([\w.]+)/i.test(ua)) {
    return ['MacOS', RegExp.$1];
  } // Android
  // e.g. Mozilla/5.0 (Linux; Android 7.0; Pixel C Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Safari/537.36


  if (/Android ([\w.]+)+/i.test(ua)) {
    return ['Android', RegExp.$1];
  } // Ubuntu
  // e.g. Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1


  if (/Ubuntu/i.test(ua)) {
    return ['Ubuntu', ''];
  } // ChromeOS
  // e.g. Mozilla/5.0 (X11; CrOS i686 4319.74.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36


  if (/CrOS/i.test(ua)) {
    return ['ChromeOS', ''];
  } // FreeBSD
  // e.g. Mozilla/5.0 (X11; FreeBSD amd64) AppleWebKit/536.5 (KHTML like Gecko) Chrome/19.0.1084.56 Safari/1EA69


  if (/FreeBSD/i.test(ua)) {
    return ['FreeBSD', ''];
  } // Linux
  // e.g. Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1


  if (/Linux/i.test(ua)) {
    return ['Linux', ''];
  }

  return ['OTHER', '?'];
}
/**
 * 从 UA 中获取浏览器信息，不需要精确，覆盖 95% 即可
 */

export function getUaBrowser() {
  // Edge
  // http://useragentstring.com/pages/useragentstring.php?name=Edge
  // e.g. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18363
  if (/Edge\/([\w.]+)/i.test(ua)) {
    return ['Edge', RegExp.$1];
  } // IE11
  // e.g. Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; ...; rv:11.0) like Gecko


  if (/Trident\/7\.0;/i.test(ua)) {
    return ['IE', '11.0'];
  } // IE
  // http://useragentstring.com/pages/useragentstring.php?name=Internet+Explorer
  // e.g. Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko


  if (/MSIE\s+([\w.]+)/i.test(ua)) {
    return ['IE', RegExp.$1];
  } // Opera Presto 引擎时期版本
  // http://useragentstring.com/pages/useragentstring.php?name=Opera
  // e.g. Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16.2
  // e.g. Mozilla/5.0 (Windows NT 5.1; U; en; rv:1.8.1) Gecko/20061208 Firefox/2.0.0 Opera 9.50


  if (/Opera[/ ]([\w.]+)/i.test(ua)) {
    return ['Opera', RegExp.$1];
  } // Opera
  // e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36 OPR/67.0.3575.79


  if (/OPR\/([\w.]+)/i.test(ua)) {
    return ['Opera', RegExp.$1];
  } // Firefox
  // http://useragentstring.com/pages/useragentstring.php?name=Firefox
  // e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:78.0) Gecko/20100101 Firefox/78.0


  if (/Firefox\/([\w.]+)/i.test(ua)) {
    return ['Firefox', RegExp.$1];
  } // Safari
  // e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15


  if (/Version\/([\w.]+)\s+Safari\//i.test(ua)) {
    return ['Safari', RegExp.$1];
  } // Yandex
  // e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 YaBrowser/20.2.0.1145 Yowser/2.5 Safari/537.36


  if (/YaBrowser\/([\w.]+)/i.test(ua)) {
    return ['Yandex', RegExp.$1];
  } // 淘宝
  // e.g. Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.11 TaoBrowser/2.0 Safari/536.11


  if (/TaoBrowser\/([\w.]+)/i.test(ua)) {
    return ['TaoBao', RegExp.$1];
  } // 猎豹
  // e.g. Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.71 Safari/537.1 LBBROWSER


  if (/LBBROWSER/i.test(ua)) {
    return ['LieBao', RegExp.$1];
  } // QQ
  // e.g. Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; .... QQBrowser/7.0.3698.400)


  if (/QQBrowser\/([\w.]+)/i.test(ua)) {
    return ['QQ', RegExp.$1];
  } // 搜狗
  // e.g. Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.84 Safari/535.11 SE 2.X MetaSr 1.0


  if (/\sSE\s([\w.]+)/i.test(ua)) {
    return ['SouGou', RegExp.$1];
  } // 傲游
  // Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.3.4000 Chrome/30.0.1599.101 Safari/537.36


  if (/Maxthon\/([\w.]+)/i.test(ua)) {
    return ['Maxthon', RegExp.$1];
  } // UC
  // e.g. Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 UBrowser/4.0.3214.0 Safari/537.36


  if (/UBrowser\/([\w.]+)/i.test(ua)) {
    return ['UC', RegExp.$1];
  } // HeadlessChrome
  // e.g. Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/69.0.3494.0 Safari/537.36


  if (/HeadlessChrome\/([\w.]+)/i.test(ua)) {
    return ['HeadlessChrome', RegExp.$1];
  } // Chrome
  // 几乎所有基于它的都会被判成 Chrome...
  // http://useragentstring.com/pages/useragentstring.php?name=Chrome
  // e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36


  if (/\sChrome\/([\w.]+)/i.test(ua)) {
    return ['Chrome', RegExp.$1];
  }

  return ['OTHER', '?'];
}