import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useReducer, useMemo, useRef } from 'react';
import getContextProps from '../util/get-context-props';
import getDefaultContextState from '../util/get-default-context-state';
import reducer from '../reducer';
import Lifecycle from '../lifecycle';
import Context from './_context';
export default function Provider(_ref) {
  var props = _ref.props,
      children = _ref.children;
  var refDialog = useRef(); // 指向 dialog 本身节点

  var refContent = useRef(); // 指向 dialog 内容节点

  var _useReducer = useReducer(reducer, getDefaultContextState(props.data)),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      STATE = _useReducer2[0],
      dispatch = _useReducer2[1];

  var PROPS = useMemo(function () {
    return getContextProps(props, STATE.propsUpdate);
  }, [props, STATE.propsUpdate]);
  var REF = useMemo(function () {
    return {
      refDialog: refDialog,
      refContent: refContent
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