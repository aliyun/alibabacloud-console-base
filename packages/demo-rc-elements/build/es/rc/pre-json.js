import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import Pre from './pre';

function replacer(k, val) {
  if (typeof val === 'function') {
    return val.toString();
  }

  if ( /*#__PURE__*/React.isValidElement(val)) {
    return '# JSX #';
  }

  return val;
}

function formatJson(o) {
  try {
    return JSON.stringify(o, replacer, 2).replace(/"([$\w]+)":/g, '$1:');
  } catch (err) {
    return "[ERROR] ".concat(err.message);
  }
}
/**
 * 展示简化的 JSON
 */


export default function PreJson(_ref) {
  var o = _ref.o,
      props = _objectWithoutProperties(_ref, ["o"]);

  return /*#__PURE__*/React.createElement(Pre, props, formatJson(o));
}