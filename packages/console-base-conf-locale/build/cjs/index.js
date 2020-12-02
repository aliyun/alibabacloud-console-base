"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ELanguage", {
  enumerable: true,
  get: function get() {
    return _const.ELanguage;
  }
});
Object.defineProperty(exports, "ELocale", {
  enumerable: true,
  get: function get() {
    return _const.ELocale;
  }
});
Object.defineProperty(exports, "switchLanguage", {
  enumerable: true,
  get: function get() {
    return _switchLanguage.default;
  }
});
exports.default = void 0;

var _const = require("./const");

var _parseConfLocale = _interopRequireDefault(require("./util/parse-conf-locale"));

var _switchLanguage = _interopRequireDefault(require("./util/switch-language"));

var _default = (0, _parseConfLocale.default)();

exports.default = _default;