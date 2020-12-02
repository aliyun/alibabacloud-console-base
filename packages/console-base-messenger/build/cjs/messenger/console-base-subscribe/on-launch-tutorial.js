"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onLaunchTutorial;

var _const = require("../../const");

var _subscribeByConsoleBase = require("../../util/subscribe-by-console-base");

/**
 * console-base 展示教程
 */
function onLaunchTutorial(fn) {
  return (0, _subscribeByConsoleBase.subscribePromiseByConsoleBase)(_const.EMessageBroadcastByApp.LAUNCH_TUTORIAL, fn);
}