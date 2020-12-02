"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Breadcrumb;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _separator = _interopRequireDefault(require("./separator"));

var _item = _interopRequireDefault(require("./item"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  line-height: 1.5;\n  overflow: hidden;\n  white-space: nowrap;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ScBreadcrumb = _styledComponents.default.div(_templateObject(), _consoleBaseStyledMixin.COLOR.TEXT_SECONDARY);
/**
 * 面包屑
 */


function Breadcrumb(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      props = (0, _objectWithoutProperties2.default)(_ref, ["items"]);

  if (!items.length) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(ScBreadcrumb, props, items.map(function (v, i) {
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: i
    }, i > 0 ? /*#__PURE__*/_react.default.createElement(_separator.default, null) : null, /*#__PURE__*/_react.default.createElement(_item.default, v));
  }));
}