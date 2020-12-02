"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onResourceGroupDataLoaded;

var _const = require("../../const");

var _subscribeByApp = _interopRequireDefault(require("../../util/subscribe-by-app"));

/**
 * 资源组数据加载完成时的回调
 */
function onResourceGroupDataLoaded(fn) {
  return (0, _subscribeByApp.default)(_const.EMessageBroadcastByConsoleBase.RESOURCE_GROUP_DATA_LOADED, fn);
}