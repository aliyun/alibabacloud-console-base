"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onReady;

var _const = require("../../const");

var _subscribeByApp = require("../../util/subscribe-by-app");

/**
 * console-base 加载完成时进行回调，一般情况下不需要调用，在 @alicloud/console-base-messenger 中已经处理，
 * 可以保证在 ready 之前就可以跟 console-base 进行交互
 */
function onReady(fn) {
  return (0, _subscribeByApp.subscribeOnceByApp)(_const.EMessageBroadcastByConsoleBase.READY, fn);
}