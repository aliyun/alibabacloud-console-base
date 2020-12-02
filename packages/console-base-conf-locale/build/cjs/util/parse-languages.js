"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseLanguages;

var _intersection2 = _interopRequireDefault(require("lodash/intersection"));

var _const = require("../const");

/**
 * 获取控制台支持的语言，这里表示控制台能够支持这些语言，但右上角的切换语言菜单还会根据功能开关来决定是否要展示该语言。
 * 无论如何，支持的语言中，英语和中文肯定是有的。
 */
function parseLanguages() {
  var languagesInSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (!languagesInSettings.length) {
    return _const.LANGUAGES_DEFAULT;
  }

  var languages = (0, _intersection2.default)(languagesInSettings, _const.LANGUAGES_ALL); // 保证英语和简体中文一定存在

  if (!languages.includes(_const.ELanguage.EN)) {
    languages.unshift(_const.ELanguage.EN);
  }

  if (!languages.includes(_const.ELanguage.ZH)) {
    languages.push(_const.ELanguage.ZH);
  }

  return languages;
}