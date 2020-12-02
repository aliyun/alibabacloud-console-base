import React, { useEffect } from 'react';
import { H2, P } from '@alicloud/demo-rc-elements';
import { forConsoleBase } from '@alicloud/console-base-messenger';
export default function MessengerReady() {
  useEffect(function () {
    forConsoleBase.ready();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H2, null, "forConsoleBase.ready()"), /*#__PURE__*/React.createElement(P, null, "\u53EA\u6709 ", /*#__PURE__*/React.createElement("code", null, "forConsoleBase.ready()"), " \u540E\u624D\u53EF\u4EE5\u8FDB\u884C\u4EA4\u4E92\uFF0C\u5728\u7EC4\u4EF6\u6D4B\u8BD5\u4E2D\u9700\u8981\u624B\u52A8\u8C03\u7528\u3002"));
}