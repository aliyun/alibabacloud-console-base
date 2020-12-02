"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onToggleRegionGlobal;

var _const = require("../../const");

var _subscribeByConsoleBase = _interopRequireDefault(require("../../util/subscribe-by-console-base"));

/**
 * console-base 响应启用地域「全球」模式
 */
function onToggleRegionGlobal(fn) {
  return (0, _subscribeByConsoleBase.default)(_const.EMessageBroadcastByApp.REGION_TOGGLE_GLOBAL, fn);
}