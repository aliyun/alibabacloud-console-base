"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = btou;

var _const = require("../const");

/* eslint-disable no-bitwise */
var fromCharCode = String.fromCharCode;
/**
 * unicode 版编码
 */

function btou(b) {
  return b.replace(_const.REG_BTOU, function (cccc) {
    switch (cccc.length) {
      case 4:
        {
          var cp = (0x07 & cccc.charCodeAt(0)) << 18 | (0x3f & cccc.charCodeAt(1)) << 12 | (0x3f & cccc.charCodeAt(2)) << 6 | 0x3f & cccc.charCodeAt(3);
          var offset = cp - 0x10000;
          return fromCharCode((offset >>> 10) + 0xD800) + fromCharCode((offset & 0x3FF) + 0xDC00);
        }

      case 3:
        return fromCharCode((0x0f & cccc.charCodeAt(0)) << 12 | (0x3f & cccc.charCodeAt(1)) << 6 | 0x3f & cccc.charCodeAt(2));

      default:
        return fromCharCode((0x1f & cccc.charCodeAt(0)) << 6 | 0x3f & cccc.charCodeAt(1));
    }
  });
}