import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useCallback } from 'react';
import { H2 } from '@alicloud/demo-rc-elements';
import { forApp } from '@alicloud/console-base-messenger';
export default function MessengerForTopNav() {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      stateVisible = _useState2[0],
      setStateVisible = _useState2[1];

  var handleToggleVisible = useCallback(function (e) {
    var checked = e.target.checked;
    setStateVisible(checked);
    forApp.toggleTopNav(checked);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H2, null, "\u9876\u680F"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    onChange: handleToggleVisible,
    checked: stateVisible
  }), "\u5C55\u793A / \u9690\u85CF"));
}