"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toolkitToolClicked;

var _const = require("../../const");

var _composeToolkitType = require("../../util/compose-toolkit-type");

var _boradcastByConsoleBase = _interopRequireDefault(require("../../util/boradcast-by-console-base"));

/**
 * 通知控制台应用：某工具被点击
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.broadcastClicked
 */
function toolkitToolClicked(id) {
  (0, _boradcastByConsoleBase.default)((0, _composeToolkitType.composeToolkitTypeWithId)(_const.EToolkitTypeShort.TOOL_CLICKED, id));
}