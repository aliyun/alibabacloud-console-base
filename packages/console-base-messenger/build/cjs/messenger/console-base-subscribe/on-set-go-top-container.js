"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onSetGoTopContainer;

var _const = require("../../const");

var _subscribeByConsoleBase = _interopRequireDefault(require("../../util/subscribe-by-console-base"));

var _composeToolkitType = _interopRequireDefault(require("../../util/compose-toolkit-type"));

/**
 * 响应设置工具组的「返回顶部」容器
 */
function onSetGoTopContainer(fn) {
  return (0, _subscribeByConsoleBase.default)((0, _composeToolkitType.default)(_const.EToolkitTypeShort.SET_GO_TOP_CONTAINER), fn);
}