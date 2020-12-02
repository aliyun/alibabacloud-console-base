import React, { useCallback, useEffect } from 'react';
import { H2, Button } from '@alicloud/demo-rc-elements';
import { forApp } from '@alicloud/console-base-messenger';
export default function MessengerForToolkit() {
  var handlePutTool = useCallback(function () {
    forApp.putToolkitItem({
      id: 'boshit',
      label: {
        html: '<span>💩</span>'
      },
      unread: 12
    });
  }, []);
  var handleRemoveTool = useCallback(function () {
    forApp.removeToolkitItem('boshit');
  }, []);
  useEffect(function () {
    forApp.putToolkitItem({
      id: 'before-ready',
      label: {
        html: '<span>🐞</span>'
      },
      tooltip: '测试 beforeReady'
    });
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H2, null, "Toolkit"), /*#__PURE__*/React.createElement(Button, {
    onClick: handlePutTool
  }, "Put Tool Item"), /*#__PURE__*/React.createElement(Button, {
    onClick: handleRemoveTool
  }, "Remove Tool Item"));
}