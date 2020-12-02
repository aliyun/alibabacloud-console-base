import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useCallback, useEffect } from 'react';
import { Button, PrePromise } from '@alicloud/demo-rc-elements';
export default function RequestWithConfig(_ref) {
  var config = _ref.config,
      request = _ref.request;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      statePromise = _useState2[0],
      setStatePromise = _useState2[1];

  var handleDoRequest = useCallback(function () {
    return setStatePromise(request(config));
  }, [request, config]);
  useEffect(handleDoRequest, [handleDoRequest]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleDoRequest
  }, "request"), /*#__PURE__*/React.createElement(PrePromise, {
    headnote: "result",
    promise: statePromise
  }));
}