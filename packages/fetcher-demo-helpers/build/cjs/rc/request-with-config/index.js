"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RequestWithConfig;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _demoRcElements = require("@alicloud/demo-rc-elements");

function RequestWithConfig(_ref) {
  var config = _ref.config,
      request = _ref.request;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      statePromise = _useState2[0],
      setStatePromise = _useState2[1];

  var handleDoRequest = (0, _react.useCallback)(function () {
    return setStatePromise(request(config));
  }, [request, config]);
  (0, _react.useEffect)(handleDoRequest, [handleDoRequest]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_demoRcElements.Button, {
    onClick: handleDoRequest
  }, "request"), /*#__PURE__*/_react.default.createElement(_demoRcElements.PrePromise, {
    headnote: "result",
    promise: statePromise
  }));
}