"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "EAccountType", {
  enumerable: true,
  get: function get() {
    return _enum.EAccountType;
  }
});
exports.default = void 0;

var _enum = require("./enum");

var _parseAccount = _interopRequireDefault(require("./util/parse-account"));

var _default = (0, _parseAccount.default)();

exports.default = _default;