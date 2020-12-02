"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resourceGroupChange;

var _const = require("../../const");

var _boradcastByConsoleBase = _interopRequireDefault(require("../../util/boradcast-by-console-base"));

/**
 * 通知控制台应用：用户选择新的资源组（null 表示「全部资源组」）
 * 
 * FIXME 构建后会丢失 null..
 */
function resourceGroupChange(payload) {
  (0, _boradcastByConsoleBase.default)(_const.EMessageBroadcastByConsoleBase.RESOURCE_GROUP_CHANGE, payload);
}