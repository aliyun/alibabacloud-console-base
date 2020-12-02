"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getColorBd;

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _const = require("../const");

function getColorBd(value) {
  switch (value) {
    case _const.EButtonThemeColorBd.TRANSPARENT:
      return 'transparent';

    case _const.EButtonThemeColorBd.GRAY_ALPHA:
      return 'rgba(0, 0, 0, 0.1)';

    case _const.EButtonThemeColorBd.GRAY_ALPHA_SHADE:
      return 'rgba(0, 0, 0, 0.25)';

    case _const.EButtonThemeColorBd.GRAY:
      return _consoleBaseStyledMixin.COLOR.LINE;

    case _const.EButtonThemeColorBd.SHADE:
      return _consoleBaseStyledMixin.COLOR.LINE_DARK;

    case _const.EButtonThemeColorBd.PRIMARY:
      return _consoleBaseStyledMixin.COLOR.INFO;

    case _const.EButtonThemeColorBd.BRAND:
      return _consoleBaseStyledMixin.COLOR.BRAND_ALIYUN;

    case _const.EButtonThemeColorBd.PRIMARY_SHADE:
      return _consoleBaseStyledMixin.COLOR.INFO_DARK;

    default:
      return '';
  }
}