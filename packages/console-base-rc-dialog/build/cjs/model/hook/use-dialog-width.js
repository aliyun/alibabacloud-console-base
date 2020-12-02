"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDialogWidth;

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _const = require("../../const");

var _useModelProps2 = _interopRequireDefault(require("./_use-model-props"));

function useDialogWidth() {
  var _useModelProps = (0, _useModelProps2.default)(),
      mode = _useModelProps.mode,
      size = _useModelProps.size;

  if (mode === _const.EDialogMode.SLIDE_UP) {
    return 'auto';
  }

  if (typeof size === 'number') {
    return size;
  }

  var modeIsSlide = mode === _const.EDialogMode.SLIDE;

  switch (size) {
    case _const.EDialogSize.XS:
      return modeIsSlide ? _consoleBaseStyledMixin.DIALOG.WIDTH_SLIDE.XS : _consoleBaseStyledMixin.DIALOG.WIDTH_NORMAL.XS;

    case _const.EDialogSize.S:
      return modeIsSlide ? _consoleBaseStyledMixin.DIALOG.WIDTH_SLIDE.S : _consoleBaseStyledMixin.DIALOG.WIDTH_NORMAL.S;

    case _const.EDialogSize.L:
      return modeIsSlide ? _consoleBaseStyledMixin.DIALOG.WIDTH_SLIDE.L : _consoleBaseStyledMixin.DIALOG.WIDTH_NORMAL.L;

    case _const.EDialogSize.XL:
      return modeIsSlide ? _consoleBaseStyledMixin.DIALOG.WIDTH_SLIDE.XL : _consoleBaseStyledMixin.DIALOG.WIDTH_NORMAL.XL;

    case _const.EDialogSize.XXL:
      return modeIsSlide ? _consoleBaseStyledMixin.DIALOG.WIDTH_SLIDE.XXL : _consoleBaseStyledMixin.DIALOG.WIDTH_NORMAL.XXL;

    case _const.EDialogSize.AUTO:
      return 'auto';

    case _const.EDialogSize.ALMOST_FULL:
      return '95%';

    default:
      return modeIsSlide ? _consoleBaseStyledMixin.DIALOG.WIDTH_SLIDE.M : _consoleBaseStyledMixin.DIALOG.WIDTH_NORMAL.M;
  }
}