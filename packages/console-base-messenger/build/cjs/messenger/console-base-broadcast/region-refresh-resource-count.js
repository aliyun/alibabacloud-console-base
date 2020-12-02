"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = regionRefreshResourceCount;

var _const = require("../../const");

var _boradcastByConsoleBase = _interopRequireDefault(require("../../util/boradcast-by-console-base"));

/**
 * 通知控制台应用：你来刷新地域相关的资源数啦
 */
function regionRefreshResourceCount(payload) {
  (0, _boradcastByConsoleBase.default)(_const.EMessageBroadcastByConsoleBase.REGION_REFRESH_RESOURCE_COUNT, payload);
}