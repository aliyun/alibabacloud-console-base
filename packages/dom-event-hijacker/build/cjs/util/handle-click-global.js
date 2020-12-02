"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleClickGlobal;

var _const = require("../const");

var _handleClickHijacker = _interopRequireDefault(require("./handle-click-hijacker"));

/**
 * 处理全局劫持
 */
function handleClickGlobal(el, e) {
  var hijacked = false;

  _const.GLOBAL_CLICK_HIJACKERS.forEach(function (v) {
    if ((0, _handleClickHijacker.default)(el, e, v)) {
      hijacked = true;
    }
  });

  return hijacked;
}