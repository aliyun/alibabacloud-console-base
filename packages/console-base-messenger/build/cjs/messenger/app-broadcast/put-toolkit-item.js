"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = putToolkitItem;

var _const = require("../../const");

var _composeToolkitType = _interopRequireDefault(require("../../util/compose-toolkit-type"));

var _broadcastByApp = require("../../util/broadcast-by-app");

/**
 * Toolkit 添加或修改一个工具
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.putTool
 */
function putToolkitItem(tool) {
  (0, _broadcastByApp.broadcastByApp)((0, _composeToolkitType.default)(_const.EToolkitTypeShort.ADD), {
    tool: tool
  });
}