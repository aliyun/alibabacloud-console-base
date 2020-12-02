"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = copyText;
exports.COPY_SUPPORTED = void 0;
var COMMAND = 'copy';
/**
 * 传建一个临时的 textarea 用于执行复制命令
 */

function createTextarea(text) {
  var textarea = document.createElement('textarea');
  textarea.style.position = 'fixed';
  textarea.style.top = '0';
  textarea.style.left = '0';
  textarea.style.clip = 'rect(0, 0, 0, 0)';
  textarea.style.width = '0';
  textarea.style.height = '0';
  textarea.style.lineHeight = '0';
  textarea.style.opacity = '0';
  textarea.value = text;
  document.body.appendChild(textarea);
  return textarea;
}

var COPY_SUPPORTED = document.queryCommandSupported(COMMAND);
exports.COPY_SUPPORTED = COPY_SUPPORTED;

function copyText() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (!COPY_SUPPORTED) {
    return false;
  }

  var textarea = createTextarea(text);
  textarea.value = text;
  textarea.select();

  try {
    document.execCommand(COMMAND);
    return true;
  } catch (e) {
    return false;
  } finally {
    textarea.parentNode.removeChild(textarea);
  }
}