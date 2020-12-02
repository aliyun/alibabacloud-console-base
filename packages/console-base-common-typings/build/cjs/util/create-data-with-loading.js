"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDataWithLoading;

var _const = require("../const");

function createDataWithLoading(data) {
  var loading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _const.ELoading.IDLE;
  return {
    loading: loading,
    data: data
  };
}