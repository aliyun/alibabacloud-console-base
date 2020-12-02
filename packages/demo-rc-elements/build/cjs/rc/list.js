"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _const = require("../const");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin: 4px 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  list-style: lower-roman;\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  list-style: square;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding-left: 3em;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var cssList = (0, _styledComponents.css)(_templateObject(), _const.CSS_BLOCK_LEVEL_ELEMENT);

var ScUl = _styledComponents.default.ul(_templateObject2(), cssList);

var ScOl = _styledComponents.default.ol(_templateObject3(), cssList);

var ScLi = _styledComponents.default.li(_templateObject4());

function List(_ref, ref) {
  var ordered = _ref.ordered,
      children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["ordered", "children"]);
  var ListComponent = ordered ? ScOl : ScUl;
  return /*#__PURE__*/_react.default.createElement(ListComponent, (0, _extends2.default)({
    ref: ref
  }, props), _react.Children.map(children, function (v, i) {
    return /*#__PURE__*/_react.default.createElement(ScLi, {
      key: i
    }, v);
  }));
}

var _default = /*#__PURE__*/(0, _react.forwardRef)(List);

exports.default = _default;