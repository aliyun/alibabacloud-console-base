"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isJsonp;
var REG_JSONP = /^JSONP$/i;

function isJsonp(config) {
  return REG_JSONP.test(config.method);
}