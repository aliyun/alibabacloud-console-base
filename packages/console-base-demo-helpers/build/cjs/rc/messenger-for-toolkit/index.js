"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MessengerForToolkit;

var _react = _interopRequireWildcard(require("react"));

var _demoRcElements = require("@alicloud/demo-rc-elements");

var _consoleBaseMessenger = require("@alicloud/console-base-messenger");

function MessengerForToolkit() {
  var handlePutTool = (0, _react.useCallback)(function () {
    _consoleBaseMessenger.forApp.putToolkitItem({
      id: 'boshit',
      label: {
        html: '<span>💩</span>'
      },
      unread: 12
    });
  }, []);
  var handleRemoveTool = (0, _react.useCallback)(function () {
    _consoleBaseMessenger.forApp.removeToolkitItem('boshit');
  }, []);
  (0, _react.useEffect)(function () {
    _consoleBaseMessenger.forApp.putToolkitItem({
      id: 'before-ready',
      label: {
        html: '<span>🐞</span>'
      },
      tooltip: '测试 beforeReady'
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_demoRcElements.H2, null, "Toolkit"), /*#__PURE__*/_react.default.createElement(_demoRcElements.Button, {
    onClick: handlePutTool
  }, "Put Tool Item"), /*#__PURE__*/_react.default.createElement(_demoRcElements.Button, {
    onClick: handleRemoveTool
  }, "Remove Tool Item"));
}