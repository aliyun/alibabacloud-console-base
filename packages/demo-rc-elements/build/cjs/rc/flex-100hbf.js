"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Flex100HBF;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding: 0 12px;\n  background-color: #ec7f7f;\n  height: 48px;\n  line-height: 48px;\n  color: #fff;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  flex: 1;\n  overflow: auto;\n  \n  video {\n    width: 100%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding: 0 12px;\n  background-color: #dbb585;\n  height: 36px;\n  line-height: 36px;\n  color: #fff;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ScFlexHBF = _styledComponents.default.div(_templateObject());

var ScHeader = _styledComponents.default.header(_templateObject2());

var ScBody = _styledComponents.default.div(_templateObject3());

var ScFooter = _styledComponents.default.div(_templateObject4());

var VIDEO_SRC = '//cloud.video.taobao.com/play/u/2228430214/p/1/e/6/t/1/228097371190.mp4';

function DefaultBody() {
  return /*#__PURE__*/_react.default.createElement("video", {
    src: VIDEO_SRC,
    controls: true
  }, /*#__PURE__*/_react.default.createElement("track", {
    kind: "captions",
    srcLang: "en",
    label: VIDEO_SRC
  }), "Your Browser does NOT support video.");
}
/**
 * Flex 100% 高度，上中下三部分
 */


function Flex100HBF(_ref) {
  var header = _ref.header,
      body = _ref.body,
      footer = _ref.footer;
  return /*#__PURE__*/_react.default.createElement(ScFlexHBF, null, /*#__PURE__*/_react.default.createElement(ScHeader, null, header || 'header'), /*#__PURE__*/_react.default.createElement(ScBody, null, body || /*#__PURE__*/_react.default.createElement(DefaultBody, null)), /*#__PURE__*/_react.default.createElement(ScFooter, null, footer || 'footer'));
}