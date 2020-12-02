"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteCookie;

var _setCookie = _interopRequireDefault(require("./set-cookie"));

/**
 * 删除 cookie，其实设置一个过期时间为此刻之前的时间，浏览器会自动清理过期的 cookie（其实这里设不设值都无所谓）
 */
function deleteCookie(name) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      domain = _ref.domain,
      path = _ref.path;

  (0, _setCookie.default)(name, '', {
    domain: domain,
    path: path,
    days: -1
  });
}