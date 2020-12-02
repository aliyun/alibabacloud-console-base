"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceSetZIndex;

var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));

/**
 * 修改 zIndex
 */
function reduceSetZIndex(state, payload) {
  return (0, _immutabilityHelper.default)(state, {
    zIndex: {
      $set: payload
    }
  });
}