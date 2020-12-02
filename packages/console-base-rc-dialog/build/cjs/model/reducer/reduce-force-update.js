"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceForceUpdate;

var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));

/**
 * 强制更新以重新 render
 */
function reduceForceUpdate(state) {
  return (0, _immutabilityHelper.default)(state, {
    countForcedUpdate: {
      $set: state.countForcedUpdate + 1
    }
  });
}