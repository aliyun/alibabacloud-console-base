"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ready;

var _const = require("../../const");

var _boradcastByConsoleBase = _interopRequireDefault(require("../../util/boradcast-by-console-base"));

/**
 * 通知控制台应用：console-base 已初始化完毕，可以进行交互
 */
function ready() {
  (0, _boradcastByConsoleBase.default)(_const.EMessageBroadcastByConsoleBase.READY);
}