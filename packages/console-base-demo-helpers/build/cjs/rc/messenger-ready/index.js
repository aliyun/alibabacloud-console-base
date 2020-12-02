"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MessengerReady;

var _react = _interopRequireWildcard(require("react"));

var _demoRcElements = require("@alicloud/demo-rc-elements");

var _consoleBaseMessenger = require("@alicloud/console-base-messenger");

function MessengerReady() {
  (0, _react.useEffect)(function () {
    _consoleBaseMessenger.forConsoleBase.ready();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_demoRcElements.H2, null, "forConsoleBase.ready()"), /*#__PURE__*/_react.default.createElement(_demoRcElements.P, null, "\u53EA\u6709 ", /*#__PURE__*/_react.default.createElement("code", null, "forConsoleBase.ready()"), " \u540E\u624D\u53EF\u4EE5\u8FDB\u884C\u4EA4\u4E92\uFF0C\u5728\u7EC4\u4EF6\u6D4B\u8BD5\u4E2D\u9700\u8981\u624B\u52A8\u8C03\u7528\u3002"));
}