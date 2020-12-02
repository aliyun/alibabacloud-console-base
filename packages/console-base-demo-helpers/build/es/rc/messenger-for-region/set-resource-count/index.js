import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useCallback } from 'react';
import { H3, P, Button, InputTextarea } from '@alicloud/demo-rc-elements';
import { forApp } from '@alicloud/console-base-messenger';
var RESOURCE_COUNT = {
  'cn-hangzhou': 1,
  'cn-shanghai': 12,
  boshit: 123
};
export default function SetResourceCount() {
  var _useState = useState(JSON.stringify(RESOURCE_COUNT)),
      _useState2 = _slicedToArray(_useState, 2),
      stateValue = _useState2[0],
      setStateValue = _useState2[1];

  var handleInputChange = useCallback(function (e) {
    var value = e.target.value;
    setStateValue(value);
  }, []);
  var handleSet = useCallback(function () {
    return forApp.setRegionResourceCount(JSON.parse(stateValue));
  }, [stateValue]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H3, null, "forApp.setRegionResourceCount(resourceCountMap)"), /*#__PURE__*/React.createElement(P, null, "\u8BBE\u7F6E\u8D44\u6E90\u6570\uFF08\u81EA\u52A8\u5207\u6362\u4E3A\u300C\u975E\u5168\u7403\u300D\u6A21\u5F0F\uFF09"), /*#__PURE__*/React.createElement(InputTextarea, {
    onChange: handleInputChange,
    value: stateValue
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: handleSet
  }, "\u8BBE\u7F6E"));
}