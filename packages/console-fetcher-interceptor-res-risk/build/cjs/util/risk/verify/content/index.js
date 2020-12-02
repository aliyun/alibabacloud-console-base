"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Content;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _consoleBaseRcDialog = require("@alicloud/console-base-rc-dialog");

var _consoleBaseRcButton = _interopRequireWildcard(require("@alicloud/console-base-rc-button"));

var _consoleBaseRcInput = _interopRequireDefault(require("@alicloud/console-base-rc-input"));

var _consoleBaseRcFlex = _interopRequireDefault(require("@alicloud/console-base-rc-flex"));

var _const = require("../../../../const");

var _intl = _interopRequireDefault(require("../../../../intl"));

var _form = _interopRequireDefault(require("../../../../rc/form"));

var _intlVerify = require("../../../intl-verify");

var _generate = _interopRequireDefault(require("./generate"));

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin-top: 8px;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin-right: 12px;\n  width: 100px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin-right: 12px;\n  font-family: Arial, sans-serif;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ScInfo = _styledComponents.default.strong(_templateObject());

var ScInput = (0, _styledComponents.default)(_consoleBaseRcInput.default)(_templateObject2());

var ScError = _styledComponents.default.div(_templateObject3(), _consoleBaseStyledMixin.COLOR.ERROR);

function Content() {
  var _useDialog = (0, _consoleBaseRcDialog.useDialog)(),
      _useDialog$data = _useDialog.data,
      _useDialog$data$riskI = _useDialog$data.riskInfo,
      type = _useDialog$data$riskI.type,
      detail = _useDialog$data$riskI.detail,
      URL_SETTINGS = _useDialog$data.riskConfig.URL_SETTINGS,
      errorMessage = _useDialog$data.errorMessage,
      updateData = _useDialog.updateData;

  var handleInputChange = (0, _react.useCallback)(function (value) {
    updateData({
      code: value.trim(),
      errorMessage: '' // 清空错误

    });
  }, [updateData]);
  return /*#__PURE__*/_react.default.createElement(_form.default, {
    items: [{
      label: (0, _intlVerify.intlVerifyLabel)(type),
      content: /*#__PURE__*/_react.default.createElement(_consoleBaseRcFlex.default, {
        align: "center"
      }, detail ? /*#__PURE__*/_react.default.createElement(ScInfo, null, detail) : null, /*#__PURE__*/_react.default.createElement(_consoleBaseRcButton.default, {
        spm: "set-".concat(type),
        preset: _consoleBaseRcButton.EButtonPreset.LINK,
        label: (0, _intlVerify.intlVerifySetting)(type),
        href: URL_SETTINGS
      }))
    }, {
      label: (0, _intl.default)('attr:code'),
      content: /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_consoleBaseRcFlex.default, {
        align: "center"
      }, /*#__PURE__*/_react.default.createElement(ScInput, {
        onChange: handleInputChange
      }), type === _const.EVerifyType.MFA ? null : /*#__PURE__*/_react.default.createElement(_generate.default, null)), /*#__PURE__*/_react.default.createElement(ScError, null, errorMessage))
    }]
  });
}