"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSizes;

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _const = require("../const");

var PADDING = _consoleBaseStyledMixin.FORM_CONTROL.PADDING,
    HEIGHT = _consoleBaseStyledMixin.FORM_CONTROL.HEIGHT;
/**
 * 根据 size 计算 [padding-left|right, height, line-height]
 */

function getSizes(value) {
  switch (value) {
    case _const.EButtonSize.XS:
      return [PADDING.XS, HEIGHT.XS, HEIGHT.XS - 2];

    case _const.EButtonSize.S:
      return [PADDING.S, HEIGHT.S, HEIGHT.S - 2];

    case _const.EButtonSize.M:
      return [PADDING.M, HEIGHT.M, HEIGHT.M - 2];

    case _const.EButtonSize.L:
      return [PADDING.L, HEIGHT.L, HEIGHT.L - 2];

    case _const.EButtonSize.XL:
      return [PADDING.XL, HEIGHT.XL, HEIGHT.XL - 2];

    default:
      // 默认无大小设置
      return null;
  }
}