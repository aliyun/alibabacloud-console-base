"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MessengerForResourceGroup;

var _react = _interopRequireDefault(require("react"));

var _demoRcElements = require("@alicloud/demo-rc-elements");

var _onChange = _interopRequireDefault(require("./on-change"));

var _toggleVisible = _interopRequireDefault(require("./toggle-visible"));

var _setId = _interopRequireDefault(require("./set-id"));

var _setResourceCount = _interopRequireDefault(require("./set-resource-count"));

function MessengerForResourceGroup() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_demoRcElements.H2, null, "\u8D44\u6E90\u7EC4\u9009\u62E9\u5668"), /*#__PURE__*/_react.default.createElement(_onChange.default, null), /*#__PURE__*/_react.default.createElement(_toggleVisible.default, null), /*#__PURE__*/_react.default.createElement(_setId.default, null), /*#__PURE__*/_react.default.createElement(_setResourceCount.default, null));
}