"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _consoleBaseRcDialog = require("@alicloud/console-base-rc-dialog");

var _intl = _interopRequireDefault(require("../../../intl"));

/**
 * 风控 - 操作中止
 */
var _default = function _default() {
  return (0, _consoleBaseRcDialog.alert)({
    title: (0, _intl.default)('op:risk_forbidden'),
    content: (0, _intl.default)('message:forbidden')
  }, {
    ok: (0, _intl.default)('op:confirm')
  });
};

exports.default = _default;