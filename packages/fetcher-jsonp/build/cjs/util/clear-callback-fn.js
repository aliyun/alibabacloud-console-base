"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clearCallbackFn;

/**
 * 清除全局的方法
 */
function clearCallbackFn(callbackName) {
  try {
    // IE8 throws exception when try to delete a property on window http://stackoverflow.com/a/1824228/751089
    delete window[callbackName];
  } catch (e) {
    window[callbackName] = undefined;
  }
}