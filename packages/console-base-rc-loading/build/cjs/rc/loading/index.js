"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Loading;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _consoleBaseRcIcon = _interopRequireDefault(require("@alicloud/console-base-rc-icon"));

var _intl = _interopRequireDefault(require("../../intl"));

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: inherit;\n  text-align: left;\n  color: inherit;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  width: 1.75em;\n  font-size: 1.1em;\n  text-align: center;\n"]);

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
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  justify-content: ", ";\n  padding: 20px 8px;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 12px;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

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

var cssLoading = (0, _styledComponents.css)(_templateObject(), _consoleBaseStyledMixin.COLOR.TEXT_DISABLED);

var ScLoading = _styledComponents.default.div(_templateObject2(), function (props) {
  return getJustifyContent(props.align);
}, cssLoading);

var ScLoadingInline = _styledComponents.default.span(_templateObject3(), cssLoading);

var ScIconWrap = _styledComponents.default.span(_templateObject4());

var ScButtonRetry = _styledComponents.default.button(_templateObject5());

function Loading(_ref) {
  var message = _ref.message,
      status = _ref.status,
      align = _ref.align,
      inline = _ref.inline,
      retry = _ref.retry,
      props = (0, _objectWithoutProperties2.default)(_ref, ["message", "status", "align", "inline", "retry"]);
  var jsxIcon;
  var jsxMessage;

  switch (status) {
    case 'empty':
      jsxIcon = /*#__PURE__*/_react.default.createElement(_consoleBaseRcIcon.default, {
        type: "empty"
      });
      jsxMessage = message !== null && message !== void 0 ? message : (0, _intl.default)('phrase:empty');
      break;

    case 'error':
      jsxIcon = /*#__PURE__*/_react.default.createElement(_consoleBaseRcIcon.default, {
        type: "alert"
      });
      jsxMessage = message !== null && message !== void 0 ? message : (0, _intl.default)(retry ? 'phrase:failed_retry' : 'phrase:failed');

      if (retry) {
        jsxMessage = /*#__PURE__*/_react.default.createElement(ScButtonRetry, {
          onClick: retry
        }, jsxMessage);
      }

      break;

    default:
      jsxIcon = /*#__PURE__*/_react.default.createElement(_consoleBaseRcIcon.default, {
        type: "loading"
      });
      jsxMessage = message !== null && message !== void 0 ? message : (0, _intl.default)('phrase:loading');
      break;
  }

  return inline ? /*#__PURE__*/_react.default.createElement(ScLoadingInline, props, /*#__PURE__*/_react.default.createElement(ScIconWrap, null, jsxIcon), jsxMessage) : /*#__PURE__*/_react.default.createElement(ScLoading, (0, _extends2.default)({
    align: align
  }, props), /*#__PURE__*/_react.default.createElement(ScIconWrap, null, jsxIcon), jsxMessage);
}