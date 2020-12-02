"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = determineLineType;

var _const = require("../const");

/**
 * 判断一行文本的类型
 */
function determineLineType(str) {
  if (_const.REG_OL.test(str)) {
    return _const.ETypeLine.OL;
  }

  if (_const.REG_UL.test(str)) {
    return _const.ETypeLine.UL;
  }

  if (_const.REG_HR.test(str)) {
    return _const.ETypeLine.HR;
  }

  return _const.ETypeLine.P;
}