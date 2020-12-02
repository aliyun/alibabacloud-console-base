"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onToolkitVersionOldClick;

var _const = require("../../const");

var _onToolkitItemClick = _interopRequireDefault(require("./on-toolkit-item-click"));

/**
 * 「体验新版」工具点击时的回调
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.subscribeClickedVersionNew
 */

/**
 * 「返回旧版」工具点击时的回调
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.subscribeClickedVersionOld
 */
function onToolkitVersionOldClick(fn) {
  return (0, _onToolkitItemClick.default)(_const.EToolkitIdSystem.VERSION_OLD, fn);
}