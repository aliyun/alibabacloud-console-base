"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceUnlock;

var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));

var _const = require("../../const");

/**
 * 解除锁定
 */
function reduceUnlock(state) {
  return (0, _immutabilityHelper.default)(state, {
    locked: {
      $set: _const.EDialogLockState.NO
    }
  });
}