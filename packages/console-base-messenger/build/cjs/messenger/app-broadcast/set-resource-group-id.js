"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setResourceGroupId;

var _const = require("../../const");

var _broadcastByApp = require("../../util/broadcast-by-app");

/**
 * 通知修改当前选择的资源组
 */
function setResourceGroupId(payload) {
  (0, _broadcastByApp.broadcastByApp)(_const.EMessageBroadcastByApp.RESOURCE_GROUP_SET_ID, payload);
}