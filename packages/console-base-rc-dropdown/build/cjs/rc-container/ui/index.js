"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Dropdown;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _model = require("../../model");

var _theTrigger = _interopRequireDefault(require("./the-trigger"));

var _theDrop = _interopRequireDefault(require("./the-drop"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: ", ";\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ScDropdown = _styledComponents.default.div(_templateObject(), function (props) {
  return props.block ? 'block' : 'inline-block';
});

function Dropdown() {
  var _useProps = (0, _model.useProps)(),
      block = _useProps.block;

  var refDropdown = (0, _model.useRefDropdown)();
  var dispatchToggleVisibleWithDebounce = (0, _model.useDispatchToggleVisibleWithDebounce)();
  var handleMouseEnter = (0, _react.useCallback)(function () {
    return dispatchToggleVisibleWithDebounce(true);
  }, [dispatchToggleVisibleWithDebounce]);
  var handleMouseLeave = (0, _react.useCallback)(function () {
    return dispatchToggleVisibleWithDebounce(false);
  }, [dispatchToggleVisibleWithDebounce]);
  return /*#__PURE__*/_react.default.createElement(ScDropdown, {
    ref: refDropdown,
    block: block,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, /*#__PURE__*/_react.default.createElement(_theTrigger.default, null), /*#__PURE__*/_react.default.createElement(_theDrop.default, null));
}