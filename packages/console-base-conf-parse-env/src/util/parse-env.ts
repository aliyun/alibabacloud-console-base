import ONE_CONF from '@alicloud/console-one-config';

import {
  EEnv
} from '../enum';
import {
  IWin,
  IConfEnv
} from '../types';

import getEnv from './get-env';
import getSite from './get-site';
import getChannel from './get-channel';

/**
 * 从浏览器、location、cookie 中获得到的静态数据，跟环境、站点、用户有关，项目的运行期间不可能变
 */
export default function parseEnv(): IConfEnv {
  const {
    location: {
      hostname
    }
  } = window as IWin;
  const ENV = getEnv();
  const SITE: IConfEnv['SITE'] = getSite();
  
  /**
   * 是否虚商
   * 
   * 虚商链接地址规则：`{产品}4service{-地域后缀}.{console.}aliyun.com`
   */
  const DOMAIN_IS_4SERVICE = /4service/.test(hostname);
  const DOMAIN_IS_TEST = /\.test$/.test(hostname);
  /**
   * 是否「标准」控制台
   * 
   * 有的控制台（甚至有些内部应用会用 console-base，它们的域名不是 .console.aliyun.com），有些逻辑（比如 CloudShell 是否本地打开）需要调整
   */
  const DOMAIN_IS_CONSOLE = /\.console\.aliyun\.(?:com|test)$/.test(hostname);
  const DOMAIN_IS_ALIBABACLOUD = /\.alibabacloud\.(?:com|test)$/.test(hostname);
  // 不同的域名，保证可以获取到 SameSite 属性为 Lax 的 cookie，比如 login_aliyunid_ticket，避免误判成未登录
  const FECS_HOST = `${DOMAIN_IS_4SERVICE ? 'fecs4service' : 'fecs'}.console.${DOMAIN_IS_ALIBABACLOUD ? 'alibabacloud' : 'aliyun'}.${DOMAIN_IS_TEST ? 'test' : 'com'}`;
  // 这个不推荐用 protocol-relative，Firefox 调用 CORS 时，有可能 request.header.Origin 是 null 而导致接口失败...
  const FECS_URL_BASE = `https://${FECS_HOST}`;
  
  return {
    ENV,
    ENV_IS_DEV: ENV === EEnv.DEV,
    ENV_IS_DAILY: ENV === EEnv.DAILY,
    ENV_IS_PRE: ENV === EEnv.PRE,
    ENV_IS_PROD: ENV === EEnv.PROD,
    APP_ID: ONE_CONF.APP_ID,
    DOMAIN_IS_4SERVICE,
    DOMAIN_IS_CONSOLE,
    SITE,
    CHANNEL: getChannel(SITE),
    FECS_HOST,
    FECS_URL_BASE
  };
}
