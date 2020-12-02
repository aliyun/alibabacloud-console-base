import ONE_CONF from '@alicloud/console-one-config';
import { EEnv } from '../const';
/**
 * 获取当前运行的环境
 */

export default function getEnv() {
  var _ref = window,
      _ref$location = _ref.location,
      protocol = _ref$location.protocol,
      hostname = _ref$location.hostname,
      port = _ref$location.port;
  /**
   * 本地开发：
   * 
   * 1. 带端口的一般都是本地开发（但也有本地搭 nginx 后可以不带端口的）
   * 2. 再判断 host（如果再绑域名就只能认为不是本地）
   * 
   * 注意：本地开发的情况，如果绑了日常的域名，不鸟之
   */

  if (port || /^127(?:\.0\.0)?\.1$|^0\.0\.0\.0$|^localhost$/.test(hostname)) {
    return EEnv.DEV;
  }
  /**
   * 日常环境：
   * 
   * 1. OneConsole 的输出
   * 2. URL 以 `.test` 结尾
   * 3. hostname 中带 `daily-` 或 `-daily`
   */


  if (ONE_CONF.ONE && ONE_CONF.ENV === 'daily' || /\.test$/.test(hostname) || /daily-|-daily/i.test(hostname)) {
    return EEnv.DAILY;
  }
  /*
   * 预发环境：
   * 
   * 1. OneConsole 的输出
   * 2. hostname 中带 `pre-` 或 `-pre`
   * 3. 非 HTTPS （通常绑 host）的一般认为是预发
   */


  if (ONE_CONF.ONE && ONE_CONF.ENV === 'pre' || /pre-|-pre/i.test(hostname) || protocol === 'http:') {
    return EEnv.PRE;
  }

  return EEnv.PROD;
}