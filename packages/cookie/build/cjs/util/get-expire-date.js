"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getExpireDate;

function getExpireDate(days) {
  if (!days) {
    return ''; // session cookie
  }

  var d = new Date(); // 过期时间

  d.setDate(d.getDate() + days);
  return d.toUTCString();
}