"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AdjustHeight;

var _react = require("react");

var _hook = require("../../hook");

/**
 * 监听 window resize
 */
function AdjustHeight() {
  var dispatchUpdateWindowHeight = (0, _hook.useDispatchUpdateWindowHeight)();
  (0, _react.useEffect)(function () {
    window.addEventListener('resize', dispatchUpdateWindowHeight);
    return function () {
      return window.removeEventListener('resize', dispatchUpdateWindowHeight);
    };
  }, [dispatchUpdateWindowHeight]);
  return null;
}