"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "chooseStoreByEnv", {
  enumerable: true,
  get: function get() {
    return _chooseStoreByEnv.default;
  }
});
exports.default = void 0;

var _factory = _interopRequireDefault(require("./_factory"));

var _chooseStoreByEnv = _interopRequireDefault(require("./_choose-store-by-env"));

var _default = _factory.default;
exports.default = _default;