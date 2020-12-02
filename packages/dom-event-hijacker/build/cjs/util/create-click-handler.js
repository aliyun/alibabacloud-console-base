"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createClickHandler;

/**
 * 创建劫持点击事件的方法（全局劫持和局部劫持的机制只有处理方法和容器是不一样的）
 */
function createClickHandler(fn, container) {
  return function (e) {
    var el = e.target;

    while (el && el !== container) {
      var hijacked = fn(el, e);

      if (hijacked) {
        break;
      }

      el = el.parentElement;
    }
  };
}