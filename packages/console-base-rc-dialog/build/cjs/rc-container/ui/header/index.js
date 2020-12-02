"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _const = require("../../../const");

var _model = require("../../../model");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  \n  h4 {\n    flex: 1;\n    margin: 0;\n    padding: 0;\n    line-height: 24px;\n    font-size: 16px;\n    font-weight: 400;\n    ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  border-bottom: 1px solid ", ";\n  height: ", "px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding-top: ", "px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: 0 ", "px 0  ", "px;\n  box-sizing: border-box;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var cssCommon = (0, _styledComponents.css)(_templateObject(), _consoleBaseStyledMixin.DIALOG.PADDING * 2 + _consoleBaseStyledMixin.DIALOG.SIZE_X, _consoleBaseStyledMixin.DIALOG.PADDING, _consoleBaseStyledMixin.COLOR.TEXT_TITLE);
var cssNormal = (0, _styledComponents.css)(_templateObject2(), _consoleBaseStyledMixin.DIALOG.PADDING * 2 / 3); // slide 和 slide-up 共用

var cssSlide = (0, _styledComponents.css)(_templateObject3(), _consoleBaseStyledMixin.COLOR.LINE_LIGHT, _consoleBaseStyledMixin.DIALOG.SLIDE_HEADER_HEIGHT);

var ScHeader = _styledComponents.default.header(_templateObject4(), cssCommon, function (props) {
  return props.mode !== _const.EDialogMode.NORMAL ? cssSlide : cssNormal;
}, _consoleBaseStyledMixin.typo.ellipsis);

function Header() {
  var title = (0, _model.useDialogTitle)();
  var mode = (0, _model.usePropMode)();
  return mode !== _const.EDialogMode.NORMAL || title ? /*#__PURE__*/_react.default.createElement(ScHeader, {
    mode: mode
  }, /*#__PURE__*/_react.default.createElement("h4", null, title)) : null;
}