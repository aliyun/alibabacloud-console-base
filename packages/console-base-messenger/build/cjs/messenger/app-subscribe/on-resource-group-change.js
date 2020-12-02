"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onResourceGroupChange;

var _const = require("../../const");

var _subscribeByApp = _interopRequireDefault(require("../../util/subscribe-by-app"));

/**
 * 资源组切换时的回调
 */
function onResourceGroupChange(fn) {
  return (0, _subscribeByApp.default)(_const.EMessageBroadcastByConsoleBase.RESOURCE_GROUP_CHANGE, fn);
}