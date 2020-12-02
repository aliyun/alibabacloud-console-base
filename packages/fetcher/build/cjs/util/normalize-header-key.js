"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeHeaderKey;

var _capitalize2 = _interopRequireDefault(require("lodash/capitalize"));

function normalizeHeaderKey(key) {
  return key.split('-').map(_capitalize2.default).join('-');
}