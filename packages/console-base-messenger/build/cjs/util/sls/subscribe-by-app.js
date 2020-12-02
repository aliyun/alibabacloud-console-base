"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = slsSubscribeByApp;

var _consoleBaseLogSls = _interopRequireDefault(require("@alicloud/console-base-log-sls"));

var _stringifyCallback = _interopRequireDefault(require("../stringify-callback"));

/**
 * 记录 console-base 发出的消息，应用感兴趣主动订阅的，subscribe 或 subscribeOnce
 */
function slsSubscribeByApp(type, fn) {
  (0, _consoleBaseLogSls.default)('message_subscribe_by_app', {
    name: type,
    value: (0, _stringifyCallback.default)(fn) // 可以判断有效性

  });
}