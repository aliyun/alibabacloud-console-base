"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertRiskInfo;

var _get2 = _interopRequireDefault(require("lodash/get"));

var _convertVeriyType = _interopRequireDefault(require("./convert-veriy-type"));

function convertRiskInfo(responseData, riskConfig) {
  var type0 = (0, _get2.default)(responseData, riskConfig.DATA_PATH_VERIFY_TYPE, '');
  var detail = (0, _get2.default)(responseData, riskConfig.DATA_PATH_VERIFY_DETAIL, '');
  var codeType = (0, _get2.default)(responseData, riskConfig.DATA_PATH_VERIFY_CODE_TYPE, '');
  return {
    verifyType: type0,
    type: (0, _convertVeriyType.default)(type0, riskConfig),
    detail: detail,
    codeType: codeType
  };
}