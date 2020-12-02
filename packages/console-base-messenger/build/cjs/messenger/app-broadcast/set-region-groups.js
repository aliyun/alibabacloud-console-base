"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setRegions;

var _const = require("../../const");

var _broadcastByApp = require("../../util/broadcast-by-app");

/**
 * 动态修改可用地域分组列表
 */
function setRegions(payload) {
  (0, _broadcastByApp.broadcastByApp)(_const.EMessageBroadcastByApp.REGION_SET_REGION_GROUPS, payload);
}