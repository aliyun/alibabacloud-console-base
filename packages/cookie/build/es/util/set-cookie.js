import getExpireDate from './get-expire-date';
import getDomain from './get-domain';
/**
 * 设置 cookie，默认为时间为 180 天，设置 extra.days 为 0 可以保存为 session cookie
 */

export default function setCookie(name, value) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$domain = _ref.domain,
      domain = _ref$domain === void 0 ? getDomain() : _ref$domain,
      _ref$path = _ref.path,
      path = _ref$path === void 0 ? '/' : _ref$path,
      _ref$days = _ref.days,
      days = _ref$days === void 0 ? 180 : _ref$days;

  document.cookie = ["".concat(name, "=").concat(encodeURIComponent(value)), "domain=".concat(domain), "path=".concat(path), "expires=".concat(getExpireDate(days))].join(';');
}