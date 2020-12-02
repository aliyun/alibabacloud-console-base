"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MessengerForTopNav;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _demoRcElements = require("@alicloud/demo-rc-elements");

var _consoleBaseMessenger = require("@alicloud/console-base-messenger");

function MessengerForTopNav() {
  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      stateVisible = _useState2[0],
      setStateVisible = _useState2[1];

  var handleToggleVisible = (0, _react.useCallback)(function (e) {
    var checked = e.target.checked;
    setStateVisible(checked);

    _consoleBaseMessenger.forApp.toggleTopNav(checked);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_demoRcElements.H2, null, "\u9876\u680F"), /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    onChange: handleToggleVisible,
    checked: stateVisible
  }), "\u5C55\u793A / \u9690\u85CF"));
}