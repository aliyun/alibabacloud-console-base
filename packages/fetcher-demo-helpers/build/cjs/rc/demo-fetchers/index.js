"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FetcherDemoRcFetchers;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _demoRcElements = require("@alicloud/demo-rc-elements");

var _knobs = _interopRequireDefault(require("../knobs"));

var _requestWithConfig = _interopRequireDefault(require("../request-with-config"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  flex: 1;\n  overflow: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ScTwoFetchers = _styledComponents.default.div(_templateObject());

var ScOneFetcher = _styledComponents.default.div(_templateObject2());

function FetcherDemoRcFetchers(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'fetcher 效果对比' : _ref$title,
      urls = _ref.urls,
      _ref$defaultConfig = _ref.defaultConfig,
      defaultConfig = _ref$defaultConfig === void 0 ? {} : _ref$defaultConfig,
      fetcher0 = _ref.fetcher0,
      fetcher1 = _ref.fetcher1,
      _ref$fetcher0Title = _ref.fetcher0Title,
      fetcher0Title = _ref$fetcher0Title === void 0 ? '无拦截器' : _ref$fetcher0Title,
      _ref$fetcher1Title = _ref.fetcher1Title,
      fetcher1Title = _ref$fetcher1Title === void 0 ? '有拦截器' : _ref$fetcher1Title;

  var _useState = (0, _react.useState)(defaultConfig),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      stateConfig = _useState2[0],
      setStateConfig = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_demoRcElements.H2, null, title), /*#__PURE__*/_react.default.createElement(_knobs.default, {
    urls: urls,
    defaults: defaultConfig,
    onChange: setStateConfig
  }), /*#__PURE__*/_react.default.createElement(_demoRcElements.PreJson, {
    headnote: 'config',
    o: stateConfig
  }), /*#__PURE__*/_react.default.createElement(ScTwoFetchers, null, /*#__PURE__*/_react.default.createElement(ScOneFetcher, null, /*#__PURE__*/_react.default.createElement(_demoRcElements.H3, null, fetcher0Title), /*#__PURE__*/_react.default.createElement(_requestWithConfig.default, {
    config: stateConfig,
    request: fetcher0.request
  })), /*#__PURE__*/_react.default.createElement(ScOneFetcher, null, /*#__PURE__*/_react.default.createElement(_demoRcElements.H3, null, fetcher1Title), /*#__PURE__*/_react.default.createElement(_requestWithConfig.default, {
    config: stateConfig,
    request: fetcher1.request
  }))));
}