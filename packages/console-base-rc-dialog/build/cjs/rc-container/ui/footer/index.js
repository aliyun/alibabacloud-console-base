"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _const = require("../../../const");

var _model = require("../../../model");

var _button = _interopRequireDefault(require("./button"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  justify-content: flex-start;\n  border-top: 1px solid ", ";\n  height: ", "px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  justify-content: flex-end;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n  text-align: right;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: 0 ", "px;\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var cssCommon = (0, _styledComponents.css)(_templateObject(), _consoleBaseStyledMixin.DIALOG.PADDING);
var cssNormal = (0, _styledComponents.css)(_templateObject2(), _consoleBaseStyledMixin.DIALOG.PADDING * 2 / 3, _consoleBaseStyledMixin.DIALOG.PADDING * 2 / 3);
var cssSlide = (0, _styledComponents.css)(_templateObject3(), _consoleBaseStyledMixin.COLOR.LINE_LIGHT, _consoleBaseStyledMixin.DIALOG.SLIDE_FOOTER_HEIGHT);

var ScFooter = _styledComponents.default.footer(_templateObject4(), cssCommon, function (props) {
  return props.mode === _const.EDialogMode.SLIDE ? cssSlide : cssNormal;
});

function Footer() {
  var mode = (0, _model.usePropMode)();
  var buttons = (0, _model.useDialogButtons)();
  return buttons.length ? /*#__PURE__*/_react.default.createElement(ScFooter, {
    mode: mode
  }, buttons.map(function (v, i) {
    return /*#__PURE__*/_react.default.createElement(_button.default, (0, _extends2.default)({
      key: v.spm || i
    }, v));
  })) : null;
}