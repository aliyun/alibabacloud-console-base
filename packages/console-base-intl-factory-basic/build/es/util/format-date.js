import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import _forEach from 'lodash/forEach';

/**
 * 当 Intl.DateTimeFormat 失败时回退至这个
 */
function fallbackFormat(d) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm:ss';

  /**
   * 借鉴 moment
   * - `年Y月M日D季Q周W` 等大头都是大写的
   * - `时hH分m秒s` 都是小写的（时的话用大写的 H 表示 24 小时制）
   * - 毫秒是 S
   */
  var o = {
    'Q+': Math.floor((d.getMonth() + 3) / 3),
    'M+': d.getMonth() + 1,
    'D+': d.getDate(),
    'H+': d.getHours(),
    'm+': d.getMinutes(),
    's+': d.getSeconds(),
    S: d.getMilliseconds()
  };
  var pattern = format;

  if (/(Y+)/.test(pattern)) {
    pattern = pattern.replace(RegExp.$1, "".concat(d.getFullYear()).substr(4 - RegExp.$1.length));
  }

  _forEach(o, function (v, k) {
    if (new RegExp("(".concat(k, ")")).test(pattern)) {
      pattern = pattern.replace(RegExp.$1, RegExp.$1.length === 1 ? "".concat(v) : "00".concat(v).substring("".concat(v).length));
    }
  });

  return pattern;
}

var dateOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};
var timeOptions = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false // 默认居然是 true

};

var dateTimeOptions = _objectSpread(_objectSpread({}, dateOptions), timeOptions);

function getFormatOptions(format) {
  switch (format) {
    case 'date':
      return dateOptions;

    case 'time':
      return timeOptions;

    default:
      return dateTimeOptions;
  }
}

function getFormatPattern(format) {
  switch (format) {
    case 'date':
      return 'YYYY-MM-DD';

    case 'time':
      return 'HH:mm:ss';

    default:
      return 'YYYY-MM-DD HH:mm:ss';
  }
}
/**
 * 格式化日期时间
 */


export default function formatDate(date, format) {
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';

  try {
    return new Intl.DateTimeFormat(locale, getFormatOptions(format)).format(date);
  } catch (e) {
    return fallbackFormat(date, getFormatPattern(format));
  }
}