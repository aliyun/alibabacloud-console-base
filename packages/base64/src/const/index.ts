export const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
export const B64TAB: Record<string, number> = (function(bin) {
  const o: Record<string, number> = {};
  const l = bin.length;
  
  for (let i = 0; i < l; i++) {
    o[bin.charAt(i)] = i;
  }
  
  return o;
})(CHARS);
export const REG_ATOB = /[\s\S]{1,4}/g;
export const REG_BTOA = /[\s\S]{1,3}/g;
export const REG_UTOB = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g; // eslint-disable-line no-control-regex
export const REG_BTOU = new RegExp(['[\xC0-\xDF][\x80-\xBF]', '[\xE0-\xEF][\x80-\xBF]{2}', '[\xF0-\xF7][\x80-\xBF]{3}'].join('|'), 'g');
