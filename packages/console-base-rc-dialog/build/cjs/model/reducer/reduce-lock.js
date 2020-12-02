"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceLock;

var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));

var _const = require("../../const");

/**
 * 锁定 Dialog，使无法关闭
 */
function reduceLock(state, payload) {
  return (0, _immutabilityHelper.default)(state, {
    locked: {
      $set: payload ? _const.EDialogLockState.LOADING : _const.EDialogLockState.YES
    }
  });
}