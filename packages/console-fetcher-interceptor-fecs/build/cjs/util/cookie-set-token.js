"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cookieSetToken;

var _cookie = require("@alicloud/cookie");

var _const = require("../const");

function cookieSetToken(value) {
  (0, _cookie.setCookie)(_const.COOKIE_SEC_TOKEN, value, {
    days: 0 // session cookie

  });
}