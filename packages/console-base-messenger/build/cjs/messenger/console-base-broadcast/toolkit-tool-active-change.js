"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toolkitToolActiveChanged;

var _const = require("../../const");

var _composeToolkitType = require("../../util/compose-toolkit-type");

var _boradcastByConsoleBase = _interopRequireDefault(require("../../util/boradcast-by-console-base"));

/**
 * 通知控制台应用：某工具被激活或取消激活
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.broadcastActivated + broadcastDeactivated
 */
function toolkitToolActiveChanged(id, payload) {
  (0, _boradcastByConsoleBase.default)((0, _composeToolkitType.composeToolkitTypeWithId)(_const.EToolkitTypeShort.TOOL_ACTIVATED, id), payload);
}