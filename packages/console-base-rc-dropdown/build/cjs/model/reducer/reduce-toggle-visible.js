"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceToggleVisible;

var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));

function reduceToggleVisible(state, payload) {
  return (0, _immutabilityHelper.default)(state, {
    visible: {
      $set: payload
    }
  });
}