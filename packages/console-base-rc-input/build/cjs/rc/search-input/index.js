"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SearchInput;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _consoleBaseRcIcon = _interopRequireDefault(require("@alicloud/console-base-rc-icon"));

var _input = _interopRequireDefault(require("../input"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 16px;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ScIcon = (0, _styledComponents.default)(_consoleBaseRcIcon.default)(_templateObject(), function (props) {
  return props.highlighted ? _consoleBaseStyledMixin.COLOR.TEXT_EMPHASIS : _consoleBaseStyledMixin.COLOR.TEXT_DISABLED;
});

function renderIcon(focused) {
  return /*#__PURE__*/_react.default.createElement(ScIcon, {
    type: "search",
    highlighted: focused
  });
}

function SearchInput(props) {
  return /*#__PURE__*/_react.default.createElement(_input.default, _objectSpread(_objectSpread({
    round: true
  }, props), {}, {
    innerLeft: renderIcon
  }));
}