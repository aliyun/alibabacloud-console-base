"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toggleRegion;

var _const = require("../../const");

var _broadcastByApp = require("../../util/broadcast-by-app");

/**
 * 展示或隐藏区域选择器
 */
function toggleRegion() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  (0, _broadcastByApp.broadcastByApp)(_const.EMessageBroadcastByApp.REGION_TOGGLE, payload);
}