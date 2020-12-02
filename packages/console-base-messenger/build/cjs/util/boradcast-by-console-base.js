"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = broadcastByConsoleBase;

var _postMessage = require("@alicloud/post-message");

/**
 * ConsoleBase 发消息，仅限定 type，不需要记录日志
 */
function broadcastByConsoleBase(type, payload) {
  (0, _postMessage.broadcast)(type, payload);
}