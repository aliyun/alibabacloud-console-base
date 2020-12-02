"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToRiskErrorForbidden = convertToRiskErrorForbidden;
exports.convertToRiskErrorInvalid = convertToRiskErrorInvalid;
exports.convertToRiskErrorCancelled = convertToRiskErrorCancelled;

var _const = require("../const");

function convertToRiskError(err, name) {
  err.name = name;
  err.code = name; // name 当 code yes，不要惊慌

  return err;
}

function convertToRiskErrorForbidden(err) {
  return convertToRiskError(err, _const.ERROR_RISK_FORBIDDEN);
}

function convertToRiskErrorInvalid(err) {
  return convertToRiskError(err, _const.ERROR_RISK_INVALID);
}

function convertToRiskErrorCancelled(err) {
  return convertToRiskError(err, _const.ERROR_RISK_CANCELLED);
}