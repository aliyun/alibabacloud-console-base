"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = promptError;

var _const = require("../../const");

var _broadcastByApp = require("../../util/broadcast-by-app");

/**
 * 错误提示
 * 
 * ！！应用不要直接调用，请通过 @alicloud/error-prompt-proxy，里边做了封装
 * 
 * payload 类型参考 @alicloud/error-prompt，之所以不从里边引类型是为了避免有可能产生的循环及不必要的依赖
 */
function promptError(payload) {
  return (0, _broadcastByApp.broadcastPromiseByApp)(_const.EMessageBroadcastByApp.PROMPT_ERROR, payload);
}