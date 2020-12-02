"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "WithLoading", {
  enumerable: true,
  get: function get() {
    return _withLoading.default;
  }
});
Object.defineProperty(exports, "WithPromise", {
  enumerable: true,
  get: function get() {
    return _withPromise.default;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _loading.default;
  }
});

var _withLoading = _interopRequireDefault(require("./rc/with-loading"));

var _withPromise = _interopRequireDefault(require("./rc/with-promise"));

var _loading = _interopRequireDefault(require("./rc/loading"));