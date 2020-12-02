import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: inherit;\n  text-align: left;\n  color: inherit;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 1.75em;\n  font-size: 1.1em;\n  text-align: center;\n"]);

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
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: ", ";\n  padding: 20px 8px;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled, { css } from 'styled-components';
import { COLOR } from '@alicloud/console-base-styled-mixin';
import Icon from '@alicloud/console-base-rc-icon';
import intl from '../../intl';

function getJustifyContent(align) {
  switch (align) {
    case 'c':
      return 'center';

    case 'r':
      return 'flex-end';

    default:
      return 'flex-start';
  }
}

var cssLoading = css(_templateObject(), COLOR.TEXT_DISABLED);
var ScLoading = styled.div(_templateObject2(), function (props) {
  return getJustifyContent(props.align);
}, cssLoading);
var ScLoadingInline = styled.span(_templateObject3(), cssLoading);
var ScIconWrap = styled.span(_templateObject4());
var ScButtonRetry = styled.button(_templateObject5());
export default function Loading(_ref) {
  var message = _ref.message,
      status = _ref.status,
      align = _ref.align,
      inline = _ref.inline,
      retry = _ref.retry,
      props = _objectWithoutProperties(_ref, ["message", "status", "align", "inline", "retry"]);

  var jsxIcon;
  var jsxMessage;

  switch (status) {
    case 'empty':
      jsxIcon = /*#__PURE__*/React.createElement(Icon, {
        type: "empty"
      });
      jsxMessage = message !== null && message !== void 0 ? message : intl('phrase:empty');
      break;

    case 'error':
      jsxIcon = /*#__PURE__*/React.createElement(Icon, {
        type: "alert"
      });
      jsxMessage = message !== null && message !== void 0 ? message : intl(retry ? 'phrase:failed_retry' : 'phrase:failed');

      if (retry) {
        jsxMessage = /*#__PURE__*/React.createElement(ScButtonRetry, {
          onClick: retry
        }, jsxMessage);
      }

      break;

    default:
      jsxIcon = /*#__PURE__*/React.createElement(Icon, {
        type: "loading"
      });
      jsxMessage = message !== null && message !== void 0 ? message : intl('phrase:loading');
      break;
  }

  return inline ? /*#__PURE__*/React.createElement(ScLoadingInline, props, /*#__PURE__*/React.createElement(ScIconWrap, null, jsxIcon), jsxMessage) : /*#__PURE__*/React.createElement(ScLoading, _extends({
    align: align
  }, props), /*#__PURE__*/React.createElement(ScIconWrap, null, jsxIcon), jsxMessage);
}