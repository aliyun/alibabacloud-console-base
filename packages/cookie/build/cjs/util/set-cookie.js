"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setCookie;

var _getExpireDate = _interopRequireDefault(require("./get-expire-date"));

var _getDomain = _interopRequireDefault(require("./get-domain"));

/**
 * 设置 cookie，默认为时间为 180 天，设置 extra.days 为 0 可以保存为 session cookie
 */
function setCookie(name, value) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$domain = _ref.domain,
      domain = _ref$domain === void 0 ? (0, _getDomain.default)() : _ref$domain,
      _ref$path = _ref.path,
      path = _ref$path === void 0 ? '/' : _ref$path,
      _ref$days = _ref.days,
      days = _ref$days === void 0 ? 180 : _ref$days;

  document.cookie = ["".concat(name, "=").concat(encodeURIComponent(value)), "domain=".concat(domain), "path=".concat(path), "expires=".concat((0, _getExpireDate.default)(days))].join(';');
}