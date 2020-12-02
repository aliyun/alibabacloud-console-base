"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDomain;

function getDomain() {
  var _window = window,
      hostname = _window.location.hostname;

  if (/^\d[\d.]*\d$/.test(hostname)) {
    // 纯 IP，直接返回
    return hostname;
  }

  var arr = hostname.split('.');

  if (arr.length >= 3) {
    // 返回二级域名
    return ".".concat(arr[arr.length - 2], ".").concat(arr[arr.length - 1]);
  }

  return hostname;
}