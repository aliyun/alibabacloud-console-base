"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDispatchResetScrollTop;

var _react = require("react");

var _useRefContent = _interopRequireDefault(require("./use-ref-content"));

/**
 * 在必要的时候允许使用者重置内容区域的 scrollTop
 */
function useDispatchResetScrollTop() {
  var refContent = (0, _useRefContent.default)();
  return (0, _react.useCallback)(function () {
    if (refContent.current) {
      refContent.current.scrollTop = 0;
    }
  }, [refContent]);
}