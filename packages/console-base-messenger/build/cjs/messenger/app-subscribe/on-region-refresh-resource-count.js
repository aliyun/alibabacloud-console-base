"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onRegionRefreshResourceCount;

var _const = require("../../const");

var _subscribeByApp = _interopRequireDefault(require("../../util/subscribe-by-app"));

var _setRegionResourceCount = _interopRequireDefault(require("../app-broadcast/set-region-resource-count"));

// 内部消费了

/**
 * console-base 通知应用刷新地域的资源数，具体的逻辑需要控制台来实现
 */
function onRegionRefreshResourceCount(fn) {
  return (0, _subscribeByApp.default)(_const.EMessageBroadcastByConsoleBase.REGION_REFRESH_RESOURCE_COUNT, function (regionIds) {
    if (!(regionIds !== null && regionIds !== void 0 && regionIds.length)) {
      return;
    }

    var promise = fn(regionIds);

    if (!(promise !== null && promise !== void 0 && promise.then)) {
      return;
    }

    promise.then(_setRegionResourceCount.default);
  });
}