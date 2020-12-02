import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    justify-content: ", ";\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    align-items: ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex-wrap: wrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { css } from 'styled-components';
var cssVertical = css(_templateObject());
var cssWrap = css(_templateObject2());
/**
 * 一个简单的 flex 布局容器
 */

export default styled.div(_templateObject3(), function (props) {
  return props.vertical ? cssVertical : null;
}, function (props) {
  return props.wrapping ? cssWrap : null;
}, function (props) {
  return props.align ? css(_templateObject4(), props.align) : null;
}, function (props) {
  return props.justify ? css(_templateObject5(), props.justify) : null;
});