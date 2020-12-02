"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stringifyPayload;

var _limitString = _interopRequireDefault(require("./limit-string"));

function stringifyPayload(payload) {
  try {
    return (0, _limitString.default)(typeof payload === 'string' ? payload : JSON.stringify(payload));
  } catch (e) {
    return e.message;
  }
}