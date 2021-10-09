import {
  IConsoleOneConfig,
  IShittyConsoleOneConfig,
  IWindow
} from '../types';

import fixRegions from './fix-regions';
import fixOpenStatus from './fix-open-status';
import fixApiResult from './fix-api-result';

function fillByShitty(ONE_CONF: IConsoleOneConfig, shittyConf: IShittyConsoleOneConfig): void {
  ONE_CONF.ONE = shittyConf.portalType === 'one';
  ONE_CONF.ENV = shittyConf.fEnv || ONE_CONF.ENV;
  ONE_CONF.CHANNEL = shittyConf.CHANNEL || ONE_CONF.CHANNEL;
  ONE_CONF.LANG = shittyConf.LANG || ONE_CONF.LANG;
  ONE_CONF.LOCALE = shittyConf.LOCALE || ONE_CONF.LOCALE;
  ONE_CONF.SEC_TOKEN = shittyConf.SEC_TOKEN || ONE_CONF.SEC_TOKEN;
  ONE_CONF.ACCOUNT = {
    ID: shittyConf.CURRENT_PK || ONE_CONF.ACCOUNT.ID,
    ID_MAIN: shittyConf.MAIN_ACCOUNT_PK || ONE_CONF.ACCOUNT.ID_MAIN,
    TYPE: shittyConf.ACCOUNT_TYPE || ONE_CONF.ACCOUNT.TYPE,
    CERTIFIED: shittyConf.IS_CERTIFIED === 'true'
  };
  ONE_CONF.APP_ID = shittyConf.APP_ID || '';
  ONE_CONF.REGIONS = fixRegions(shittyConf.REGIONS);
  ONE_CONF.OPEN_STATUS = fixOpenStatus(shittyConf.OPEN_STATUS);
  ONE_CONF.LINK = shittyConf.CHANNEL_LINKS || ONE_CONF.LINK;
  ONE_CONF.FEATURE_SWITCH = shittyConf.CHANNEL_FEATURE_STATUS || ONE_CONF.FEATURE_SWITCH;
  ONE_CONF.FEATURE_GRAY = shittyConf.FEATURE_STATUS || ONE_CONF.FEATURE_GRAY;
  ONE_CONF.API_RESULT = fixApiResult(shittyConf.STATIC_API);
  ONE_CONF.RULE_CONFIG = shittyConf.RULE_CONFIG || ONE_CONF.RULE_CONFIG;
  ONE_CONF.LABELS = shittyConf.LABELS || ONE_CONF.LABELS;
  ONE_CONF.USER_PREFERENCE = shittyConf.USER_PREFERENCE || ONE_CONF.USER_PREFERENCE;
  ONE_CONF.NEW_VERSION = shittyConf.NEW_VERSION === 'true';
}

/**
 * OneConsole 通用的 CONF 解析逻辑
 */
export default function parseOneConf(): IConsoleOneConfig {
  const ONE_CONF: IConsoleOneConfig = {
    ONE: false,
    ENV: 'prod',
    CHANNEL: 'OFFICIAL',
    LANG: 'zh',
    LOCALE: 'zh-CN',
    SEC_TOKEN: '',
    ACCOUNT: {
      ID: '',
      ID_MAIN: '',
      TYPE: 'main',
      CERTIFIED: false
    },
    APP_ID: '',
    REGIONS: [],
    OPEN_STATUS: {},
    LINK: {},
    FEATURE_SWITCH: {},
    FEATURE_GRAY: {},
    API_RESULT: {},
    RULE_CONFIG: {},
    LABELS: {},
    USER_PREFERENCE: {},
    NEW_VERSION: false
  };
  const shittyConf: IShittyConsoleOneConfig | undefined = typeof window !== 'undefined' ? (window as IWindow).ALIYUN_CONSOLE_CONFIG : undefined;
  
  if (shittyConf) {
    fillByShitty(ONE_CONF, shittyConf);
  }
  
  if (ONE_CONF.LOCALE === 'zh-TW') {
    ONE_CONF.LANG = 'zh-TW'; // OneConsole 在这种情况下写的是 zh，这是不对的
  }
  
  return ONE_CONF;
}
