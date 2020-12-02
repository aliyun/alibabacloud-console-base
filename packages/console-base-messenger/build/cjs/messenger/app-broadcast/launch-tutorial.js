"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = launchTutorial;

var _const = require("../../const");

var _broadcastByApp = require("../../util/broadcast-by-app");

/**
 * 打开教程
 */
function launchTutorial(payload) {
  return (0, _broadcastByApp.broadcastPromiseByApp)(_const.EMessageBroadcastByApp.LAUNCH_TUTORIAL, payload);
}