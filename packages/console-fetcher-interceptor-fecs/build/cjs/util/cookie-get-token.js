"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cookieGetToken;

var _cookie = require("@alicloud/cookie");

var _const = require("../const");

function cookieGetToken() {
  return (0, _cookie.getCookie)(_const.COOKIE_SEC_TOKEN) || '';
}