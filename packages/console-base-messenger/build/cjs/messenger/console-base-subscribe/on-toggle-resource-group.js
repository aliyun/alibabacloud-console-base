"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onToggleResourceGroup;

var _const = require("../../const");

var _subscribeByConsoleBase = _interopRequireDefault(require("../../util/subscribe-by-console-base"));

/**
 * console-base 响应隐藏/展示资源组选择器
 */
function onToggleResourceGroup(fn) {
  return (0, _subscribeByConsoleBase.default)(_const.EMessageBroadcastByApp.RESOURCE_GROUP_TOGGLE, fn);
}