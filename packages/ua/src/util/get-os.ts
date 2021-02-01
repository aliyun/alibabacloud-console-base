import {
  EOsType
} from '../const';

// Windows 的标识一般是「Windows NT x.y」，这里把 x.y 映射成耳熟能详的 Windows 版本
const WINDOWS_NT_TO_VERSION: Record<string, string> = {
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
 * 
 * 注意顺序不要轻易改
 */
export default function getOs(ua: string): [EOsType, string] {
  /**
   * Windows
   * 标识 `Windows NT x.y`，其他的 Windows ME、Windows 98 就不管了
   * 
   * Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.76 Safari/537.36
   */
  if (/Windows/i.test(ua)) {
    if (/Windows NT ([^ /;()]+)/i.test(ua)) {
      const ntVersion = `NT ${RegExp.$1}`;
      
      return [EOsType.WINDOWS, WINDOWS_NT_TO_VERSION[ntVersion] || ntVersion];
    }
    
    // Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 1520)
    if (/Windows Phone[/ ]([^ /;()]+)/i.test(ua)) {
      return [EOsType.WINDOWS_PHONE, RegExp.$1];
    }
    
    // Opera/9.80 (Windows Mobile; Opera Mini/5.1.21594/37.6270; U; en) Presto/2.12.423 Version/12.16
    if (/Windows Mobile/i.test(ua)) {
      return [EOsType.WINDOWS_MOBILE, ''];
    }
    
    return [EOsType.WINDOWS, ''];
  }
  
  // MacOS
  // e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:78.0) Gecko/20100101 Firefox/78.0
  // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15
  if (/Mac OS X ([^ /;()]+)/i.test(ua)) {
    return [EOsType.MAC_OS, RegExp.$1.replace(/_/g, '.')];
  }
  
  // iOs - iPhone + iPad
  // Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1
  // Mozilla/5.0 (iPad; U; CPU OS 4_3_3 like Mac OS X; nl-nl) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5
  if (/iPhone|iPad/i.test(ua)) {
    if (/CPU (?:iPhone )?OS ([^ /;()]+)/i.test(ua)) { // iPad 是 CPU OS，iPhone 是 CPU iPhone OS
      return [EOsType.IOS, RegExp.$1.replace(/_/g, '.')];
    }
  }
  
  // linux family
  if (/Linux/i.test(ua)) {
    // Android
    // e.g. Mozilla/5.0 (Linux; Android 7.0; Pixel C Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Safari/537.36
    if (/Android ([^ /;()]+)+/i.test(ua)) {
      return [EOsType.ANDROID, RegExp.$1];
    }
    
    // Ubuntu
    // Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.13) Gecko/20101206 Ubuntu/8.04 (hardy) Firefox/3.6.13
    // e.g. Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1
    if (/Ubuntu\/([^ /;()]+)/i.test(ua)) {
      return [EOsType.UBUNTU, RegExp.$1];
    }
    
    if (/Ubuntu/i.test(ua)) {
      return [EOsType.UBUNTU, ''];
    }
    
    // Fedora
    // Mozilla/5.0 (X11;Linux x86_64) AppleWebKit/537.36 (KHTML,like Gecko) Fedora/20 () Chromium40.0.2194.0 Safari/537.36
    // Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:41.0) Gecko/20100101 Firefox/41.0
    if (/Fedora\/([^ /;()]+)/i.test(ua)) {
      return [EOsType.FEDORA, RegExp.$1];
    }
    
    if (/Fedora/i.test(ua)) {
      return [EOsType.FEDORA, ''];
    }
    
    // Red Hat
    // Mozilla/5.0 (X11; Red Hat Enterprise; Linux i686; rv:41.0) Gecko/20100101 Firefox/41.0
    // Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.22) Gecko/20110904 Red Hat/3.6-1.el5_7 Firefox/3.6.22
    if (/Red Hat\/([^ /;()]+)/i.test(ua)) {
      return [EOsType.RED_HAT, RegExp.$1];
    }
    
    if (/Red Hat/i.test(ua)) {
      return [EOsType.RED_HAT, ''];
    }
    
    // SUSE
    // Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36 SUSE/33.0.1750.152
    if (/SUSE\/([^ /;()]+)/i.test(ua)) {
      return [EOsType.SUSE, RegExp.$1];
    }
    
    return [EOsType.LINUX, ''];
  }
  
  // ChromeOS
  // e.g. Mozilla/5.0 (X11; CrOS i686 4319.74.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36
  if (/CrOS/i.test(ua)) {
    return [EOsType.CHROME_OS, ''];
  }
  
  // FreeBSD
  // e.g. Mozilla/5.0 (X11; FreeBSD amd64) AppleWebKit/536.5 (KHTML like Gecko) Chrome/19.0.1084.56 Safari/1EA69
  if (/FreeBSD/i.test(ua)) {
    return [EOsType.FREE_BSD, ''];
  }
  
  return [EOsType.OTHER, ''];
}
