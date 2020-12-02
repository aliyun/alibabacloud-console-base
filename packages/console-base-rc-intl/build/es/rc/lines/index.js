import _extends from "@babel/runtime/helpers/esm/extends";

/* eslint-disable react/no-array-index-key */
import React from 'react';
import { ETypeLine } from '../../const';
import makeHtmlProps from '../../util/make-html-props';
export default function Lines(_ref) {
  var type = _ref.type,
      items = _ref.items,
      html = _ref.html;

  switch (type) {
    case ETypeLine.OL:
      return /*#__PURE__*/React.createElement("ol", null, items.map(function (v, i) {
        return html ? /*#__PURE__*/React.createElement("li", _extends({
          key: i
        }, makeHtmlProps(v))) : /*#__PURE__*/React.createElement("li", {
          key: i
        }, v);
      }));

    case ETypeLine.UL:
      return /*#__PURE__*/React.createElement("ul", null, items.map(function (v, i) {
        return html ? /*#__PURE__*/React.createElement("li", _extends({
          key: i
        }, makeHtmlProps(v))) : /*#__PURE__*/React.createElement("li", {
          key: i
        }, v);
      }));

    case ETypeLine.HR:
      return /*#__PURE__*/React.createElement("hr", null);

    default:
      return /*#__PURE__*/React.createElement(React.Fragment, null, items.map(function (v, i) {
        return html ? /*#__PURE__*/React.createElement("p", _extends({
          key: i
        }, makeHtmlProps(v))) : /*#__PURE__*/React.createElement("p", {
          key: i
        }, v);
      }));
  }
}