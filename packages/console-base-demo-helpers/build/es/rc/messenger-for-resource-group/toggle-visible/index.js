import React, { useCallback } from 'react';
import { H3 } from '@alicloud/demo-rc-elements';
import { forApp } from '@alicloud/console-base-messenger';
export default function ToggleVisible() {
  var handleToggleVisible = useCallback(function (e) {
    var checked = e.target.checked;
    forApp.toggleResourceGroup(checked);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H3, null, "forApp.toggleResourceGroup(true/false)"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    onChange: handleToggleVisible,
    defaultChecked: true
  }), "\u5C55\u793A / \u9690\u85CF"));
}