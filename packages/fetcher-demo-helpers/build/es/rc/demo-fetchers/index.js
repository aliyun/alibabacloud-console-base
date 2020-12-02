import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  overflow: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { useState } from 'react';
import styled from 'styled-components';
import { H2, H3, PreJson } from '@alicloud/demo-rc-elements';
import Knobs from '../knobs';
import RequestWithConfig from '../request-with-config';
var ScTwoFetchers = styled.div(_templateObject());
var ScOneFetcher = styled.div(_templateObject2());
export default function FetcherDemoRcFetchers(_ref) {
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

  var _useState = useState(defaultConfig),
      _useState2 = _slicedToArray(_useState, 2),
      stateConfig = _useState2[0],
      setStateConfig = _useState2[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H2, null, title), /*#__PURE__*/React.createElement(Knobs, {
    urls: urls,
    defaults: defaultConfig,
    onChange: setStateConfig
  }), /*#__PURE__*/React.createElement(PreJson, {
    headnote: 'config',
    o: stateConfig
  }), /*#__PURE__*/React.createElement(ScTwoFetchers, null, /*#__PURE__*/React.createElement(ScOneFetcher, null, /*#__PURE__*/React.createElement(H3, null, fetcher0Title), /*#__PURE__*/React.createElement(RequestWithConfig, {
    config: stateConfig,
    request: fetcher0.request
  })), /*#__PURE__*/React.createElement(ScOneFetcher, null, /*#__PURE__*/React.createElement(H3, null, fetcher1Title), /*#__PURE__*/React.createElement(RequestWithConfig, {
    config: stateConfig,
    request: fetcher1.request
  }))));
}