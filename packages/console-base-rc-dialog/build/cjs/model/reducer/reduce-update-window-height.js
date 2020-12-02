"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceUpdateWindowHeight;

var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));

function reduceUpdateWindowHeight(state) {
  return (0, _immutabilityHelper.default)(state, {
    windowHeight: {
      $set: window.innerHeight
    }
  });
}