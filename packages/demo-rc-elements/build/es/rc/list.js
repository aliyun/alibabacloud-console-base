import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: 4px 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  list-style: lower-roman;\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  list-style: square;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 3em;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* eslint-disable react/no-array-index-key */
import React, { Children, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { CSS_BLOCK_LEVEL_ELEMENT } from '../const';
var cssList = css(_templateObject(), CSS_BLOCK_LEVEL_ELEMENT);
var ScUl = styled.ul(_templateObject2(), cssList);
var ScOl = styled.ol(_templateObject3(), cssList);
var ScLi = styled.li(_templateObject4());

function List(_ref, ref) {
  var ordered = _ref.ordered,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["ordered", "children"]);

  var ListComponent = ordered ? ScOl : ScUl;
  return /*#__PURE__*/React.createElement(ListComponent, _extends({
    ref: ref
  }, props), Children.map(children, function (v, i) {
    return /*#__PURE__*/React.createElement(ScLi, {
      key: i
    }, v);
  }));
}

export default /*#__PURE__*/forwardRef(List);