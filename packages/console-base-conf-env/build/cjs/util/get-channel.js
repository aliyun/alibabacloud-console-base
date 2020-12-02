"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getChannel;

var _consoleOneConfig = _interopRequireDefault(require("@alicloud/console-one-config"));

function getFallbackChannel(site) {
  switch (site) {
    case 'INTL':
      return 'SIN';

    case 'JP':
      return 'JP';

    case 'CN':
      return 'OFFICIAL';

    default:
      return site;
  }
}

function getChannel(site) {
  var _ref = window,
      ALIYUN_ECS_CONSOLE_CONFIG = _ref.ALIYUN_ECS_CONSOLE_CONFIG;
  var channel = '';

  if (_consoleOneConfig.default.ONE) {
    // OneConsole 的场景
    channel = _consoleOneConfig.default.CHANNEL;
  } else if (ALIYUN_ECS_CONSOLE_CONFIG) {
    // ECS 不是 OneConsole 但，是大头，需要兼容一下
    channel = ALIYUN_ECS_CONSOLE_CONFIG.channel;
  }

  return channel || getFallbackChannel(site);
}