import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { PreJson } from '@alicloud/demo-rc-elements';
import RequestWithConfig from '../request-with-config';
import Knobs from '../knobs';
export default function FetcherDemoRcRequest(_ref) {
  var _ref$defaultConfig = _ref.defaultConfig,
      defaultConfig = _ref$defaultConfig === void 0 ? {} : _ref$defaultConfig,
      request = _ref.request;

  var _useState = useState(defaultConfig),
      _useState2 = _slicedToArray(_useState, 2),
      stateConfig = _useState2[0],
      setStateConfig = _useState2[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Knobs, {
    defaults: defaultConfig,
    onChange: setStateConfig
  }), /*#__PURE__*/React.createElement(PreJson, {
    headnote: 'config',
    o: stateConfig
  }), /*#__PURE__*/React.createElement(RequestWithConfig, {
    config: stateConfig,
    request: request
  }));
}