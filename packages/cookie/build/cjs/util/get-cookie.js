"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCookie;

var _getAllCookies = _interopRequireDefault(require("./get-all-cookies"));

/**
 * 获取单个 cookie
 */
function getCookie(name) {
  return (0, _getAllCookies.default)()[name];
}