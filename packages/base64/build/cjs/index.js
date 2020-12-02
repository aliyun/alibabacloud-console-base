"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "encode", {
  enumerable: true,
  get: function get() {
    return _encode.default;
  }
});
Object.defineProperty(exports, "decode", {
  enumerable: true,
  get: function get() {
    return _decode.default;
  }
});

var _encode = _interopRequireDefault(require("./util/encode"));

var _decode = _interopRequireDefault(require("./util/decode"));