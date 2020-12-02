import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useReducer, useMemo, useRef } from 'react';
import { DEFAULT_STATE } from '../const';
import reducer from '../reducer';
import Lifecycle from '../lifecycle';
import Context from './_context';
export default function Provider(_ref) {
  var props = _ref.props,
      children = _ref.children;
  var refDropdown = useRef();

  var _useReducer = useReducer(reducer, DEFAULT_STATE),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      STATE = _useReducer2[0],
      dispatch = _useReducer2[1];

  var PROPS = props;
  var REF = useMemo(function () {
    return {
      refDropdown: refDropdown
    };
  }, []);
  var contextValue = useMemo(function () {
    return {
      REF: REF,
      PROPS: PROPS,
      STATE: STATE,
      dispatch: dispatch
    };
  }, [REF, PROPS, STATE, dispatch]);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(Lifecycle, null), children);
}
export { Context };