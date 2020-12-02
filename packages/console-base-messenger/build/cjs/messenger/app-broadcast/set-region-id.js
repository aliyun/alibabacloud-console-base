"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setRegionId;

var _const = require("../../const");

var _broadcastByApp = require("../../util/broadcast-by-app");

/**
 * 修改当前选中的地域
 */
function setRegionId(payload) {
  (0, _broadcastByApp.broadcastByApp)(_const.EMessageBroadcastByApp.REGION_SET_ID, payload);
}