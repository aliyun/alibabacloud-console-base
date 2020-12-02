"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AltWrap;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _consoleBaseRcIcon = _interopRequireDefault(require("@alicloud/console-base-rc-icon"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin-top: 4px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin: 0 0 8px 0;\n  padding: 0;\n  font-size: 16px;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding: 0 ", "px 0 ", "px;\n  line-height: 1.6;\n  white-space: normal;\n  word-wrap: break-word;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  position: absolute;\n  top: 4px;\n  left: 0;\n  font-size: ", "px;\n  \n  &:before {\n    display: block;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n  margin-top: 16px;\n  padding-top: 2px;\n  min-height: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ICON_SIZE = 20;
var SPACING = 12;

var ScWrap = _styledComponents.default.div(_templateObject(), ICON_SIZE + SPACING * 2);

var ScIcon = (0, _styledComponents.default)(_consoleBaseRcIcon.default)(_templateObject2(), ICON_SIZE);

var ScMessage = _styledComponents.default.div(_templateObject3(), SPACING, ICON_SIZE + SPACING);

var ScTitle = _styledComponents.default.h5(_templateObject4(), _consoleBaseStyledMixin.COLOR.TEXT_TITLE);

var ScContent = _styledComponents.default.div(_templateObject5());
/**
 * alert / confirm 的包裹
 */


function AltWrap(_ref) {
  var type = _ref.type,
      title = _ref.title,
      content = _ref.content;
  return /*#__PURE__*/_react.default.createElement(ScWrap, null, /*#__PURE__*/_react.default.createElement(ScIcon, {
    type: type === 'confirm' ? 'question-fill' : 'alert-fill',
    style: {
      color: type === 'confirm' ? _consoleBaseStyledMixin.COLOR.TEXT_CAPTION : _consoleBaseStyledMixin.COLOR.WARN
    }
  }), /*#__PURE__*/_react.default.createElement(ScMessage, null, title ? /*#__PURE__*/_react.default.createElement(ScTitle, null, title) : null, /*#__PURE__*/_react.default.createElement(ScContent, null, content)));
}