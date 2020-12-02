"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toggleRegionGlobal;

var _const = require("../../const");

var _broadcastByApp = require("../../util/broadcast-by-app");

/**
 * 设置地域选择器展示成「全球」或取消此设置（payload = false 的时候）
 */
function toggleRegionGlobal() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  (0, _broadcastByApp.broadcastByApp)(_const.EMessageBroadcastByApp.REGION_TOGGLE_GLOBAL, payload);
}