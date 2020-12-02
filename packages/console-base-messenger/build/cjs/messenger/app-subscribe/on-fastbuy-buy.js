"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onFastbuyBuy;

var _const = require("../../const");

var _subscribeByApp = _interopRequireDefault(require("../../util/subscribe-by-app"));

function onFastbuyBuy(fn) {
  return (0, _subscribeByApp.default)(_const.EMessageBroadcastByConsoleBase.FASTBUY_BUY, fn);
}