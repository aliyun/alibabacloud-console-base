"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFontSize;

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _const = require("../const");

var FONT_SIZE = _consoleBaseStyledMixin.FORM_CONTROL.FONT_SIZE;

function getFontSize(value) {
  switch (value) {
    case _const.EButtonFontSize.M:
      return FONT_SIZE.M;

    case _const.EButtonFontSize.S:
      return FONT_SIZE.S;

    case _const.EButtonFontSize.XS:
      return FONT_SIZE.XS;

    case _const.EButtonFontSize.L:
      return FONT_SIZE.L;

    case _const.EButtonFontSize.XL:
      return FONT_SIZE.XL;

    default:
      return 0;
  }
}