"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pre;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  bottom: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  top: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: block;\n  position: absolute;\n  right: 0;\n  padding: 2px 8px;\n  line-height: 1.15;\n  font-size: 0.9em;\n  background-color: rgba(0, 0, 0, 0.05);\n  color: #333;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n  padding: 8px 12px;\n  border: 1px solid #f0f0f0;\n  background-color: #fcfcfc;\n  line-height: 1.5;\n  overflow: auto;\n  font-family: Operator Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace, serif;\n  font-size: 12px;\n  white-space: pre-wrap;\n  word-break: break-all;\n  color: #999;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ScPre = _styledComponents.default.pre(_templateObject());

var ScNote = _styledComponents.default.span(_templateObject2());

var ScHeadnote = (0, _styledComponents.default)(ScNote)(_templateObject3());
var ScFootnote = (0, _styledComponents.default)(ScNote)(_templateObject4());

function Pre(_ref) {
  var headnote = _ref.headnote,
      footnote = _ref.footnote,
      children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["headnote", "footnote", "children"]);
  return /*#__PURE__*/_react.default.createElement(ScPre, props, headnote ? /*#__PURE__*/_react.default.createElement(ScHeadnote, null, headnote) : null, children, footnote ? /*#__PURE__*/_react.default.createElement(ScFootnote, null, footnote) : null);
}