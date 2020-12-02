"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pagination;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _consoleBaseRcButton = _interopRequireWildcard(require("@alicloud/console-base-rc-button"));

var _consoleBaseRcIcon = _interopRequireDefault(require("@alicloud/console-base-rc-icon"));

var _intl = _interopRequireDefault(require("../../intl"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin: 0 12px;\n  color: ", ";\n  \n  strong {\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  justify-content: ", ";\n  font-size: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function getJustifyContent(align) {
  switch (align) {
    case 'center':
      return 'center';

    case 'right':
      return 'flex-end';

    default:
      return 'flex-start';
  }
}

var ScPagination = _styledComponents.default.div(_templateObject(), function (props) {
  return getJustifyContent(props.align);
});

var ScPaginationDisplay = _styledComponents.default.div(_templateObject2(), _consoleBaseStyledMixin.COLOR.TEXT_CAPTION, _consoleBaseStyledMixin.COLOR.LINK);

var BUTTON_THEME_PACK_SIMPLEST = {
  size: _consoleBaseRcButton.EButtonSize.NONE,
  themeColor: _consoleBaseRcButton.EButtonThemeColor.GRAY,
  themeColorHover: _consoleBaseRcButton.EButtonThemeColor.BLACK
};
var BUTTON_THEME_PACK_SIMPLE = {
  size: _consoleBaseRcButton.EButtonSize.S,
  themeColor: _consoleBaseRcButton.EButtonThemeColor.GRAY,
  themeColorHover: _consoleBaseRcButton.EButtonThemeColor.BLACK,
  themeColorBd: _consoleBaseRcButton.EButtonThemeColorBd.GRAY_ALPHA,
  themeColorBdHover: _consoleBaseRcButton.EButtonThemeColorBd.GRAY_ALPHA_SHADE
};
/**
 * 分页
 */

function Pagination(_ref) {
  var _ref$page = _ref.page,
      page = _ref$page === void 0 ? 1 : _ref$page,
      _ref$pageSize = _ref.pageSize,
      pageSize = _ref$pageSize === void 0 ? 10 : _ref$pageSize,
      _ref$total = _ref.total,
      total = _ref$total === void 0 ? 0 : _ref$total,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'simple' : _ref$theme,
      _ref$hideWhenOne = _ref.hideWhenOne,
      hideWhenOne = _ref$hideWhenOne === void 0 ? true : _ref$hideWhenOne,
      onChange = _ref.onChange,
      props = (0, _objectWithoutProperties2.default)(_ref, ["page", "pageSize", "total", "theme", "hideWhenOne", "onChange"]);
  var pages = Math.ceil(total / pageSize);
  var handlePrev = (0, _react.useCallback)(function () {
    if (onChange) {
      onChange(page - 1);
    }
  }, [page, onChange]);
  var handleNext = (0, _react.useCallback)(function () {
    if (onChange) {
      onChange(page + 1);
    }
  }, [page, onChange]);

  if (hideWhenOne && pages <= 1) {
    return null;
  }

  var themeIsSimplest = theme === 'simplest';
  var buttonTheme = themeIsSimplest ? BUTTON_THEME_PACK_SIMPLEST : BUTTON_THEME_PACK_SIMPLE;
  var buttonLabelPrev = themeIsSimplest ? /*#__PURE__*/_react.default.createElement(_consoleBaseRcIcon.default, {
    type: "angle-left"
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_consoleBaseRcIcon.default, {
    type: "angle-left"
  }), (0, _intl.default)('page:prev'));
  var buttonLabelNext = themeIsSimplest ? /*#__PURE__*/_react.default.createElement(_consoleBaseRcIcon.default, {
    type: "angle-right"
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (0, _intl.default)('page:next'), /*#__PURE__*/_react.default.createElement(_consoleBaseRcIcon.default, {
    type: "angle-right"
  }));
  return /*#__PURE__*/_react.default.createElement(ScPagination, props, /*#__PURE__*/_react.default.createElement(_consoleBaseRcButton.default, _objectSpread(_objectSpread({
    spm: 'prev'
  }, buttonTheme), {}, {
    disabled: page <= 1,
    label: buttonLabelPrev,
    onClick: handlePrev
  })), /*#__PURE__*/_react.default.createElement(ScPaginationDisplay, null, /*#__PURE__*/_react.default.createElement("strong", null, page), " / ", pages), /*#__PURE__*/_react.default.createElement(_consoleBaseRcButton.default, _objectSpread(_objectSpread({
    spm: 'next'
  }, buttonTheme), {}, {
    disabled: page >= pages,
    label: buttonLabelNext,
    onClick: handleNext
  })));
}