import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useCallback } from 'react';
import { H3, P, Button, InputTextarea } from '@alicloud/demo-rc-elements';
import { forApp } from '@alicloud/console-base-messenger';
export default function SetResourceCount() {
  var _useState = useState('{}'),
      _useState2 = _slicedToArray(_useState, 2),
      stateValue = _useState2[0],
      setStateValue = _useState2[1];

  var handleInputChange = useCallback(function (e) {
    var value = e.target.value;
    setStateValue(value);
  }, []);
  var handleSet = useCallback(function () {
    return forApp.setResourceGroupResourceCount(JSON.parse(stateValue));
  }, [stateValue]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H3, null, "forApp.setResourceGroupResourceCount(o)"), /*#__PURE__*/React.createElement(P, null, "\u8BBE\u7F6E\u8D44\u6E90\u6570"), /*#__PURE__*/React.createElement(InputTextarea, {
    onChange: handleInputChange,
    value: stateValue
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: handleSet
  }, "\u8BBE\u7F6E"));
}