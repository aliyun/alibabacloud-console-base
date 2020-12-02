import setCookie from './set-cookie';
/**
 * 删除 cookie，其实设置一个过期时间为此刻之前的时间，浏览器会自动清理过期的 cookie（其实这里设不设值都无所谓）
 */

export default function deleteCookie(name) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      domain = _ref.domain,
      path = _ref.path;

  setCookie(name, '', {
    domain: domain,
    path: path,
    days: -1
  });
}