"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setResourceGroupResourceCount;

var _const = require("../../const");

var _broadcastByApp = require("../../util/broadcast-by-app");

/**
 * 动态设置各资源组下的资源数
 */
function setResourceGroupResourceCount(payload) {
  (0, _broadcastByApp.broadcastByApp)(_const.EMessageBroadcastByApp.RESOURCE_GROUP_SET_RESOURCE_COUNT, payload);
}