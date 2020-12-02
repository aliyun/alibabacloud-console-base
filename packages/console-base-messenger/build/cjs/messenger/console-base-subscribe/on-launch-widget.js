"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onLaunchWidget;

var _const = require("../../const");

var _subscribeByConsoleBase = require("../../util/subscribe-by-console-base");

/**
 * console-base 响应 Widget 唤起
 * 
 * 泛型说明：
 * 
 * - T Promise 返回类型
 * - P props 类型
 * - E extra 类型
 */
function onLaunchWidget(fn) {
  return (0, _subscribeByConsoleBase.subscribePromiseByConsoleBase)(_const.EMessageBroadcastByApp.LAUNCH_WIDGET, fn);
}