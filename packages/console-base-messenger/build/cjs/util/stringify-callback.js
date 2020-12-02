"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stringifyCallback;

var _limitString = _interopRequireDefault(require("./limit-string"));

function stringifyCallback(fn) {
  try {
    return (0, _limitString.default)(fn.toString());
  } catch (e) {
    return e.message;
  }
}