"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = X;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _consoleBaseRcIcon = _interopRequireDefault(require("@alicloud/console-base-rc-icon"));

var _consoleBaseRcButton = _interopRequireWildcard(require("@alicloud/console-base-rc-button"));

var _const = require("../../../const");

var _intl = _interopRequireDefault(require("../../../intl"));

var _model = require("../../../model");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  position: absolute;\n  top: ", "px;\n  right: ", "px;\n  z-index: 1;\n  font-size: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// z-index 用于保证在没有 header 的情况下不会被内容遮住
var ScX = (0, _styledComponents.default)(_consoleBaseRcButton.default)(_templateObject(), (_consoleBaseStyledMixin.DIALOG.SLIDE_HEADER_HEIGHT - _consoleBaseStyledMixin.DIALOG.SIZE_X) / 2 - 2, _consoleBaseStyledMixin.DIALOG.PADDING, _consoleBaseStyledMixin.DIALOG.SIZE_X);

function X() {
  var locked = (0, _model.useStateLocked)();
  var dispatchClose = (0, _model.useDispatchClose)();
  return /*#__PURE__*/_react.default.createElement(ScX, {
    'aria-label': (0, _intl.default)('op:close'),
    spm: 'x',
    label: /*#__PURE__*/_react.default.createElement(_consoleBaseRcIcon.default, {
      type: "x"
    }),
    title: (0, _intl.default)('op:close'),
    size: _consoleBaseRcButton.EButtonSize.NONE,
    disabled: locked !== _const.EDialogLockState.NO,
    onClick: dispatchClose
  });
}