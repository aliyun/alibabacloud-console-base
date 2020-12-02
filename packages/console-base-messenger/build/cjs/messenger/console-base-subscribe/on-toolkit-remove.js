"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onToolkitRemove;

var _const = require("../../const");

var _composeToolkitType = _interopRequireDefault(require("../../util/compose-toolkit-type"));

var _subscribeByConsoleBase = _interopRequireDefault(require("../../util/subscribe-by-console-base"));

/**
 * console-base 响应动态移除某工具
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.subscribeRemoveTool
 */
function onToolkitRemove(fn) {
  return (0, _subscribeByConsoleBase.default)((0, _composeToolkitType.default)(_const.EToolkitTypeShort.REMOVE), function (id) {
    if (id && fn) {
      fn(id);
    }
  });
}