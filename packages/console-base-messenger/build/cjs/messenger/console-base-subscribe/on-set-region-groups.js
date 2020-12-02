"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onSetRegionGroups;

var _const = require("../../const");

var _subscribeByConsoleBase = _interopRequireDefault(require("../../util/subscribe-by-console-base"));

/**
 * console-base 响应设置地域分组列表
 */
function onSetRegionGroups(fn) {
  return (0, _subscribeByConsoleBase.default)(_const.EMessageBroadcastByApp.REGION_SET_REGION_GROUPS, fn);
}