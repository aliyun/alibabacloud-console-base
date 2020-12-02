"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToggleVisible;

var _react = _interopRequireWildcard(require("react"));

var _demoRcElements = require("@alicloud/demo-rc-elements");

var _consoleBaseMessenger = require("@alicloud/console-base-messenger");

function ToggleVisible() {
  var handleToggleVisible = (0, _react.useCallback)(function (e) {
    var checked = e.target.checked;

    _consoleBaseMessenger.forApp.toggleRegion(checked);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_demoRcElements.H3, null, "forApp.toggleRegion(true/false)"), /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    onChange: handleToggleVisible,
    defaultChecked: true
  }), "\u5C55\u793A / \u9690\u85CF"));
}