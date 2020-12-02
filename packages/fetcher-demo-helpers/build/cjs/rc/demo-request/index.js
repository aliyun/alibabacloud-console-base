"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FetcherDemoRcRequest;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _demoRcElements = require("@alicloud/demo-rc-elements");

var _requestWithConfig = _interopRequireDefault(require("../request-with-config"));

var _knobs = _interopRequireDefault(require("../knobs"));

function FetcherDemoRcRequest(_ref) {
  var _ref$defaultConfig = _ref.defaultConfig,
      defaultConfig = _ref$defaultConfig === void 0 ? {} : _ref$defaultConfig,
      request = _ref.request;

  var _useState = (0, _react.useState)(defaultConfig),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      stateConfig = _useState2[0],
      setStateConfig = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_knobs.default, {
    defaults: defaultConfig,
    onChange: setStateConfig
  }), /*#__PURE__*/_react.default.createElement(_demoRcElements.PreJson, {
    headnote: 'config',
    o: stateConfig
  }), /*#__PURE__*/_react.default.createElement(_requestWithConfig.default, {
    config: stateConfig,
    request: request
  }));
}