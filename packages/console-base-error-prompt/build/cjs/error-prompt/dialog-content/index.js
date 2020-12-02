"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DialogContent;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _isString2 = _interopRequireDefault(require("lodash/isString"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _consoleBaseRcPagination = _interopRequireDefault(require("@alicloud/console-base-rc-pagination"));

var _consoleBaseRcDialog = require("@alicloud/console-base-rc-dialog");

var _errorDetails = _interopRequireDefault(require("./error-details"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin-top: 1.2em;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin-bottom: 32px;\n  font-size: 14px;\n  \n  em {\n    font-style: normal;\n    color: ", ";\n  }\n  \n  code {\n    padding: 0 4px;\n    border-radius: 2px;\n    background-color: rgba(0, 0, 0, 0.04);\n    color: #f25c7f;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ScMessage = _styledComponents.default.div(_templateObject(), _consoleBaseStyledMixin.COLOR.TEXT_EMPHASIS);

var ScPagination = (0, _styledComponents.default)(_consoleBaseRcPagination.default)(_templateObject2());

function getJsxMessage(_ref) {
  var message = _ref.message,
      code = _ref.code;

  if (!message) {
    return code || 'n / a';
  }

  if ((0, _isString2.default)(message)) {
    return /*#__PURE__*/_react.default.createElement("span", {
      dangerouslySetInnerHTML: {
        // eslint-disable-line react/no-danger
        __html: message
      }
    });
  }

  return message;
}

function DialogContent(_ref2) {
  var queue = _ref2.queue;

  var _useDialog = (0, _consoleBaseRcDialog.useDialog)(),
      data = _useDialog.data,
      updateData = _useDialog.updateData;

  var queueItem = queue[data.page - 1];
  var error = queueItem.error;
  var handlePage = (0, _react.useCallback)(function (page) {
    return updateData({
      page: page
    });
  }, [updateData]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(ScMessage, null, getJsxMessage(error)), /*#__PURE__*/_react.default.createElement(_errorDetails.default, {
    details: error
  }), /*#__PURE__*/_react.default.createElement(ScPagination, {
    total: queue.length,
    page: data.page,
    pageSize: 1,
    theme: 'simplest',
    onChange: handlePage
  }));
}