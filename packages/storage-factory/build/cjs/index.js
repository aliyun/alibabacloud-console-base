"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _createStorageFn = _interopRequireDefault(require("./util/create-storage-fn"));

function _default(wholeDataKey, session) {
  return (0, _createStorageFn.default)(wholeDataKey, session ? window.sessionStorage : window.localStorage);
}