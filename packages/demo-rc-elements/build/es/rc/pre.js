import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  bottom: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  top: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n  right: 0;\n  padding: 2px 8px;\n  line-height: 1.15;\n  font-size: 0.9em;\n  background-color: rgba(0, 0, 0, 0.05);\n  color: #333;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 8px 12px;\n  border: 1px solid #f0f0f0;\n  background-color: #fcfcfc;\n  line-height: 1.5;\n  overflow: auto;\n  font-family: Operator Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace, serif;\n  font-size: 12px;\n  white-space: pre-wrap;\n  word-break: break-all;\n  color: #999;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
var ScPre = styled.pre(_templateObject());
var ScNote = styled.span(_templateObject2());
var ScHeadnote = styled(ScNote)(_templateObject3());
var ScFootnote = styled(ScNote)(_templateObject4());
export default function Pre(_ref) {
  var headnote = _ref.headnote,
      footnote = _ref.footnote,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["headnote", "footnote", "children"]);

  return /*#__PURE__*/React.createElement(ScPre, props, headnote ? /*#__PURE__*/React.createElement(ScHeadnote, null, headnote) : null, children, footnote ? /*#__PURE__*/React.createElement(ScFootnote, null, footnote) : null);
}