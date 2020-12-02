import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 12px;\n  background-color: #ec7f7f;\n  height: 48px;\n  line-height: 48px;\n  color: #fff;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  overflow: auto;\n  \n  video {\n    width: 100%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 12px;\n  background-color: #dbb585;\n  height: 36px;\n  line-height: 36px;\n  color: #fff;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
var ScFlexHBF = styled.div(_templateObject());
var ScHeader = styled.header(_templateObject2());
var ScBody = styled.div(_templateObject3());
var ScFooter = styled.div(_templateObject4());
var VIDEO_SRC = '//cloud.video.taobao.com/play/u/2228430214/p/1/e/6/t/1/228097371190.mp4';

function DefaultBody() {
  return /*#__PURE__*/React.createElement("video", {
    src: VIDEO_SRC,
    controls: true
  }, /*#__PURE__*/React.createElement("track", {
    kind: "captions",
    srcLang: "en",
    label: VIDEO_SRC
  }), "Your Browser does NOT support video.");
}
/**
 * Flex 100% 高度，上中下三部分
 */


export default function Flex100HBF(_ref) {
  var header = _ref.header,
      body = _ref.body,
      footer = _ref.footer;
  return /*#__PURE__*/React.createElement(ScFlexHBF, null, /*#__PURE__*/React.createElement(ScHeader, null, header || 'header'), /*#__PURE__*/React.createElement(ScBody, null, body || /*#__PURE__*/React.createElement(DefaultBody, null)), /*#__PURE__*/React.createElement(ScFooter, null, footer || 'footer'));
}