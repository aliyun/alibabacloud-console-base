import { EEnv } from '../const';
import getEnv from './get-env';
import getSite from './get-site';
import getChannel from './get-channel';
/**
 * 从浏览器、location、cookie 中获得到的静态数据，跟环境、站点、用户有关，项目的运行期间不可能变
 */

export default function parse() {
  var _ref = window,
      hostname = _ref.location.hostname;
  var ENV = getEnv();
  var SITE = getSite();
  var ENV_IS_DAILY = ENV === EEnv.DAILY;
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
    ENV_IS_DEV: ENV === EEnv.DEV,
    ENV_IS_DAILY: ENV_IS_DAILY,
    ENV_IS_PRE: ENV === EEnv.PRE,
    ENV_IS_PROD: ENV === EEnv.PROD,
    DOMAIN_IS_4SERVICE: DOMAIN_IS_4SERVICE,
    DOMAIN_IS_CONSOLE: DOMAIN_IS_CONSOLE,
    SITE: SITE,
    CHANNEL: getChannel(SITE),
    FECS_HOST: "".concat(DOMAIN_IS_4SERVICE ? 'fecs4service' : 'fecs', ".console.aliyun.").concat(ENV_IS_DAILY ? 'test' : 'com')
  };
}