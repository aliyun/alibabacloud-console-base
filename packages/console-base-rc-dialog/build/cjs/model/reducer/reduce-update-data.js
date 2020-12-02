"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceUpdateData;

var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));

/**
 * 更新 data
 */
function reduceUpdateData(state, payload) {
  return (0, _immutabilityHelper.default)(state, {
    data: {
      $merge: payload
    }
  });
}