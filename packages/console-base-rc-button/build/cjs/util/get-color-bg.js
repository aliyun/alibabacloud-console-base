"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getColorBg;

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _const = require("../const");

function getColorBg(value) {
  switch (value) {
    case _const.EButtonThemeColorBg.LIGHTER:
      return _consoleBaseStyledMixin.COLOR.FILL_LIGHTER;

    case _const.EButtonThemeColorBg.LIGHT:
      return _consoleBaseStyledMixin.COLOR.FILL_LIGHT;

    case _const.EButtonThemeColorBg.NORMAL:
      return _consoleBaseStyledMixin.COLOR.FILL;

    case _const.EButtonThemeColorBg.DARK:
      return _consoleBaseStyledMixin.COLOR.FILL_DARK;

    case _const.EButtonThemeColorBg.DARKER:
      return _consoleBaseStyledMixin.COLOR.FILL_DARKER;

    case _const.EButtonThemeColorBg.WHITE:
      return '#fff';

    case _const.EButtonThemeColorBg.BRAND:
      return _consoleBaseStyledMixin.COLOR.BRAND_ALIYUN;

    case _const.EButtonThemeColorBg.BRAND_LIGHT:
      return _consoleBaseStyledMixin.COLOR.BRAND_ALIYUN_LIGHT;

    case _const.EButtonThemeColorBg.PRIMARY:
      return _consoleBaseStyledMixin.COLOR.INFO;

    case _const.EButtonThemeColorBg.PRIMARY_SHADE:
      return _consoleBaseStyledMixin.COLOR.INFO_DARK;

    default:
      return '';
  }
}