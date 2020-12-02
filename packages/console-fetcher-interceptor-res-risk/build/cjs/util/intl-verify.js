"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intlVerifyTitle = intlVerifyTitle;
exports.intlVerifyLabel = intlVerifyLabel;
exports.intlVerifySetting = intlVerifySetting;

var _const = require("../const");

var _intl = _interopRequireDefault(require("../intl"));

function intlVerifyTitle(type) {
  switch (type) {
    case _const.EVerifyType.SMS:
      return (0, _intl.default)('op:verify_by_phone');

    case _const.EVerifyType.EMAIL:
      return (0, _intl.default)('op:verify_by_email');

    default:
      // MFA
      return (0, _intl.default)('op:verify_by_mfa');
  }
}

function intlVerifyLabel(type) {
  switch (type) {
    case _const.EVerifyType.SMS:
      return (0, _intl.default)('attr:phone');

    case _const.EVerifyType.EMAIL:
      return (0, _intl.default)('attr:email');

    default:
      // MFA
      return (0, _intl.default)('attr:mfa');
  }
}

function intlVerifySetting(type) {
  switch (type) {
    case _const.EVerifyType.SMS:
      return (0, _intl.default)('op:change_phone');

    case _const.EVerifyType.EMAIL:
      return (0, _intl.default)('op:change_email');

    default:
      // MFA
      return (0, _intl.default)('op:change_mfa');
  }
}