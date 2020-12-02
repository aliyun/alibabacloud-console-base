"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onSetResourceGroupId;

var _const = require("../../const");

var _subscribeByConsoleBase = _interopRequireDefault(require("../../util/subscribe-by-console-base"));

/**
 * console-base 响应设置当前选中的资源组
 */
function onSetResourceGroupId(fn) {
  return (0, _subscribeByConsoleBase.default)(_const.EMessageBroadcastByApp.RESOURCE_GROUP_SET_ID, fn);
}