import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect } from 'react';
import { H3, PreJson } from '@alicloud/demo-rc-elements';
import { forApp } from '@alicloud/console-base-messenger';
export default function OnChange() {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      stateValue = _useState2[0],
      setStateValue = _useState2[1];

  useEffect(function () {
    return forApp.onResourceGroupChange(setStateValue);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H3, null, "forApp.onResourceGroupChange() \u2192 stateValue"), /*#__PURE__*/React.createElement(PreJson, {
    o: stateValue
  }));
}