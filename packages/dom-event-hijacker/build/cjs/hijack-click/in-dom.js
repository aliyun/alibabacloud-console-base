"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hijackClickInDom;

var _createClickHandler = _interopRequireDefault(require("../util/create-click-handler"));

var _handleClickHijacker = _interopRequireDefault(require("../util/handle-click-hijacker"));

/**
 * 注册一个容器内的局部劫持点击事件，返回的方法可用以解除劫持。
 */
function hijackClickInDom(container, hijacker, inCapturePhase) {
  var fn = (0, _createClickHandler.default)(function (el, e) {
    return (0, _handleClickHijacker.default)(el, e, hijacker);
  }, container);
  container.addEventListener('click', fn, inCapturePhase);
  return function () {
    return container.removeEventListener('click', fn, inCapturePhase);
  };
}