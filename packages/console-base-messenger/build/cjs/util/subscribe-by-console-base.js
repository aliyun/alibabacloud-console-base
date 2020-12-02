"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subscribeByConsoleBase;
exports.subscribePromiseByConsoleBase = subscribePromiseByConsoleBase;

var _postMessage = require("@alicloud/post-message");

/**
 * ConsoleBase 订阅消息，仅限定 type，不需要记录日志
 */
function subscribeByConsoleBase(type, fn) {
  return (0, _postMessage.subscribe)(type, fn);
}
/**
 * ConsoleBase 订阅 Promise 消息，仅限定 type，不需要记录日志
 */


function subscribePromiseByConsoleBase(type, fn) {
  return (0, _postMessage.subscribePromise)(type, fn);
}