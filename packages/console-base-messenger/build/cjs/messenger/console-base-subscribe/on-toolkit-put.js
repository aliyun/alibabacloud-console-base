"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onToolkitPut;

var _const = require("../../const");

var _subscribeByConsoleBase = _interopRequireDefault(require("../../util/subscribe-by-console-base"));

var _composeToolkitType = _interopRequireDefault(require("../../util/compose-toolkit-type"));

/**
 * console-base 响应动态添加或修改某工具
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.subscribePutTool
 */
function onToolkitPut(fn) {
  return (0, _subscribeByConsoleBase.default)((0, _composeToolkitType.default)(_const.EToolkitTypeShort.ADD), function (payload) {
    if (fn && payload !== null && payload !== void 0 && payload.tool) {
      fn(payload.tool);
    }
  });
}