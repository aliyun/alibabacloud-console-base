"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subscribeByApp;
exports.subscribeOnceByApp = subscribeOnceByApp;

var _postMessage = require("@alicloud/post-message");

var _sls = require("../util/sls");

/**
 * 应用订阅消息，需要记录日志
 */
function subscribeByApp(type, fn) {
  (0, _sls.slsSubscribeByApp)(type, fn);
  return (0, _postMessage.subscribe)(type, fn);
}
/**
 * 应用订阅单次消息，需要记录日志
 */


function subscribeOnceByApp(type, fn) {
  (0, _sls.slsSubscribeByApp)(type, fn);
  return (0, _postMessage.subscribeOnce)(type, fn);
}