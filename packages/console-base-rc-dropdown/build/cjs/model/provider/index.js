"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Provider;
Object.defineProperty(exports, "Context", {
  enumerable: true,
  get: function get() {
    return _context.default;
  }
});

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _const = require("../const");

var _reducer = _interopRequireDefault(require("../reducer"));

var _lifecycle = _interopRequireDefault(require("../lifecycle"));

var _context = _interopRequireDefault(require("./_context"));

function Provider(_ref) {
  var props = _ref.props,
      children = _ref.children;
  var refDropdown = (0, _react.useRef)();

  var _useReducer = (0, _react.useReducer)(_reducer.default, _const.DEFAULT_STATE),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      STATE = _useReducer2[0],
      dispatch = _useReducer2[1];

  var PROPS = props;
  var REF = (0, _react.useMemo)(function () {
    return {
      refDropdown: refDropdown
    };
  }, []);
  var contextValue = (0, _react.useMemo)(function () {
    return {
      REF: REF,
      PROPS: PROPS,
      STATE: STATE,
      dispatch: dispatch
    };
  }, [REF, PROPS, STATE, dispatch]);
  return /*#__PURE__*/_react.default.createElement(_context.default.Provider, {
    value: contextValue
  }, /*#__PURE__*/_react.default.createElement(_lifecycle.default, null), children);
}