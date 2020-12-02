"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceDidMount;

var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));

function reduceDidMount(state) {
  return (0, _immutabilityHelper.default)(state, {
    mounted: {
      $set: true
    }
  });
}