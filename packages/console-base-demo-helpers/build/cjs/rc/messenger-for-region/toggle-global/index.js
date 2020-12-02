"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToggleGlobal;

var _react = _interopRequireWildcard(require("react"));

var _demoRcElements = require("@alicloud/demo-rc-elements");

var _consoleBaseMessenger = require("@alicloud/console-base-messenger");

function ToggleGlobal() {
  var handleToggleGlobal = (0, _react.useCallback)(function (e) {
    var checked = e.target.checked;

    _consoleBaseMessenger.forApp.toggleRegionGlobal(checked);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_demoRcElements.H3, null, "forApp.toggleRegionGlobal(true/false)"), /*#__PURE__*/_react.default.createElement(_demoRcElements.P, null, "\u5207\u6362\u300C\u5168\u7403\u300D\u6A21\u5F0F\uFF08\u4EC5\u5C55\u793A\u7528\uFF09"), /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    onChange: handleToggleGlobal
  }), "\u5168\u7403"));
}