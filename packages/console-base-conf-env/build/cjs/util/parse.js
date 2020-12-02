"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parse;

var _const = require("../const");

var _getEnv = _interopRequireDefault(require("./get-env"));

var _getSite = _interopRequireDefault(require("./get-site"));

var _getChannel = _interopRequireDefault(require("./get-channel"));

/**
 * 从浏览器、location、cookie 中获得到的静态数据，跟环境、站点、用户有关，项目的运行期间不可能变
 */
function parse() {
  var _ref = window,
      hostname = _ref.location.hostname;
  var ENV = (0, _getEnv.default)();
  var SITE = (0, _getSite.default)();
  var ENV_IS_DAILY = ENV === _const.EEnv.DAILY;
  /**
   * 是否虚商
   * 
   * 虚商链接地址规则：`{产品}4service{-地域后缀}.{console.}aliyun.com`
   */

  var DOMAIN_IS_4SERVICE = /4service/.test(hostname);
  /**
   * 是否「标准」控制台
   * 
   * 有的控制台（甚至有些内部应用会用 console-base，它们的域名不是 .console.aliyun.com），有些逻辑（比如 CloudShell 是否本地打开）需要调整
   */

  var DOMAIN_IS_CONSOLE = /\.console\.aliyun\.(?:com|test)$/.test(hostname);
  return {
    ENV: ENV,
    ENV_IS_DEV: ENV === _const.EEnv.DEV,
    ENV_IS_DAILY: ENV_IS_DAILY,
    ENV_IS_PRE: ENV === _const.EEnv.PRE,
    ENV_IS_PROD: ENV === _const.EEnv.PROD,
    DOMAIN_IS_4SERVICE: DOMAIN_IS_4SERVICE,
    DOMAIN_IS_CONSOLE: DOMAIN_IS_CONSOLE,
    SITE: SITE,
    CHANNEL: (0, _getChannel.default)(SITE),
    FECS_HOST: "".concat(DOMAIN_IS_4SERVICE ? 'fecs4service' : 'fecs', ".console.aliyun.").concat(ENV_IS_DAILY ? 'test' : 'com')
  };
}