import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  line-height: 1.5;\n  overflow: hidden;\n  white-space: nowrap;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { Fragment } from 'react';
import styled from 'styled-components';
import { COLOR } from '@alicloud/console-base-styled-mixin';
import Separator from './separator';
import Item from './item';
var ScBreadcrumb = styled.div(_templateObject(), COLOR.TEXT_SECONDARY);
/**
 * 面包屑
 */

export default function Breadcrumb(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      props = _objectWithoutProperties(_ref, ["items"]);

  if (!items.length) {
    return null;
  }

  return /*#__PURE__*/React.createElement(ScBreadcrumb, props, items.map(function (v, i) {
    return /*#__PURE__*/React.createElement(Fragment, {
      key: i
    }, i > 0 ? /*#__PURE__*/React.createElement(Separator, null) : null, /*#__PURE__*/React.createElement(Item, v));
  }));
}