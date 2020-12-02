"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _consoleBaseConfEnv = _interopRequireDefault(require("@alicloud/console-base-conf-env"));

var _consoleBaseConfAccount = _interopRequireDefault(require("@alicloud/console-base-conf-account"));

var _consoleBaseConfLocale = _interopRequireDefault(require("@alicloud/console-base-conf-locale"));

var _loggerSls = require("@alicloud/logger-sls");

// 所有可能的 CHANNEL 可以在 SLS 上通过 `* | SELECT DISTINCT channel` 查到
var INTL_CHANNELS = ['INTL', 'SIN', 'JP'];

var _default = (0, _loggerSls.createLoggerFactory)({
  channel: _consoleBaseConfEnv.default.CHANNEL,
  locale: _consoleBaseConfLocale.default.LOCALE,
  uid: _consoleBaseConfAccount.default.ID,
  uidMain: _consoleBaseConfAccount.default.ID_MAIN
}, function (_ref) {
  var endpoint = _ref.endpoint;

  // 不要把国外的日志提交到国内
  if (/^cn-/.test(endpoint) && INTL_CHANNELS.indexOf(_consoleBaseConfEnv.default.CHANNEL) >= 0) {
    return false;
  }
});

exports.default = _default;