"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = KeyValue;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _convertItems = _interopRequireDefault(require("../../util/convert-items"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  flex: 1;\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin-right: 1em;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  margin: 4px 0;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ScKeyValue = _styledComponents.default.div(_templateObject());

var ScItem = _styledComponents.default.div(_templateObject2(), _consoleBaseStyledMixin.COLOR.TEXT_PRIMARY);

var ScItemK = _styledComponents.default.div(_templateObject3(), _consoleBaseStyledMixin.COLOR.TEXT_CAPTION);

var ScItemV = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.wrapValue ? _consoleBaseStyledMixin.typo.lineWrap : _consoleBaseStyledMixin.typo.ellipsis;
});
/**
 * 功能简单的 key-value 对展示
 */


function KeyValue(_ref) {
  var o = _ref.o,
      ignoreEmpty = _ref.ignoreEmpty,
      wrapValue = _ref.wrapValue,
      props = (0, _objectWithoutProperties2.default)(_ref, ["o", "ignoreEmpty", "wrapValue"]);
  var arr = (0, _convertItems.default)(o, ignoreEmpty);

  if (!arr.length) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(ScKeyValue, props, arr.map(function (_ref2, i) {
    var key = _ref2.key,
        k = _ref2.k,
        v = _ref2.v;
    return /*#__PURE__*/_react.default.createElement(ScItem, {
      key: key || i
    }, /*#__PURE__*/_react.default.createElement(ScItemK, null, k), /*#__PURE__*/_react.default.createElement(ScItemV, {
      wrapValue: wrapValue
    }, v));
  }));
}