import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 24px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { useCallback } from 'react';
import styled from 'styled-components';
import Input from '@alicloud/console-base-rc-input';
import { useDialog } from '../../model';
var ScPromptContent = styled.div(_templateObject());

/**
 * prompt dialog 的内容
 */
export default function PromptContent() {
  var _useDialog = useDialog(),
      updateData = _useDialog.updateData;

  var handleChange = useCallback(function (value) {
    return updateData({
      value: value
    });
  }, [updateData]);
  return /*#__PURE__*/React.createElement(ScPromptContent, null, /*#__PURE__*/React.createElement(Input, {
    block: true,
    onChange: handleChange
  }));
}