"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearfix = exports.lineWrap = exports.ellipsisLines = exports.ellipsis = exports.baseFont = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  *zoom: 1;\n  \n  &:before,\n  &:after {\n    content: ' ';\n    display: table;\n  }\n  \n  &:after {\n    clear: both;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  white-space: normal;\n  word-wrap: break-word;\n  word-break: break-all;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: -webkit-box;\n  min-height: ", "px;\n  line-height: ", "px;\n  overflow: hidden;\n  -webkit-line-clamp: ", ";\n  -webkit-box-orient: vertical;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  line-height: 1.5;\n  font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', Helvetica, Arial, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// 基础字体
var baseFont = (0, _styledComponents.css)(_templateObject()); // 你需要为之设定一个宽度

exports.baseFont = baseFont;
var ellipsis = (0, _styledComponents.css)(_templateObject2());
exports.ellipsis = ellipsis;
var ellipsisLines = (0, _styledComponents.css)(_templateObject3(), function (props) {
  return props.lineHeight * props.lines;
}, function (props) {
  return props.lineHeight;
}, function (props) {
  return props.lines;
});
exports.ellipsisLines = ellipsisLines;
var lineWrap = (0, _styledComponents.css)(_templateObject4());
exports.lineWrap = lineWrap;
var clearfix = (0, _styledComponents.css)(_templateObject5());
exports.clearfix = clearfix;