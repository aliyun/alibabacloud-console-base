"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toggleTopNav;

var _const = require("../../const");

var _broadcastByApp = require("../../util/broadcast-by-app");

/**
 * 展示或隐藏顶部导航
 */
function toggleTopNav(payload) {
  (0, _broadcastByApp.broadcastByApp)(_const.EMessageBroadcastByApp.TOGGLE_TOP_NAV, payload);
}