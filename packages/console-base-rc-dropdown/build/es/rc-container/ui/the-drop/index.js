import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  border-top: 1px solid ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n          padding: 8px 0;\n        "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n          padding-bottom: 8px;\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n          padding-top: 8px;\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        visibility: visible;\n        opacity: 1;\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n  visibility: hidden;\n  opacity: 0;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  background-color: #fff;\n  min-width: 120px;\n  font-size: 12px;\n  color: ", ";\n  transition: all 360ms ease;\n  \n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components';
import { COLOR } from '@alicloud/console-base-styled-mixin';
import { useProps, useRefDropdown, useVisible } from '../../../model';
var ScTheDrop = styled.div(_templateObject(), COLOR.TEXT_PRIMARY, function (props) {
  if (props.visible) {
    return css(_templateObject2());
  }
});
var ScTheDropBody = styled.div(_templateObject3(), function (props) {
  switch (props.bodyPadding) {
    case 'none':
      return null;

    case 'top':
      return css(_templateObject4());

    case 'bottom':
      return css(_templateObject5());

    default:
      return css(_templateObject6());
  }
});
var ScTheDropFooter = styled.footer(_templateObject7(), COLOR.LINE_LIGHT);
export default function TheDrop() {
  var _useProps = useProps(),
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

  var refDropdown = useRefDropdown();
  var visible = useVisible();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      stateTop = _useState2[0],
      setStateTop = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      stateLeft = _useState4[0],
      setStateLeft = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      stateRight = _useState6[0],
      setStateRight = _useState6[1];

  var dropdownEl = dropContainer === 'body' ? refDropdown.current : undefined; // 当 dropContainer 为 body 的时候，它才有用

  var _ref = offset || [],
      _ref2 = _slicedToArray(_ref, 2),
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

  useEffect(function () {
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
            _getTopLeft2 = _slicedToArray(_getTopLeft, 2),
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
          _getTopLeft4 = _slicedToArray(_getTopLeft3, 2),
          _t = _getTopLeft4[0],
          _l = _getTopLeft4[1];

      setStateTop(_t);
      setStateLeft(_l);
    }
  }, [dropdownEl, visible, align]);
  var jsx = /*#__PURE__*/React.createElement(ScTheDrop, {
    visible: visible,
    style: style
  }, header ? /*#__PURE__*/React.createElement("header", null, header) : null, /*#__PURE__*/React.createElement(ScTheDropBody, {
    bodyPadding: bodyPadding
  }, body), footer ? /*#__PURE__*/React.createElement(ScTheDropFooter, null, footer) : null);
  return dropdownEl ? /*#__PURE__*/createPortal(jsx, document.body) : jsx;
}