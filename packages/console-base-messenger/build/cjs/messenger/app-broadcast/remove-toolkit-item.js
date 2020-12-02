"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeToolkitItem;

var _const = require("../../const");

var _composeToolkitType = _interopRequireDefault(require("../../util/compose-toolkit-type"));

var _broadcastByApp = require("../../util/broadcast-by-app");

/**
 * 移除工具
 */
function removeToolkitItem(id) {
  (0, _broadcastByApp.broadcastByApp)((0, _composeToolkitType.default)(_const.EToolkitTypeShort.REMOVE), id);
}