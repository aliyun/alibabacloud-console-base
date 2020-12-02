import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    border-radius: ", "px;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      &:hover,\n      &:focus {\n        border-color: ", ";\n      }\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        border-color: ", ";\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        border-color: transparent;\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        background-color: ", ";\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n  align-items: center;\n  position: relative;\n  border: 1px solid ", ";\n  height: ", "px;\n  line-height: ", "px;\n  font-size: ", "px;\n  transition: all 0.3s ease-out;\n  ", ";\n  ", ";\n  ", ";\n  \n  ", ",\n  ", ",\n  ", " {\n    height: ", "px;\n    line-height: ", "px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding-right: ", "px;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding-left: ", "px;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 ", "px;\n  border: 0;\n  box-sizing: border-box;\n  outline: none;\n  background: transparent;\n  width: 100%;\n  color: ", ";\n  \n  &::placeholder {\n    color: ", ";\n  }\n  \n  &::-ms-clear {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  flex: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { COLOR, FORM_CONTROL } from '@alicloud/console-base-styled-mixin';

function renderInner(inner, focused) {
  if (!inner) {
    return null;
  }

  if ( /*#__PURE__*/React.isValidElement(inner) || typeof inner === 'string') {
    return inner;
  }

  if (typeof inner === 'function') {
    return inner(focused);
  }

  return null;
} // input 有个诡异的宽度，需要一个容器限制一下（然后在 input 上设一个 width: 100%）


var ScInputWrap = styled.span(_templateObject());
var ScInnerInput = styled.input(_templateObject2(), FORM_CONTROL.PADDING.M - 4, COLOR.TEXT_PRIMARY, COLOR.TEXT_DISABLED);
var ScInnerLeft = styled.span(_templateObject3(), FORM_CONTROL.PADDING.M - 2, COLOR.TEXT_CAPTION);
var ScInnerRight = styled.span(_templateObject4(), FORM_CONTROL.PADDING.M - 2, COLOR.TEXT_CAPTION);
var ScInput = styled.div(_templateObject5(), function (props) {
  return props.block ? 'flex' : 'inline-flex';
}, COLOR.LINE, FORM_CONTROL.HEIGHT.M - 2, FORM_CONTROL.HEIGHT.M - 2, FORM_CONTROL.FONT_SIZE.M, function (props) {
  if (props.disabled) {
    return css(_templateObject6(), COLOR.FILL_LIGHTER);
  }
}, function (props) {
  if (props.borderless) {
    return css(_templateObject7());
  }

  if (props.disabled) {
    return css(_templateObject8(), COLOR.LINE_LIGHT);
  }

  return css(_templateObject9(), COLOR.LINE_DARK);
}, function (props) {
  return props.round ? css(_templateObject10(), FORM_CONTROL.HEIGHT.M / 2) : null;
}, ScInnerInput, ScInnerLeft, ScInnerRight, FORM_CONTROL.HEIGHT.M - 2, FORM_CONTROL.HEIGHT.M - 2);
export default function Input(_ref) {
  var block = _ref.block,
      round = _ref.round,
      borderless = _ref.borderless,
      disabled = _ref.disabled,
      innerLeft = _ref.innerLeft,
      innerRight = _ref.innerRight,
      className = _ref.className,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["block", "round", "borderless", "disabled", "innerLeft", "innerRight", "className", "onFocus", "onBlur", "onChange", "style"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      focused = _useState2[0],
      setStateFocused = _useState2[1];

  var handleFocus = useCallback(function (e) {
    setStateFocused(true);

    if (onFocus) {
      onFocus(e);
    }
  }, [onFocus, setStateFocused]);
  var handleBlur = useCallback(function (e) {
    setStateFocused(false);

    if (onBlur) {
      onBlur(e);
    }
  }, [onBlur, setStateFocused]);
  var handleChange = useCallback(function (e) {
    if (onChange) {
      onChange(e.target.value, e);
    }
  }, [onChange]);
  var jsxInnerL = renderInner(innerLeft, focused);
  var jsxInnerR = renderInner(innerRight, focused);
  return /*#__PURE__*/React.createElement(ScInput, {
    className: className,
    block: block,
    round: round,
    borderless: borderless,
    disabled: disabled,
    style: style
  }, jsxInnerL ? /*#__PURE__*/React.createElement(ScInnerLeft, null, jsxInnerL) : null, /*#__PURE__*/React.createElement(ScInputWrap, null, /*#__PURE__*/React.createElement(ScInnerInput, _objectSpread(_objectSpread({
    type: 'text',
    'aria-autocomplete': 'none',
    autocomplete: 'off',
    disabled: disabled
  }, props), {}, {
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange
  }))), jsxInnerR ? /*#__PURE__*/React.createElement(ScInnerRight, null, jsxInnerR) : null);
}