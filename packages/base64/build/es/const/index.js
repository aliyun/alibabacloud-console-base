export var CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
export var B64TAB = function (bin) {
  var t = {};
  var l = bin.length;

  for (var i = 0; i < l; i++) {
    t[bin.charAt(i)] = i;
  }

  return t;
}(CHARS);
export var REG_ATOB = /[\s\S]{1,4}/g;
export var REG_BTOA = /[\s\S]{1,3}/g;
export var REG_UTOB = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g; // eslint-disable-line no-control-regex

export var REG_BTOU = new RegExp(['[\xC0-\xDF][\x80-\xBF]', '[\xE0-\xEF][\x80-\xBF]{2}', '[\xF0-\xF7][\x80-\xBF]{3}'].join('|'), 'g');