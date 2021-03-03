/* eslint-disable no-bitwise */
import {
  REG_BTOU
} from '../const';

const {
  fromCharCode
} = String;

/**
 * unicode 版编码
 */
export default function btou(b: string): string {
  return b.replace(REG_BTOU, cccc => {
    switch (cccc.length) {
      case 4: {
        const cp = ((0x07 & cccc.charCodeAt(0)) << 18) | ((0x3f & cccc.charCodeAt(1)) << 12) | ((0x3f & cccc.charCodeAt(2)) << 6) | (0x3f & cccc.charCodeAt(3));
        const offset = cp - 0x10000;
        
        return fromCharCode((offset >>> 10) + 0xD800) + fromCharCode((offset & 0x3FF) + 0xDC00);
      }
      case 3:
        return fromCharCode(((0x0f & cccc.charCodeAt(0)) << 12) | ((0x3f & cccc.charCodeAt(1)) << 6) | (0x3f & cccc.charCodeAt(2)));
      default:
        return fromCharCode(((0x1f & cccc.charCodeAt(0)) << 6) | (0x3f & cccc.charCodeAt(1)));
    }
  });
}
