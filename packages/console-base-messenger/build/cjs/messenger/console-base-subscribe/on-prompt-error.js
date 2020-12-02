"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onPromptError;

var _const = require("../../const");

var _subscribeByConsoleBase = require("../../util/subscribe-by-console-base");

/**
 * console-base 响应错误弹窗
 */
function onPromptError(fn) {
  return (0, _subscribeByConsoleBase.subscribePromiseByConsoleBase)(_const.EMessageBroadcastByApp.PROMPT_ERROR, fn);
}