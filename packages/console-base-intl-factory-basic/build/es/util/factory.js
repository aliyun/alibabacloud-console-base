import CONF_LOCALE from '@alicloud/console-base-conf-locale';
import getMessages from './get-messages';
import formatMessage from './format-message';
import formatDate from './format-date';
import convertDate from './convert-date';
/**
 * 获得 intl 方法，其中 messagesMap 中的 key 你可以随便，不用在意大小写，中划线还是下划线还是骆驼，这里自会适应
 */

export default function factory(messagesMap) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? CONF_LOCALE.LOCALE : _ref$locale,
      localeDefault = _ref.localeDefault;

  // : <V extends {}>(id, values?: V) => string => 
  var messages = getMessages(messagesMap, locale, localeDefault);

  var intl = function intl(id, values) {
    return formatMessage(messages, id, values);
  };

  intl.intlDate = function (d, format) {
    var date = convertDate(d);
    return date ? formatDate(date, format, locale) : '';
  };

  return intl;
}