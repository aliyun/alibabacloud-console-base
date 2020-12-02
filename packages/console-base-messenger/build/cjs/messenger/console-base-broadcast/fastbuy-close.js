"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fastbuyClose;

var _const = require("../../const");

var _boradcastByConsoleBase = _interopRequireDefault(require("../../util/boradcast-by-console-base"));

/**
 * Fastbuy 弹窗关闭
 */
function fastbuyClose(payload) {
  (0, _boradcastByConsoleBase.default)(_const.EMessageBroadcastByConsoleBase.FASTBUY_CLOSE, payload);
}