"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _consoleOneConfig = _interopRequireDefault(require("@alicloud/console-one-config"));

var _viperFeatureGen = _interopRequireDefault(require("@alicloud/viper-feature-gen"));

/**
 * 可直接使用的 OneConsole 功能开关/灰度判定
 */
var _default = (0, _viperFeatureGen.default)(_consoleOneConfig.default.FEATURE_SWITCH, _consoleOneConfig.default.FEATURE_GRAY);

exports.default = _default;