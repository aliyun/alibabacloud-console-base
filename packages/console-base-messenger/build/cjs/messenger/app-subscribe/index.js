"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _onReady = _interopRequireDefault(require("./on-ready"));

var _onRegionChange = _interopRequireDefault(require("./on-region-change"));

var _onRegionRefreshResourceCount = _interopRequireDefault(require("./on-region-refresh-resource-count"));

var _onResourceGroupDataLoaded = _interopRequireDefault(require("./on-resource-group-data-loaded"));

var _onResourceGroupChange = _interopRequireDefault(require("./on-resource-group-change"));

var _onToolkitItemClick = _interopRequireDefault(require("./on-toolkit-item-click"));

var _onToolkitVersionNewClick = _interopRequireDefault(require("./on-toolkit-version-new-click"));

var _onToolkitVersionOldClick = _interopRequireDefault(require("./on-toolkit-version-old-click"));

var _onToolkitItemActiveChange = _interopRequireDefault(require("./on-toolkit-item-active-change"));

var _onFastbuyClose = _interopRequireDefault(require("./on-fastbuy-close"));

var _onFastbuyBuy = _interopRequireDefault(require("./on-fastbuy-buy"));

var _onFastbuySubmitPayment = _interopRequireDefault(require("./on-fastbuy-submit-payment"));

var _onFastbuyOrderFinish = _interopRequireDefault(require("./on-fastbuy-order-finish"));

/* --------------------------------------------- *
 * 控制台应用调用：响应 console-base 通知
 * 
 * 响应 console-base-broadcast 下对应的方法
 * --------------------------------------------- */
var _default = {
  onReady: _onReady.default,
  onRegionChange: _onRegionChange.default,
  onRegionRefreshResourceCount: _onRegionRefreshResourceCount.default,
  onResourceGroupDataLoaded: _onResourceGroupDataLoaded.default,
  onResourceGroupChange: _onResourceGroupChange.default,
  onToolkitItemClick: _onToolkitItemClick.default,
  onToolkitVersionNewClick: _onToolkitVersionNewClick.default,
  onToolkitVersionOldClick: _onToolkitVersionOldClick.default,
  onToolkitItemActiveChange: _onToolkitItemActiveChange.default,
  onFastbuyClose: _onFastbuyClose.default,
  onFastbuyBuy: _onFastbuyBuy.default,
  onFastbuySubmitPayment: _onFastbuySubmitPayment.default,
  onFastbuyOrderFinish: _onFastbuyOrderFinish.default
};
exports.default = _default;