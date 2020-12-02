"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REG_BTOU = exports.REG_UTOB = exports.REG_BTOA = exports.REG_ATOB = exports.B64TAB = exports.CHARS = void 0;
var CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
exports.CHARS = CHARS;

var B64TAB = function (bin) {
  var t = {};
  var l = bin.length;

  for (var i = 0; i < l; i++) {
    t[bin.charAt(i)] = i;
  }

  return t;
}(CHARS);

exports.B64TAB = B64TAB;
var REG_ATOB = /[\s\S]{1,4}/g;
exports.REG_ATOB = REG_ATOB;
var REG_BTOA = /[\s\S]{1,3}/g;
exports.REG_BTOA = REG_BTOA;
var REG_UTOB = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g; // eslint-disable-line no-control-regex

exports.REG_UTOB = REG_UTOB;
var REG_BTOU = new RegExp(['[\xC0-\xDF][\x80-\xBF]', '[\xE0-\xEF][\x80-\xBF]{2}', '[\xF0-\xF7][\x80-\xBF]{3}'].join('|'), 'g');
exports.REG_BTOU = REG_BTOU;