"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onToggleRegion;

var _const = require("../../const");

var _subscribeByConsoleBase = _interopRequireDefault(require("../../util/subscribe-by-console-base"));

/**
 * console-base 响应隐藏/展示地域选择器
 */
function onToggleRegion(fn) {
  return (0, _subscribeByConsoleBase.default)(_const.EMessageBroadcastByApp.REGION_TOGGLE, fn);
}