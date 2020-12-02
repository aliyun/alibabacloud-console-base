"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TheDrop;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _model = require("../../../model");

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  border-top: 1px solid ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n          padding: 8px 0;\n        "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n          padding-bottom: 8px;\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n          padding-top: 8px;\n        "]);

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
  var data = (0, _taggedTemplateLiteral2.default)(["\n        visibility: visible;\n        opacity: 1;\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: block;\n  position: absolute;\n  visibility: hidden;\n  opacity: 0;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  background-color: #fff;\n  min-width: 120px;\n  font-size: 12px;\n  color: ", ";\n  transition: all 360ms ease;\n  \n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ScTheDrop = _styledComponents.default.div(_templateObject(), _consoleBaseStyledMixin.COLOR.TEXT_PRIMARY, function (props) {
  if (props.visible) {
    return (0, _styledComponents.css)(_templateObject2());
  }
});

var ScTheDropBody = _styledComponents.default.div(_templateObject3(), function (props) {
  switch (props.bodyPadding) {
    case 'none':
      return null;

    case 'top':
      return (0, _styledComponents.css)(_templateObject4());

    case 'bottom':
      return (0, _styledComponents.css)(_templateObject5());

    default:
      return (0, _styledComponents.css)(_templateObject6());
  }
});

var ScTheDropFooter = _styledComponents.default.footer(_templateObject7(), _consoleBaseStyledMixin.COLOR.LINE_LIGHT);

function TheDrop() {
  var _useProps = (0, _model.useProps)(),
      header = _useProps.header,
      body = _useProps.body,
      footer = _useProps.footer,
      width = _useProps.width,
      minWidth = _useProps.minWidth,
      maxWidth = _useProps.maxWidth,
      _useProps$zIndex = _useProps.zIndex,
      zIndex = _useProps$zIndex === void 0 ? 10 : _useProps$zIndex,
      offset = _useProps.offset,
      align = _useProps.align,
      bodyPadding = _useProps.bodyPadding,
      _useProps$dropContain = _useProps.dropContainer,
      dropContainer = _useProps$dropContain === void 0 ? 'inside' : _useProps$dropContain;

  var refDropdown = (0, _model.useRefDropdown)();
  var visible = (0, _model.useVisible)();

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      stateTop = _useState2[0],
      setStateTop = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      stateLeft = _useState4[0],
      setStateLeft = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      stateRight = _useState6[0],
      setStateRight = _useState6[1];

  var dropdownEl = dropContainer === 'body' ? refDropdown.current : undefined; // 当 dropContainer 为 body 的时候，它才有用

  var _ref = offset || [],
      _ref2 = (0, _slicedToArray2.default)(_ref, 2),
      _ref2$ = _ref2[0],
      offsetX = _ref2$ === void 0 ? 0 : _ref2$,
      _ref2$2 = _ref2[1],
      offsetY = _ref2$2 === void 0 ? 0 : _ref2$2;

  var style = {
    zIndex: zIndex,
    top: stateTop,
    left: stateLeft,
    right: stateRight
  };

  if (width) {
    style.width = width;
  }

  if (minWidth) {
    style.minWidth = minWidth;
  }

  if (maxWidth) {
    style.maxWidth = maxWidth;
  }

  if (offsetX || offsetY) {
    style.transform = "translate(".concat(offsetX, "px, ").concat(offsetY, "px)");
  }

  (0, _react.useEffect)(function () {
    function getTopLeft(div) {
      var rect = div.getBoundingClientRect();
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || 0;
      return [Math.ceil((rect.y || rect.top) + rect.height) + scrollTop + 1, Math.ceil(rect.left) + scrollLeft + 1];
    }

    if (!visible) {
      // 不可见时
      if (dropdownEl) {
        var _getTopLeft = getTopLeft(dropdownEl),
            _getTopLeft2 = (0, _slicedToArray2.default)(_getTopLeft, 2),
            t = _getTopLeft2[0],
            l = _getTopLeft2[1];

        setStateTop(t + 10); // +10 是为了动画

        setStateLeft(l);
      } else {
        setStateTop('150%'); // 为了动画
      }

      return;
    }

    if (!dropdownEl) {
      setStateTop('100%');

      if (align === 'right') {
        setStateLeft(undefined);
        setStateRight(0);
      } else {
        setStateLeft(0);
        setStateRight(undefined);
      }

      return;
    } // TODO align right 还有问题


    if (dropdownEl) {
      var _getTopLeft3 = getTopLeft(dropdownEl),
          _getTopLeft4 = (0, _slicedToArray2.default)(_getTopLeft3, 2),
          _t = _getTopLeft4[0],
          _l = _getTopLeft4[1];

      setStateTop(_t);
      setStateLeft(_l);
    }
  }, [dropdownEl, visible, align]);

  var jsx = /*#__PURE__*/_react.default.createElement(ScTheDrop, {
    visible: visible,
    style: style
  }, header ? /*#__PURE__*/_react.default.createElement("header", null, header) : null, /*#__PURE__*/_react.default.createElement(ScTheDropBody, {
    bodyPadding: bodyPadding
  }, body), footer ? /*#__PURE__*/_react.default.createElement(ScTheDropFooter, null, footer) : null);

  return dropdownEl ? /*#__PURE__*/(0, _reactDom.createPortal)(jsx, document.body) : jsx;
}