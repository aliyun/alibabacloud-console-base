"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ready = _interopRequireDefault(require("./ready"));

var _regionChange = _interopRequireDefault(require("./region-change"));

var _regionRefreshResourceCount = _interopRequireDefault(require("./region-refresh-resource-count"));

var _resourceGroupDataLoaded = _interopRequireDefault(require("./resource-group-data-loaded"));

var _resourceGroupChange = _interopRequireDefault(require("./resource-group-change"));

var _toolkitToolClicked = _interopRequireDefault(require("./toolkit-tool-clicked"));

var _toolkitToolActiveChange = _interopRequireDefault(require("./toolkit-tool-active-change"));

var _fastbuyClose = _interopRequireDefault(require("./fastbuy-close"));

var _fastbuyBuy = _interopRequireDefault(require("./fastbuy-buy"));

var _fastbuySubmitPayment = _interopRequireDefault(require("./fastbuy-submit-payment"));

var _fastbuyOrderFinish = _interopRequireDefault(require("./fastbuy-order-finish"));

/* --------------------------------------------- *
 * console-base 调用：通知控制台应用
 * 
 * 由 app-subscribe 下的方法响应
 * --------------------------------------------- */
var _default = {
  ready: _ready.default,
  regionChange: _regionChange.default,
  regionRefreshResourceCount: _regionRefreshResourceCount.default,
  resourceGroupDataLoaded: _resourceGroupDataLoaded.default,
  resourceGroupChange: _resourceGroupChange.default,
  toolkitToolClicked: _toolkitToolClicked.default,
  toolkitToolActiveChanged: _toolkitToolActiveChange.default,
  fastbuyClose: _fastbuyClose.default,
  fastbuyBuy: _fastbuyBuy.default,
  fastbuySubmitPayment: _fastbuySubmitPayment.default,
  fastbuyOrderFinish: _fastbuyOrderFinish.default
};
exports.default = _default;