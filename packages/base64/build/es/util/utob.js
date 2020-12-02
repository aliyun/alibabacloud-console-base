/* eslint-disable no-bitwise, no-nested-ternary */
import { REG_UTOB } from '../const';
var fromCharCode = String.fromCharCode;
/**
 * unicode 版解码
 */

export default function utob(u) {
  return u.replace(REG_UTOB, function (c) {
    if (c.length < 2) {
      var _cc = c.charCodeAt(0);

      return _cc < 0x80 ? c : _cc < 0x800 ? fromCharCode(0xc0 | _cc >>> 6) + fromCharCode(0x80 | _cc & 0x3f) : fromCharCode(0xe0 | _cc >>> 12 & 0x0f) + fromCharCode(0x80 | _cc >>> 6 & 0x3f) + fromCharCode(0x80 | _cc & 0x3f); // eslint-disable-line max-len
    }

    var cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
    return fromCharCode(0xf0 | cc >>> 18 & 0x07) + fromCharCode(0x80 | cc >>> 12 & 0x3f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
  });
}