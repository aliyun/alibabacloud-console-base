import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 1.2em;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 32px;\n  font-size: 14px;\n  \n  em {\n    font-style: normal;\n    color: ", ";\n  }\n  \n  code {\n    padding: 0 4px;\n    border-radius: 2px;\n    background-color: rgba(0, 0, 0, 0.04);\n    color: #f25c7f;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import _isString from 'lodash/isString';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { COLOR } from '@alicloud/console-base-styled-mixin';
import Pagination from '@alicloud/console-base-rc-pagination';
import { useDialog } from '@alicloud/console-base-rc-dialog';
import ErrorDetails from './error-details';
var ScMessage = styled.div(_templateObject(), COLOR.TEXT_EMPHASIS);
var ScPagination = styled(Pagination)(_templateObject2());

function getJsxMessage(_ref) {
  var message = _ref.message,
      code = _ref.code;

  if (!message) {
    return code || 'n / a';
  }

  if (_isString(message)) {
    return /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        // eslint-disable-line react/no-danger
        __html: message
      }
    });
  }

  return message;
}

export default function DialogContent(_ref2) {
  var queue = _ref2.queue;

  var _useDialog = useDialog(),
      data = _useDialog.data,
      updateData = _useDialog.updateData;

  var queueItem = queue[data.page - 1];
  var error = queueItem.error;
  var handlePage = useCallback(function (page) {
    return updateData({
      page: page
    });
  }, [updateData]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScMessage, null, getJsxMessage(error)), /*#__PURE__*/React.createElement(ErrorDetails, {
    details: error
  }), /*#__PURE__*/React.createElement(ScPagination, {
    total: queue.length,
    page: data.page,
    pageSize: 1,
    theme: 'simplest',
    onChange: handlePage
  }));
}