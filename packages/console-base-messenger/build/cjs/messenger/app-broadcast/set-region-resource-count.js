"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setRegionResourceCount;

var _const = require("../../const");

var _broadcastByApp = require("../../util/broadcast-by-app");

/**
 * 动态设置各个地域下的资源数
 */
function setRegionResourceCount(payload) {
  (0, _broadcastByApp.broadcastByApp)(_const.EMessageBroadcastByApp.REGION_SET_RESOURCE_COUNT, payload);
}