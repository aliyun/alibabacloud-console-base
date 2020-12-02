"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDispatchFocus;

var _react = require("react");

var _pushStack = require("../util/push-stack");

var _useRefContent = _interopRequireDefault(require("./use-ref-content"));

var _useRefDialog = _interopRequireDefault(require("./use-ref-dialog"));

function useDispatchFocus() {
  var refContent = (0, _useRefContent.default)();
  var refDialog = (0, _useRefDialog.default)();
  return (0, _react.useCallback)(function () {
    return (0, _pushStack.focusDialog)(refDialog.current, refContent.current);
  }, [refDialog, refContent]);
}