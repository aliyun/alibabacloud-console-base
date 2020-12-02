import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  *zoom: 1;\n  \n  &:before,\n  &:after {\n    content: ' ';\n    display: table;\n  }\n  \n  &:after {\n    clear: both;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  white-space: normal;\n  word-wrap: break-word;\n  word-break: break-all;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: -webkit-box;\n  min-height: ", "px;\n  line-height: ", "px;\n  overflow: hidden;\n  -webkit-line-clamp: ", ";\n  -webkit-box-orient: vertical;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  line-height: 1.5;\n  font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', Helvetica, Arial, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { css } from 'styled-components';
/** ------
 * 排版相关
 * ------ */

// 基础字体
export var baseFont = css(_templateObject()); // 你需要为之设定一个宽度

export var ellipsis = css(_templateObject2());
export var ellipsisLines = css(_templateObject3(), function (props) {
  return props.lineHeight * props.lines;
}, function (props) {
  return props.lineHeight;
}, function (props) {
  return props.lines;
});
export var lineWrap = css(_templateObject4());
export var clearfix = css(_templateObject5());