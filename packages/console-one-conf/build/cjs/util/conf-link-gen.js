"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = confLinkGen;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _consoleOneConfig = _interopRequireDefault(require("@alicloud/console-one-config"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 渠道链接中的替换符，各个控制台的偏好不一样...但一个控制台下应该保持一致
 */
function getInterpolationReg(interpolationMode) {
  switch (interpolationMode) {
    case '{}':
      return /\\?{([^{}]+)}/g;

    case '${}':
      return /\\?\${([^{}]+)}/g;

    case '{{}}':
      return /\\?{{([^{}]+)}}/g;

    case '<>':
      return /\\?<([^<>]+)>/g;

    default:
      return /\\?\[([^[\]]+)]/g;
  }
}
/**
 * 渠道链接工厂方法，要求必须传入所有兜底的渠道链接（在 TS 下有良好的 key 约束）
 */


function confLinkGen(defaultLinks) {
  var interpolationMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '[]';

  var LINK = _objectSpread(_objectSpread({}, defaultLinks), _consoleOneConfig.default.LINK);

  var REG_INTERPOLATION = getInterpolationReg(interpolationMode);
  /**
   * 获取配置的链接，注意 interpolation 中的参数是不进行 encodeURIComponent 操作的，如有需要需自行处理
   */

  return [function confLink(key, interpolation, noEncode) {
    var link = LINK[key];

    if (!link || typeof link !== 'string') {
      return key || '';
    }

    if (!interpolation) {
      return link;
    } // 如果连接当中有类似 `[xx]` 的地方需要将其用 `interpolation.xx` 来替换


    return link.replace(REG_INTERPOLATION, function (match, name) {
      if (match.charAt(0) === '\\') {
        return match.slice(1);
      }

      var str = interpolation[name] === undefined ? '' : String(interpolation[name]);
      return noEncode ? str : encodeURIComponent(str);
    });
  }, LINK];
}