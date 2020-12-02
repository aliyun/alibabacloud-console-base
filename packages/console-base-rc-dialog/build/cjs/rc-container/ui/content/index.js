"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _model = require("../../../model");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  flex: 1;\n  position: relative;\n  padding: ", "px ", "px;\n  overflow: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ScContent = _styledComponents.default.div(_templateObject(), _consoleBaseStyledMixin.DIALOG.PADDING * 2 / 3, _consoleBaseStyledMixin.DIALOG.PADDING);

function Content(props, ref) {
  var mode = (0, _model.usePropMode)();
  var content = (0, _model.useDialogContent)();
  var classNameOnBody = (0, _model.usePropClassNameContent)();
  var maxHeight = (0, _model.useDialogMaxContentHeight)();
  return /*#__PURE__*/_react.default.createElement(ScContent, _objectSpread(_objectSpread({}, props), {}, {
    style: maxHeight > 0 ? {
      maxHeight: maxHeight
    } : undefined,
    className: classNameOnBody,
    ref: ref,
    mode: mode
  }), content);
}

var _default = /*#__PURE__*/(0, _react.forwardRef)(Content);

exports.default = _default;