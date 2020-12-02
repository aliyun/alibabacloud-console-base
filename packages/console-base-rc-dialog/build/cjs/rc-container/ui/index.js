"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DialogUi;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _const = require("../../const");

var _model = require("../../model");

var _header = _interopRequireDefault(require("./header"));

var _content = _interopRequireDefault(require("./content"));

var _footer = _interopRequireDefault(require("./footer"));

var _x = _interopRequireDefault(require("./x"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  position: fixed;\n  opacity: ", ";\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 3px 4px 2px rgba(0, 0, 0, 0.1);\n  outline: none;\n  background-color: #fff;\n  min-width: 320px;\n  max-width: 100%;\n  font-size: 12px;\n  transition: all ease-in 200ms;\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  right: 0;\n  bottom: 0;\n  left: 0;\n  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);\n  transform: translateY(", ");\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  transform: translateX(", ");\n  \n  .hasTopbar & {\n    top: ", "px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  top: ", ";\n  left: 50%;\n  min-height: 80px;\n  transform: translate(-50%, -50%);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var cssNormal = (0, _styledComponents.css)(_templateObject(), function (props) {
  return props.active ? '50%' : '35%';
});
var cssSlide = (0, _styledComponents.css)(_templateObject2(), function (props) {
  return props.active ? '0' : '100%';
}, _consoleBaseStyledMixin.LAYOUT.TOP_BAR_HEIGHT);
var cssSlideUp = (0, _styledComponents.css)(_templateObject3(), function (props) {
  return props.active ? '0' : '100%';
}); // 其实 HTML 有 dialog 元素，但浏览器支持不佳，目前只好用 div

var ScDialog = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.active ? 1 : 0.66;
}, function (props) {
  switch (props.mode) {
    case _const.EDialogMode.SLIDE:
      return cssSlide;

    case _const.EDialogMode.SLIDE_UP:
      return cssSlideUp;

    default:
      return cssNormal;
  }
});
/**
 * Dialog 本 Dialog
 */


function DialogUi() {
  var refDialog = (0, _model.useRefDialog)();
  var refContent = (0, _model.useRefContent)();
  var className = (0, _model.usePropClassName)();
  var closable = (0, _model.usePropClosable)();
  var mode = (0, _model.usePropMode)();
  var width = (0, _model.useDialogWidth)();
  var active = (0, _model.useStateActive)();
  var zIndex = (0, _model.useDialogZIndex)();
  return /*#__PURE__*/_react.default.createElement(ScDialog, {
    ref: refDialog,
    'aria-modal': true,
    role: 'dialog',
    className: className,
    tabIndex: 0,
    mode: mode,
    active: active,
    style: {
      zIndex: zIndex,
      width: width
    }
  }, /*#__PURE__*/_react.default.createElement(_header.default, null), /*#__PURE__*/_react.default.createElement(_content.default, {
    ref: refContent
  }), /*#__PURE__*/_react.default.createElement(_footer.default, null), closable ? /*#__PURE__*/_react.default.createElement(_x.default, null) : null);
}