interface ICookies {
  [k: string]: string;
}

const DEFAULT_COOKIE_DOMAIN = ((): string => {
  const {
    location: {
      hostname
    }
  } = window;
  
  if (/^\d[\d.]*\d$/.test(hostname)) { // 纯 IP，直接返回
    return hostname;
  }
  
  const arr = hostname.split('.');
  
  if (arr.length >= 3) { // 返回二级域名
    return `.${arr[arr.length - 2]}.${arr[arr.length - 1]}`;
  }
  
  return hostname;
})();

function getExpireDate(days: number): string {
  if (!days) {
    return ''; // session cookie
  }
  
  const d = new Date(); // 过期时间
  
  d.setDate(d.getDate() + days);
  
  return d.toUTCString();
}

/**
 * 获取当前页面可以访问到的全部 cookie
 */
export function getAllCookies(): ICookies {
  return document.cookie.split(/\s*;\s*/).reduce((result: ICookies, v) => {
    const [cookieName, cookieValue] = v.split('=');
    
    // 原来的实现有问题，set 的时候用的是 `escape`，get 的时候用的是 `decodeURIComponent`，这在大多数情况下
    // 没有问题，但，当 set 了一个中文的，就会抛错「URIError: malformed URI sequence」
    // 这里做一下兼容，因为大部分情况下 `decodeURIComponent(escape(value)) === value`
    try {
      result[cookieName] = decodeURIComponent(cookieValue);
    } catch (e) {
      result[cookieName] = unescape(cookieValue);
    }
    
    return result;
  }, {});
}

/**
 * 获取单个 cookie
 */
export function getCookie(name: string): string | undefined {
  return getAllCookies()[name];
}

/**
 * 设置 cookie，默认为时间为 180 天，设置 extra.days 为 0 可以保存为 session cookie
 */
export function setCookie(name: string, value: string, {
  domain = DEFAULT_COOKIE_DOMAIN,
  path = '/',
  days = 180,
  encoding = true
}: {
  domain?: string;
  path?: string;
  days?: number;
  encoding?: boolean;
} = {}): void {
  document.cookie = [
    `${name}=${encoding ? encodeURIComponent(value) : value}`,
    `domain=${domain}`,
    `path=${path}`,
    `expires=${getExpireDate(days)}`
  ].join(';');
}

/**
 * 删除 cookie，其实设置一个过期时间为此刻之前的时间，浏览器会自动清理过期的 cookie（其实这里设不设值都无所谓）
 */
export function deleteCookie(name: string, {
  domain,
  path
}: {
  domain?: string;
  path?: string;
} = {}): void {
  setCookie(name, '', {
    domain,
    path,
    days: -1
  });
}
