"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = regionChange;

var _const = require("../../const");

var _boradcastByConsoleBase = _interopRequireDefault(require("../../util/boradcast-by-console-base"));

/**
 * 通知控制台应用：用户选择新的区域
 */
function regionChange(payload) {
  (0, _boradcastByConsoleBase.default)(_const.EMessageBroadcastByConsoleBase.REGION_CHANGE, payload);
}