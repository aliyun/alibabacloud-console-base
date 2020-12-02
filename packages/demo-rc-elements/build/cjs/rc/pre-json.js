"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PreJson;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _pre = _interopRequireDefault(require("./pre"));

function replacer(k, val) {
  if (typeof val === 'function') {
    return val.toString();
  }

  if ( /*#__PURE__*/_react.default.isValidElement(val)) {
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


function PreJson(_ref) {
  var o = _ref.o,
      props = (0, _objectWithoutProperties2.default)(_ref, ["o"]);
  return /*#__PURE__*/_react.default.createElement(_pre.default, props, formatJson(o));
}