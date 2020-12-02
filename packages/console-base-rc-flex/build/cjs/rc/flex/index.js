"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    justify-content: ", ";\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    align-items: ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  flex-wrap: wrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var cssVertical = (0, _styledComponents.css)(_templateObject());
var cssWrap = (0, _styledComponents.css)(_templateObject2());
/**
 * 一个简单的 flex 布局容器
 */

var _default = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.vertical ? cssVertical : null;
}, function (props) {
  return props.wrapping ? cssWrap : null;
}, function (props) {
  return props.align ? (0, _styledComponents.css)(_templateObject4(), props.align) : null;
}, function (props) {
  return props.justify ? (0, _styledComponents.css)(_templateObject5(), props.justify) : null;
});

exports.default = _default;