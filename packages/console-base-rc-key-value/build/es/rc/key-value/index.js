import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 1em;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 4px 0;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
import { COLOR, typo } from '@alicloud/console-base-styled-mixin';
import convertItems from '../../util/convert-items';
var ScKeyValue = styled.div(_templateObject());
var ScItem = styled.div(_templateObject2(), COLOR.TEXT_PRIMARY);
var ScItemK = styled.div(_templateObject3(), COLOR.TEXT_CAPTION);
var ScItemV = styled.div(_templateObject4(), function (props) {
  return props.wrapValue ? typo.lineWrap : typo.ellipsis;
});
/**
 * 功能简单的 key-value 对展示
 */

export default function KeyValue(_ref) {
  var o = _ref.o,
      ignoreEmpty = _ref.ignoreEmpty,
      wrapValue = _ref.wrapValue,
      props = _objectWithoutProperties(_ref, ["o", "ignoreEmpty", "wrapValue"]);

  var arr = convertItems(o, ignoreEmpty);

  if (!arr.length) {
    return null;
  }

  return /*#__PURE__*/React.createElement(ScKeyValue, props, arr.map(function (_ref2, i) {
    var key = _ref2.key,
        k = _ref2.k,
        v = _ref2.v;
    return /*#__PURE__*/React.createElement(ScItem, {
      key: key || i
    }, /*#__PURE__*/React.createElement(ScItemK, null, k), /*#__PURE__*/React.createElement(ScItemV, {
      wrapValue: wrapValue
    }, v));
  }));
}