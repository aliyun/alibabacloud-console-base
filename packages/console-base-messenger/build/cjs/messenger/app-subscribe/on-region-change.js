"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onRegionChange;

var _const = require("../../const");

var _subscribeByApp = _interopRequireDefault(require("../../util/subscribe-by-app"));

/**
 * 地域切换时的回调
 */
function onRegionChange(fn) {
  return (0, _subscribeByApp.default)(_const.EMessageBroadcastByConsoleBase.REGION_CHANGE, fn);
}