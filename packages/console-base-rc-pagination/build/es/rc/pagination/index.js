import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 12px;\n  color: ", ";\n  \n  strong {\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: ", ";\n  font-size: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { useCallback } from 'react';
import styled from 'styled-components';
import { COLOR } from '@alicloud/console-base-styled-mixin';
import Button, { EButtonSize, EButtonThemeColor, EButtonThemeColorBd } from '@alicloud/console-base-rc-button';
import Icon from '@alicloud/console-base-rc-icon';
import intl from '../../intl';

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

var ScPagination = styled.div(_templateObject(), function (props) {
  return getJustifyContent(props.align);
});
var ScPaginationDisplay = styled.div(_templateObject2(), COLOR.TEXT_CAPTION, COLOR.LINK);
var BUTTON_THEME_PACK_SIMPLEST = {
  size: EButtonSize.NONE,
  themeColor: EButtonThemeColor.GRAY,
  themeColorHover: EButtonThemeColor.BLACK
};
var BUTTON_THEME_PACK_SIMPLE = {
  size: EButtonSize.S,
  themeColor: EButtonThemeColor.GRAY,
  themeColorHover: EButtonThemeColor.BLACK,
  themeColorBd: EButtonThemeColorBd.GRAY_ALPHA,
  themeColorBdHover: EButtonThemeColorBd.GRAY_ALPHA_SHADE
};
/**
 * 分页
 */

export default function Pagination(_ref) {
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
      props = _objectWithoutProperties(_ref, ["page", "pageSize", "total", "theme", "hideWhenOne", "onChange"]);

  var pages = Math.ceil(total / pageSize);
  var handlePrev = useCallback(function () {
    if (onChange) {
      onChange(page - 1);
    }
  }, [page, onChange]);
  var handleNext = useCallback(function () {
    if (onChange) {
      onChange(page + 1);
    }
  }, [page, onChange]);

  if (hideWhenOne && pages <= 1) {
    return null;
  }

  var themeIsSimplest = theme === 'simplest';
  var buttonTheme = themeIsSimplest ? BUTTON_THEME_PACK_SIMPLEST : BUTTON_THEME_PACK_SIMPLE;
  var buttonLabelPrev = themeIsSimplest ? /*#__PURE__*/React.createElement(Icon, {
    type: "angle-left"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    type: "angle-left"
  }), intl('page:prev'));
  var buttonLabelNext = themeIsSimplest ? /*#__PURE__*/React.createElement(Icon, {
    type: "angle-right"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, intl('page:next'), /*#__PURE__*/React.createElement(Icon, {
    type: "angle-right"
  }));
  return /*#__PURE__*/React.createElement(ScPagination, props, /*#__PURE__*/React.createElement(Button, _objectSpread(_objectSpread({
    spm: 'prev'
  }, buttonTheme), {}, {
    disabled: page <= 1,
    label: buttonLabelPrev,
    onClick: handlePrev
  })), /*#__PURE__*/React.createElement(ScPaginationDisplay, null, /*#__PURE__*/React.createElement("strong", null, page), " / ", pages), /*#__PURE__*/React.createElement(Button, _objectSpread(_objectSpread({
    spm: 'next'
  }, buttonTheme), {}, {
    disabled: page >= pages,
    label: buttonLabelNext,
    onClick: handleNext
  })));
}