"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Stack;

var _react = require("react");

var _pushStack = _interopRequireDefault(require("../../util/push-stack"));

var _hook = require("../../hook");

/**
 * 全局性事件托管
 */
function Stack() {
  var dialogId = (0, _hook.useStateId)();
  var dialogStackItem = (0, _hook.useDialogStackItem)();
  (0, _react.useEffect)(function () {
    return (0, _pushStack.default)(dialogId, dialogStackItem);
  }, [dialogId, dialogStackItem]);
  return null;
}