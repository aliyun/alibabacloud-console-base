"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _const = require("../const");

/* eslint-disable no-bitwise */
function btoaPolyfill(b) {
  return b.replace(_const.REG_BTOA, function (ccc) {
    var padLen = [0, 2, 1][ccc.length % 3];
    var ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0);
    return [_const.CHARS.charAt(ord >>> 18), _const.CHARS.charAt(ord >>> 12 & 63), padLen >= 2 ? '=' : _const.CHARS.charAt(ord >>> 6 & 63), padLen >= 1 ? '=' : _const.CHARS.charAt(ord & 63)].join('');
  });
}

var _default = typeof window !== 'undefined' && window.btoa ? window.btoa : btoaPolyfill;

exports.default = _default;