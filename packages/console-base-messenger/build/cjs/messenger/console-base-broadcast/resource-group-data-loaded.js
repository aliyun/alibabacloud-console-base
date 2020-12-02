"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resourceGroupDataLoaded;

var _const = require("../../const");

var _boradcastByConsoleBase = _interopRequireDefault(require("../../util/boradcast-by-console-base"));

/**
 * 通知控制台应用：资源组组件数据加载完成
 */
function resourceGroupDataLoaded(payload) {
  (0, _boradcastByConsoleBase.default)(_const.EMessageBroadcastByConsoleBase.RESOURCE_GROUP_DATA_LOADED, payload);
}