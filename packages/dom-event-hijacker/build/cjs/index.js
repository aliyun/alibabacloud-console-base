"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DATA_CLICK_HIJACK_IGNORE", {
  enumerable: true,
  get: function get() {
    return _const.DATA_CLICK_HIJACK_IGNORE;
  }
});
Object.defineProperty(exports, "hijackClickInDom", {
  enumerable: true,
  get: function get() {
    return _inDom.default;
  }
});
exports.default = void 0;

var _const = require("./const");

var _global = _interopRequireDefault(require("./hijack-click/global"));

var _inDom = _interopRequireDefault(require("./hijack-click/in-dom"));

var _default = _global.default;
exports.default = _default;