"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onToolkitItemClick;

var _subscribeByApp = _interopRequireDefault(require("../../util/subscribe-by-app"));

var _const = require("../../const");

var _composeToolkitType = require("../../util/compose-toolkit-type");

/**
 * 某工具的「点击」的回调
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.subscribeClicked
 */
function onToolkitItemClick(id, fn) {
  return (0, _subscribeByApp.default)((0, _composeToolkitType.composeToolkitTypeWithId)(_const.EToolkitTypeShort.TOOL_CLICKED, id), fn);
}