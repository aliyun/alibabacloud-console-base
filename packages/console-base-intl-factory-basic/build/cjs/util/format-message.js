"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatMessage;

/**
 * 获取替换插值后的原文案
 */
function formatMessage(messages, id, values) {
  var text = messages[id] || id || '';

  if (!values) {
    return text;
  } // 如果文案当中有类似 `{xx}` 的地方需要将其用 `values.xx` 来替换


  return text.replace(/\\?{([^}]+)}/g, function (match, k) {
    if (match.charAt(0) === '\\') {
      return match.slice(1);
    }

    return values[k] === undefined ? '' : String(values[k]);
  });
}