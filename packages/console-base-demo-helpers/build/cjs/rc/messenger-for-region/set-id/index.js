"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SetId;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _demoRcElements = require("@alicloud/demo-rc-elements");

var _consoleBaseMessenger = require("@alicloud/console-base-messenger");

function SetId() {
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      stateValue = _useState2[0],
      setStateValue = _useState2[1];

  var handleInputChange = (0, _react.useCallback)(function (e) {
    var value = e.target.value;
    setStateValue(value);
  }, []);
  var handleSet = (0, _react.useCallback)(function () {
    return _consoleBaseMessenger.forApp.setRegionId(stateValue);
  }, [stateValue]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_demoRcElements.H3, null, "forApp.setRegionId(id)"), /*#__PURE__*/_react.default.createElement(_demoRcElements.P, null, "\u8BBE\u7F6E\u5F53\u524D region id\uFF08\u81EA\u52A8\u5207\u6362\u4E3A\u300C\u975E\u5168\u7403\u300D\u6A21\u5F0F\uFF09"), /*#__PURE__*/_react.default.createElement(_demoRcElements.InputText, {
    onChange: handleInputChange,
    value: stateValue
  }), /*#__PURE__*/_react.default.createElement(_demoRcElements.Button, {
    onClick: handleSet
  }, "\u8BBE\u7F6E"));
}