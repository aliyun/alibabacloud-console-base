"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setLanguageInCookie;

var _cookie = require("@alicloud/cookie");

var _const = require("../const");

function setLanguageInCookie(lang) {
  (0, _cookie.setCookie)(_const.COOKIE_KEY, lang);
}