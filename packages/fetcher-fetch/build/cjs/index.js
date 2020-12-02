"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "EFetchError", {
  enumerable: true,
  get: function get() {
    return _const.EFetchError;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _fetch.default;
  }
});

require("whatwg-fetch");

var _const = require("./const");

var _fetch = _interopRequireDefault(require("./util/fetch"));