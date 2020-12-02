import React, { useCallback } from 'react';
import { H3, P } from '@alicloud/demo-rc-elements';
import { forApp } from '@alicloud/console-base-messenger';
export default function ToggleGlobal() {
  var handleToggleGlobal = useCallback(function (e) {
    var checked = e.target.checked;
    forApp.toggleRegionGlobal(checked);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H3, null, "forApp.toggleRegionGlobal(true/false)"), /*#__PURE__*/React.createElement(P, null, "\u5207\u6362\u300C\u5168\u7403\u300D\u6A21\u5F0F\uFF08\u4EC5\u5C55\u793A\u7528\uFF09"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    onChange: handleToggleGlobal
  }), "\u5168\u7403"));
}