"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _consoleBaseRcIcon = _interopRequireDefault(require("@alicloud/console-base-rc-icon"));

var _const = require("../../const");

var _getSizes = _interopRequireDefault(require("../../util/get-sizes"));

var _getFontSize = _interopRequireDefault(require("../../util/get-font-size"));

var _getColor = _interopRequireDefault(require("../../util/get-color"));

var _getColorBg = _interopRequireDefault(require("../../util/get-color-bg"));

var _getColorBd = _interopRequireDefault(require("../../util/get-color-bd"));

var _getPreset = _interopRequireDefault(require("../../util/get-preset"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject24() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  flex: 1;\n  ", ";\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin: 0 8px 0 4px;\n  \n  &:first-child {\n    margin-left: 0;\n  }\n  \n  &:last-child {\n    margin-right: 0;\n  }\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n      &:hover,\n      &:link:hover,\n      &:visited:hover {\n        color: ", ";\n      }\n    "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n      &,\n      &:link,\n      &:visited,\n      &:hover {\n        color: ", ";\n      }\n    "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n      &:hover {\n        background-color: ", ";\n      }\n    "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n      background-color: ", ";\n    "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n      &:hover {\n        border-color: ", ";\n      }\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n      border-color: ", ";\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n        font-size: ", "px;\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n        padding: 0 ", "px;\n        height: ", "px;\n        line-height: ", "px;\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    white-space: nowrap;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: block;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  border: ", ";\n  overflow: hidden;\n  vertical-align: middle;\n  text-align: ", ";\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// 按钮通用样式，没有 Size 的时候不设边框
var cssCommon = (0, _styledComponents.css)(_templateObject(), function (props) {
  return props.size === _const.EButtonSize.NONE ? 'none' : '1px solid transparent';
}, function (props) {
  return props.textAlign || 'center';
}, _consoleBaseStyledMixin.COLOR.TEXT_SECONDARY);
var cssBlock = (0, _styledComponents.css)(_templateObject2());
var cssEllipsis = (0, _styledComponents.css)(_templateObject3(), function (props) {
  return props.ellipsis ? _consoleBaseStyledMixin.typo.ellipsis : (0, _styledComponents.css)(_templateObject4());
}); // 按钮大小 - 仅高度和 padding，不考虑文字

var cssSize = (0, _styledComponents.css)(_templateObject5(), function (props) {
  var value = (0, _getSizes.default)(props.size);

  if (value) {
    var _value = (0, _slicedToArray2.default)(value, 3),
        pd = _value[0],
        h = _value[1],
        lh = _value[2];

    return (0, _styledComponents.css)(_templateObject6(), pd, h, lh);
  }
});
var cssFontSize = (0, _styledComponents.css)(_templateObject7(), function (props) {
  var value = (0, _getFontSize.default)(props.fontSize);

  if (value > 0) {
    return (0, _styledComponents.css)(_templateObject8(), value);
  }
});
var cssColorBd = (0, _styledComponents.css)(_templateObject9(), function (props) {
  var value = (0, _getColorBd.default)(props.themeColorBd);
  return value ? (0, _styledComponents.css)(_templateObject10(), value) : null;
});
var cssColorBdHover = (0, _styledComponents.css)(_templateObject11(), function (_ref) {
  var disabled = _ref.disabled,
      themeColorBdHover = _ref.themeColorBdHover;

  if (disabled) {
    return;
  }

  var value = (0, _getColorBd.default)(themeColorBdHover);
  return value ? (0, _styledComponents.css)(_templateObject12(), value) : null;
});
var cssColorBg = (0, _styledComponents.css)(_templateObject13(), function (props) {
  var value = (0, _getColorBg.default)(props.themeColorBg);
  return value ? (0, _styledComponents.css)(_templateObject14(), value) : null;
});
var cssColorBgHover = (0, _styledComponents.css)(_templateObject15(), function (_ref2) {
  var disabled = _ref2.disabled,
      themeColorBgHover = _ref2.themeColorBgHover;

  if (disabled) {
    return;
  }

  var value = (0, _getColorBg.default)(themeColorBgHover);
  return value ? (0, _styledComponents.css)(_templateObject16(), value) : null;
});
var cssColor = (0, _styledComponents.css)(_templateObject17(), function (_ref3) {
  var disabled = _ref3.disabled,
      themeColor = _ref3.themeColor;

  if (disabled) {
    return;
  }

  var value = (0, _getColor.default)(themeColor);
  return value ? (0, _styledComponents.css)(_templateObject18(), value) : null;
});
var cssColorHover = (0, _styledComponents.css)(_templateObject19(), function (props) {
  if (props.disabled) {
    return;
  }

  var value = (0, _getColor.default)(props.themeColorHover);
  return value ? (0, _styledComponents.css)(_templateObject20(), value) : null;
});

var ScButton = _styledComponents.default.span(_templateObject21(), _consoleBaseStyledMixin.button.reset, cssCommon, function (props) {
  return props.block ? cssBlock : null;
}, cssEllipsis, cssSize, cssFontSize, cssColorBd, cssColorBdHover, cssColorBg, cssColorBgHover, cssColor, cssColorHover); // 当有 iconLeft iconRight loading 时对内容的包裹


var ScInner = _styledComponents.default.span(_templateObject22());

var ScInnerIcon = _styledComponents.default.span(_templateObject23());

var ScInnerLabel = _styledComponents.default.span(_templateObject24(), _consoleBaseStyledMixin.typo.ellipsis);

function getTarget(href, target) {
  if (target) {
    return target;
  }

  if (/^(?:https?:)?\/\//.test(href)) {
    // 且认为只要是绝对地址就应该是 _blank 一般不会有人傻到写自己站点的绝对地址
    return '_blank';
  }
}

function renderIcon(icon) {
  if (!icon) {
    return null;
  }

  if ( /*#__PURE__*/_react.default.isValidElement(icon)) {
    return icon;
  }

  return /*#__PURE__*/_react.default.createElement(_consoleBaseRcIcon.default, {
    type: icon
  });
}

function Button(_ref4, ref) {
  var _ref4$component = _ref4.component,
      component = _ref4$component === void 0 ? 'button' : _ref4$component,
      label = _ref4.label,
      title = _ref4.title,
      iconLeft = _ref4.iconLeft,
      iconRight = _ref4.iconRight,
      children = _ref4.children,
      href = _ref4.href,
      target = _ref4.target,
      spm = _ref4.spm,
      _ref4$size = _ref4.size,
      size = _ref4$size === void 0 ? _const.EButtonSize.M : _ref4$size,
      loading = _ref4.loading,
      disabled = _ref4.disabled,
      preset = _ref4.preset,
      restProps = (0, _objectWithoutProperties2.default)(_ref4, ["component", "label", "title", "iconLeft", "iconRight", "children", "href", "target", "spm", "size", "loading", "disabled", "preset"]);

  var propsForSc = _objectSpread(_objectSpread({
    size: size,
    disabled: disabled
  }, (0, _getPreset.default)(preset, disabled)), restProps);

  var jsxIconLeft = loading ? /*#__PURE__*/_react.default.createElement(_consoleBaseRcIcon.default, {
    type: "loading"
  }) : renderIcon(iconLeft);
  var jsxIconRight = renderIcon(iconRight);
  var as = component;
  var jsxInner = label || children; // label prior to children
  // loading 的时候没有 hover 样式，cursor 在非 disabled 状态下为箭头

  if (loading) {
    delete propsForSc.themeColorBdHover;
    delete propsForSc.themeColorBgHover;
    delete propsForSc.themeColorHover;

    if (!disabled) {
      propsForSc.style = _objectSpread(_objectSpread({}, propsForSc.style), {}, {
        cursor: 'default'
      });
    }
  } // loading 或 disabled 状态下对点击失效


  if (disabled || loading) {
    delete propsForSc.onClick;
  }

  if (title) {
    if (typeof title === 'string') {
      propsForSc.title = title;
    } else if (label && typeof label === 'string') {
      // title === true
      propsForSc.title = label;
    }
  }

  if (jsxIconLeft || jsxIconRight) {
    jsxInner = /*#__PURE__*/_react.default.createElement(ScInner, null, jsxIconLeft ? /*#__PURE__*/_react.default.createElement(ScInnerIcon, null, jsxIconLeft) : null, jsxInner ? /*#__PURE__*/_react.default.createElement(ScInnerLabel, null, jsxInner) : null, jsxIconRight ? /*#__PURE__*/_react.default.createElement(ScInnerIcon, null, jsxIconRight) : null);
  }

  if (href && !disabled) {
    as = 'a'; // 保证有 href 且非 disabled 状态下一定是 a

    propsForSc.href = href;
    propsForSc.target = getTarget(href, target);
  }

  return /*#__PURE__*/_react.default.createElement(ScButton, _objectSpread(_objectSpread({
    ref: ref,
    as: as
  }, propsForSc), {}, {
    'data-spm-click': "gostr=/aliyun;locaid=d".concat(spm)
  }), jsxInner);
}

var _default = /*#__PURE__*/(0, _react.forwardRef)(Button);

exports.default = _default;