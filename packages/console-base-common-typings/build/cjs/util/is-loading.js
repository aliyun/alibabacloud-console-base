"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLoading;

var _const = require("../const");

var LOADED = [_const.ELoading.SUCCESS, _const.ELoading.ERROR];
/**
 * 通用的判断是否加载中
 */

function isLoading(loading) {
  return !LOADED.includes(loading);
}