"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMessages;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _kebabCase2 = _interopRequireDefault(require("lodash/kebabCase"));

var _reduce2 = _interopRequireDefault(require("lodash/reduce"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 从传入的 map 中提取当前 locale 需要的 messages 对象
 */
function getMessages(messagesMap, locale) {
  var localeDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';
  var theMessageMap = (0, _reduce2.default)(messagesMap, function (result, v, k) {
    var key = (0, _kebabCase2.default)(k); // 'zhCN' / 'zh-CN' 'zh_CN' -> 'zh-cn' 我负责您的随意

    if (result[key]) {
      result[key] = _objectSpread(_objectSpread({}, result[key]), v);
    } else {
      result[key] = v;
    }

    return result;
  }, {});
  var messages = theMessageMap[(0, _kebabCase2.default)(locale)];
  var messagesDefault = theMessageMap[(0, _kebabCase2.default)(localeDefault)] || {};
  return messages === messagesDefault ? messages : _objectSpread(_objectSpread({}, messagesDefault), messages);
}