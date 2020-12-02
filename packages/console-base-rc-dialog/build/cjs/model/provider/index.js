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

var _getContextProps = _interopRequireDefault(require("../util/get-context-props"));

var _getDefaultContextState = _interopRequireDefault(require("../util/get-default-context-state"));

var _reducer = _interopRequireDefault(require("../reducer"));

var _lifecycle = _interopRequireDefault(require("../lifecycle"));

var _context = _interopRequireDefault(require("./_context"));

function Provider(_ref) {
  var props = _ref.props,
      children = _ref.children;
  var refDialog = (0, _react.useRef)(); // 指向 dialog 本身节点

  var refContent = (0, _react.useRef)(); // 指向 dialog 内容节点

  var _useReducer = (0, _react.useReducer)(_reducer.default, (0, _getDefaultContextState.default)(props.data)),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      STATE = _useReducer2[0],
      dispatch = _useReducer2[1];

  var PROPS = (0, _react.useMemo)(function () {
    return (0, _getContextProps.default)(props, STATE.propsUpdate);
  }, [props, STATE.propsUpdate]);
  var REF = (0, _react.useMemo)(function () {
    return {
      refDialog: refDialog,
      refContent: refContent
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