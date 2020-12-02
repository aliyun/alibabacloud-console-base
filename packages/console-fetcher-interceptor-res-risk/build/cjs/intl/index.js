"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _consoleBaseIntlFactory = _interopRequireDefault(require("@alicloud/console-base-intl-factory"));

var _enUs = _interopRequireDefault(require("./locales/en-us"));

var _zhCn = _interopRequireDefault(require("./locales/zh-cn"));

var _zhTw = _interopRequireDefault(require("./locales/zh-tw"));

var _jaJp = _interopRequireDefault(require("./locales/ja-jp"));

var _default = (0, _consoleBaseIntlFactory.default)({
  'en-US': _enUs.default,
  'zh-CN': _zhCn.default,
  'zh-TW': _zhTw.default,
  'ja-JP': _jaJp.default
});

exports.default = _default;