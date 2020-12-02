"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = slsBroadcastByApp;

var _consoleBaseLogSls = _interopRequireDefault(require("@alicloud/console-base-log-sls"));

var _stringifyPayload = _interopRequireDefault(require("../stringify-payload"));

/**
 * 记录应用发送给 console-base 的消息
 */
function slsBroadcastByApp(type, payload, beforeReady) {
  (0, _consoleBaseLogSls.default)('message_broadcast_by_app', {
    name: type,
    value: (0, _stringifyPayload.default)(payload),
    beforeReady: beforeReady
  });
}