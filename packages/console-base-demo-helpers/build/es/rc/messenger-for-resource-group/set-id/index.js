import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useCallback } from 'react';
import { H3, P, Button, InputText } from '@alicloud/demo-rc-elements';
import { forApp } from '@alicloud/console-base-messenger';
export default function SetId() {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      stateValue = _useState2[0],
      setStateValue = _useState2[1];

  var handleInputChange = useCallback(function (e) {
    var value = e.target.value;
    setStateValue(value);
  }, []);
  var handleSet = useCallback(function () {
    return forApp.setResourceGroupId(stateValue);
  }, [stateValue]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H3, null, "forApp.setResourceGroupId(id)"), /*#__PURE__*/React.createElement(P, null, "\u8BBE\u7F6E\u5F53\u524D\u8D44\u6E90\u7EC4 id\uFF08\u81EA\u52A8\u5C55\u793A\uFF09"), /*#__PURE__*/React.createElement(InputText, {
    onChange: handleInputChange,
    value: stateValue
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: handleSet
  }, "\u8BBE\u7F6E"));
}