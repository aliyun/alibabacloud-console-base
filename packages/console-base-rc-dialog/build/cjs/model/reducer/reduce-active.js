"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceActive;

var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));

/**
 * 用于触发 CSS 动画
 */
function reduceActive(state, payload) {
  return (0, _immutabilityHelper.default)(state, {
    active: {
      $set: payload
    }
  });
}