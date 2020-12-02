"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PromptContent;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _consoleBaseRcInput = _interopRequireDefault(require("@alicloud/console-base-rc-input"));

var _model = require("../../model");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding-top: 24px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ScPromptContent = _styledComponents.default.div(_templateObject());

/**
 * prompt dialog 的内容
 */
function PromptContent() {
  var _useDialog = (0, _model.useDialog)(),
      updateData = _useDialog.updateData;

  var handleChange = (0, _react.useCallback)(function (value) {
    return updateData({
      value: value
    });
  }, [updateData]);
  return /*#__PURE__*/_react.default.createElement(ScPromptContent, null, /*#__PURE__*/_react.default.createElement(_consoleBaseRcInput.default, {
    block: true,
    onChange: handleChange
  }));
}