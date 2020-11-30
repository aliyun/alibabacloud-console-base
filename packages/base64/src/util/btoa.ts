import {
  REG_BTOA,
  CHARS
} from '../const';

function btoaPolyfill(b: string): string {
  return b.replace(REG_BTOA, ccc => {
    const padLen = [0, 2, 1][ccc.length % 3];
    // eslint-disable-next-line no-mixed-operators
    const ord = ccc.charCodeAt(0) << 16 | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8) | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0));
    
    return [
      CHARS.charAt(ord >>> 18),
      CHARS.charAt((ord >>> 12) & 63),
      padLen >= 2 ? '=' : CHARS.charAt((ord >>> 6) & 63),
      padLen >= 1 ? '=' : CHARS.charAt(ord & 63)
    ].join('');
  });
}

export default typeof window !== 'undefined' && window.btoa ? window.btoa : btoaPolyfill;
