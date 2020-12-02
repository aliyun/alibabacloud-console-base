"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSite;

var _cookie = require("@alicloud/cookie");

function getSite() {
  return (0, _cookie.getCookie)('aliyun_site') || 'CN'; // CN INTL JP
}