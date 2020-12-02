"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = factory;

var _consoleBaseConfLocale = _interopRequireDefault(require("@alicloud/console-base-conf-locale"));

var _getMessages = _interopRequireDefault(require("./get-messages"));

var _formatMessage = _interopRequireDefault(require("./format-message"));

var _formatDate = _interopRequireDefault(require("./format-date"));

var _convertDate = _interopRequireDefault(require("./convert-date"));

/**
 * 获得 intl 方法，其中 messagesMap 中的 key 你可以随便，不用在意大小写，中划线还是下划线还是骆驼，这里自会适应
 */
function factory(messagesMap) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? _consoleBaseConfLocale.default.LOCALE : _ref$locale,
      localeDefault = _ref.localeDefault;

  // : <V extends {}>(id, values?: V) => string => 
  var messages = (0, _getMessages.default)(messagesMap, locale, localeDefault);

  var intl = function intl(id, values) {
    return (0, _formatMessage.default)(messages, id, values);
  };

  intl.intlDate = function (d, format) {
    var date = (0, _convertDate.default)(d);
    return date ? (0, _formatDate.default)(date, format, locale) : '';
  };

  return intl;
}