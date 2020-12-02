"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleClickHijacker;

var _const = require("../const");

/**
 * 处理一个 hijacker 对象
 */
function handleClickHijacker(el, e, hijacker) {
  if (el.hasAttribute(_const.DATA_CLICK_HIJACK_IGNORE)) {
    return false;
  }

  var condition = hijacker.condition,
      callback = hijacker.callback,
      noPreventDefault = hijacker.noPreventDefault,
      noStopPropagation = hijacker.noStopPropagation;
  var result = condition(el);

  if (!result) {
    return false;
  }

  if (callback) {
    callback(el, result);
  }

  if (!noPreventDefault) {
    e.preventDefault();
  }

  if (!noStopPropagation) {
    e.stopPropagation();
  }

  return true;
}