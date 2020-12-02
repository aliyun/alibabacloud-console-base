"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertVerifyType;

var _const = require("../const");

function convertVerifyType(type0, riskConfig) {
  switch (type0) {
    case riskConfig.BY_SMS:
      return _const.EVerifyType.SMS;

    case riskConfig.BY_EMAIL:
      return _const.EVerifyType.EMAIL;

    case riskConfig.BY_MFA:
      // MFA 既不需要 info
      return _const.EVerifyType.MFA;

    default:
      return type0 ? _const.EVerifyType.UNKNOWN : _const.EVerifyType.NONE;
  }
}