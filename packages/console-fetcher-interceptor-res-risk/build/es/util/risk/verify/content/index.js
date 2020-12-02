import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 8px;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 12px;\n  width: 100px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 12px;\n  font-family: Arial, sans-serif;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { useCallback } from 'react';
import styled from 'styled-components';
import { COLOR } from '@alicloud/console-base-styled-mixin';
import { useDialog } from '@alicloud/console-base-rc-dialog';
import Button, { EButtonPreset } from '@alicloud/console-base-rc-button';
import Input from '@alicloud/console-base-rc-input';
import Flex from '@alicloud/console-base-rc-flex';
import { EVerifyType } from '../../../../const';
import intl from '../../../../intl';
import Form from '../../../../rc/form';
import { intlVerifyLabel, intlVerifySetting } from '../../../intl-verify';
import Generate from './generate';
var ScInfo = styled.strong(_templateObject());
var ScInput = styled(Input)(_templateObject2());
var ScError = styled.div(_templateObject3(), COLOR.ERROR);
export default function Content() {
  var _useDialog = useDialog(),
      _useDialog$data = _useDialog.data,
      _useDialog$data$riskI = _useDialog$data.riskInfo,
      type = _useDialog$data$riskI.type,
      detail = _useDialog$data$riskI.detail,
      URL_SETTINGS = _useDialog$data.riskConfig.URL_SETTINGS,
      errorMessage = _useDialog$data.errorMessage,
      updateData = _useDialog.updateData;

  var handleInputChange = useCallback(function (value) {
    updateData({
      code: value.trim(),
      errorMessage: '' // 清空错误

    });
  }, [updateData]);
  return /*#__PURE__*/React.createElement(Form, {
    items: [{
      label: intlVerifyLabel(type),
      content: /*#__PURE__*/React.createElement(Flex, {
        align: "center"
      }, detail ? /*#__PURE__*/React.createElement(ScInfo, null, detail) : null, /*#__PURE__*/React.createElement(Button, {
        spm: "set-".concat(type),
        preset: EButtonPreset.LINK,
        label: intlVerifySetting(type),
        href: URL_SETTINGS
      }))
    }, {
      label: intl('attr:code'),
      content: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Flex, {
        align: "center"
      }, /*#__PURE__*/React.createElement(ScInput, {
        onChange: handleInputChange
      }), type === EVerifyType.MFA ? null : /*#__PURE__*/React.createElement(Generate, null)), /*#__PURE__*/React.createElement(ScError, null, errorMessage))
    }]
  });
}