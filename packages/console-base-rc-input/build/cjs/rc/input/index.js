"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Input;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    border-radius: ", "px;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n      &:hover,\n      &:focus {\n        border-color: ", ";\n      }\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n        border-color: ", ";\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n        border-color: transparent;\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n        background-color: ", ";\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: ", ";\n  align-items: center;\n  position: relative;\n  border: 1px solid ", ";\n  height: ", "px;\n  line-height: ", "px;\n  font-size: ", "px;\n  transition: all 0.3s ease-out;\n  ", ";\n  ", ";\n  ", ";\n  \n  ", ",\n  ", ",\n  ", " {\n    height: ", "px;\n    line-height: ", "px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding-right: ", "px;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding-left: ", "px;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding: 0 ", "px;\n  border: 0;\n  box-sizing: border-box;\n  outline: none;\n  background: transparent;\n  width: 100%;\n  color: ", ";\n  \n  &::placeholder {\n    color: ", ";\n  }\n  \n  &::-ms-clear {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: block;\n  flex: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function renderInner(inner, focused) {
  if (!inner) {
    return null;
  }

  if ( /*#__PURE__*/_react.default.isValidElement(inner) || typeof inner === 'string') {
    return inner;
  }

  if (typeof inner === 'function') {
    return inner(focused);
  }

  return null;
} // input 有个诡异的宽度，需要一个容器限制一下（然后在 input 上设一个 width: 100%）


var ScInputWrap = _styledComponents.default.span(_templateObject());

var ScInnerInput = _styledComponents.default.input(_templateObject2(), _consoleBaseStyledMixin.FORM_CONTROL.PADDING.M - 4, _consoleBaseStyledMixin.COLOR.TEXT_PRIMARY, _consoleBaseStyledMixin.COLOR.TEXT_DISABLED);

var ScInnerLeft = _styledComponents.default.span(_templateObject3(), _consoleBaseStyledMixin.FORM_CONTROL.PADDING.M - 2, _consoleBaseStyledMixin.COLOR.TEXT_CAPTION);

var ScInnerRight = _styledComponents.default.span(_templateObject4(), _consoleBaseStyledMixin.FORM_CONTROL.PADDING.M - 2, _consoleBaseStyledMixin.COLOR.TEXT_CAPTION);

var ScInput = _styledComponents.default.div(_templateObject5(), function (props) {
  return props.block ? 'flex' : 'inline-flex';
}, _consoleBaseStyledMixin.COLOR.LINE, _consoleBaseStyledMixin.FORM_CONTROL.HEIGHT.M - 2, _consoleBaseStyledMixin.FORM_CONTROL.HEIGHT.M - 2, _consoleBaseStyledMixin.FORM_CONTROL.FONT_SIZE.M, function (props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject6(), _consoleBaseStyledMixin.COLOR.FILL_LIGHTER);
  }
}, function (props) {
  if (props.borderless) {
    return (0, _styledComponents.css)(_templateObject7());
  }

  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject8(), _consoleBaseStyledMixin.COLOR.LINE_LIGHT);
  }

  return (0, _styledComponents.css)(_templateObject9(), _consoleBaseStyledMixin.COLOR.LINE_DARK);
}, function (props) {
  return props.round ? (0, _styledComponents.css)(_templateObject10(), _consoleBaseStyledMixin.FORM_CONTROL.HEIGHT.M / 2) : null;
}, ScInnerInput, ScInnerLeft, ScInnerRight, _consoleBaseStyledMixin.FORM_CONTROL.HEIGHT.M - 2, _consoleBaseStyledMixin.FORM_CONTROL.HEIGHT.M - 2);

function Input(_ref) {
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
      props = (0, _objectWithoutProperties2.default)(_ref, ["block", "round", "borderless", "disabled", "innerLeft", "innerRight", "className", "onFocus", "onBlur", "onChange", "style"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      focused = _useState2[0],
      setStateFocused = _useState2[1];

  var handleFocus = (0, _react.useCallback)(function (e) {
    setStateFocused(true);

    if (onFocus) {
      onFocus(e);
    }
  }, [onFocus, setStateFocused]);
  var handleBlur = (0, _react.useCallback)(function (e) {
    setStateFocused(false);

    if (onBlur) {
      onBlur(e);
    }
  }, [onBlur, setStateFocused]);
  var handleChange = (0, _react.useCallback)(function (e) {
    if (onChange) {
      onChange(e.target.value, e);
    }
  }, [onChange]);
  var jsxInnerL = renderInner(innerLeft, focused);
  var jsxInnerR = renderInner(innerRight, focused);
  return /*#__PURE__*/_react.default.createElement(ScInput, {
    className: className,
    block: block,
    round: round,
    borderless: borderless,
    disabled: disabled,
    style: style
  }, jsxInnerL ? /*#__PURE__*/_react.default.createElement(ScInnerLeft, null, jsxInnerL) : null, /*#__PURE__*/_react.default.createElement(ScInputWrap, null, /*#__PURE__*/_react.default.createElement(ScInnerInput, _objectSpread(_objectSpread({
    type: 'text',
    'aria-autocomplete': 'none',
    autocomplete: 'off',
    disabled: disabled
  }, props), {}, {
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange
  }))), jsxInnerR ? /*#__PURE__*/_react.default.createElement(ScInnerRight, null, jsxInnerR) : null);
}