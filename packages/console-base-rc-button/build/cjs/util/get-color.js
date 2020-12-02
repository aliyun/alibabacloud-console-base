"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getColor;

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _const = require("../const");

function getColor(value) {
  switch (value) {
    case _const.EButtonThemeColor.INHERIT:
      return 'inherit';

    case _const.EButtonThemeColor.BLACK:
      return _consoleBaseStyledMixin.COLOR.TEXT_TITLE;

    case _const.EButtonThemeColor.NORMAL:
      return _consoleBaseStyledMixin.COLOR.TEXT_PRIMARY;

    case _const.EButtonThemeColor.GRAY:
      return _consoleBaseStyledMixin.COLOR.TEXT_SECONDARY;

    case _const.EButtonThemeColor.WHITE:
      return '#fff';

    case _const.EButtonThemeColor.LINK:
      return _consoleBaseStyledMixin.COLOR.LINK;

    case _const.EButtonThemeColor.LINK_GRAY:
      return _consoleBaseStyledMixin.COLOR.LINK_GRAY;

    case _const.EButtonThemeColor.BRAND:
      return _consoleBaseStyledMixin.COLOR.BRAND_ALIYUN;

    case _const.EButtonThemeColor.PRIMARY:
      return _consoleBaseStyledMixin.COLOR.INFO;

    case _const.EButtonThemeColor.PRIMARY_SHADE:
      return _consoleBaseStyledMixin.COLOR.INFO_DARK;

    default:
      return 'inherit';
  }
}