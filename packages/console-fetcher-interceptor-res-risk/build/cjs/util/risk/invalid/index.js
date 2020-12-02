"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _consoleBaseRcDialog = require("@alicloud/console-base-rc-dialog");

var _intl = _interopRequireDefault(require("../../../intl"));

/**
 * 风控 - 不支持的类型
 */
var _default = function _default(message, urlSettings) {
  return (0, _consoleBaseRcDialog.open)({
    title: (0, _intl.default)('op:risk_invalid'),
    content: /*#__PURE__*/_react.default.createElement(_consoleBaseRcDialog.AltWrap, {
      type: 'alert',
      content: message
    }),
    buttons: [{
      label: (0, _intl.default)('op:risk_invalid_go'),
      spm: 'add',
      href: urlSettings
    }, (0, _intl.default)('op:cancel')]
  });
};

exports.default = _default;