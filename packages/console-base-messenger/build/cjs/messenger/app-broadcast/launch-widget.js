"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = launchWidget;

var _const = require("../../const");

var _broadcastByApp = require("../../util/broadcast-by-app");

/**
 * 唤起 widget，并返回 Promise，需要传入 Widget 的 id + version + props，并通过 extra 传递更多的信息
 * 
 * 泛型说明：
 * 
 * - T Promise 返回类型
 * - P widget props 类型
 * - E extra
 */
function launchWidget(id, version, props, extra) {
  return (0, _broadcastByApp.broadcastPromiseByApp)(_const.EMessageBroadcastByApp.LAUNCH_WIDGET, {
    id: id,
    version: version,
    props: props,
    extra: extra
  });
}