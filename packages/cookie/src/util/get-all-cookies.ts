/**
 * 获取当前页面可以访问到的全部 cookie
 */
export default function getAllCookies(): Record<string, string> {
  return document.cookie ? document.cookie.split(/\s*;\s*/).reduce((result: Record<string, string>, v) => {
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
  }, {}) : {};
}
