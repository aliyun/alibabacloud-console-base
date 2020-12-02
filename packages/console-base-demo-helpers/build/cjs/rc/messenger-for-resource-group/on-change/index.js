"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OnChange;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _demoRcElements = require("@alicloud/demo-rc-elements");

var _consoleBaseMessenger = require("@alicloud/console-base-messenger");

function OnChange() {
  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      stateValue = _useState2[0],
      setStateValue = _useState2[1];

  (0, _react.useEffect)(function () {
    return _consoleBaseMessenger.forApp.onResourceGroupChange(setStateValue);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_demoRcElements.H3, null, "forApp.onResourceGroupChange() \u2192 stateValue"), /*#__PURE__*/_react.default.createElement(_demoRcElements.PreJson, {
    o: stateValue
  }));
}