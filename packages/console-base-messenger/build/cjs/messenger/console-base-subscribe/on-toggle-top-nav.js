"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onToggleTopNav;

var _const = require("../../const");

var _subscribeByConsoleBase = _interopRequireDefault(require("../../util/subscribe-by-console-base"));

/**
 * console-base 响应隐藏/展示 TopNav
 */
function onToggleTopNav(fn) {
  return (0, _subscribeByConsoleBase.default)(_const.EMessageBroadcastByApp.TOGGLE_TOP_NAV, fn);
}