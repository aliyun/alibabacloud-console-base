"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLanguageInCookie;

var _cookie = require("@alicloud/cookie");

var _const = require("../const");

function getLanguageInCookie() {
  return (0, _cookie.getCookie)(_const.COOKIE_KEY);
}