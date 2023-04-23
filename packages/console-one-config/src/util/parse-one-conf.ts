import {
  IConsoleOneConfig,
  IShittyConsoleOneConfig,
  IWindow
} from '../types';

import fixRegions from './fix-regions';
import fixOpenStatus from './fix-open-status';
import fixApiResult from './fix-api-result';

function fillByShitty(o: IConsoleOneConfig, conf0: IShittyConsoleOneConfig): void {
  o.ONE = conf0.portalType === 'one';
  o.PRIVATE_CLOUD = conf0.IS_PRIVATE_CLOUD === 'true';
  o.ENV = conf0.fEnv || o.ENV;
  o.CHANNEL = conf0.CHANNEL || o.CHANNEL;
  o.LANG = conf0.LANG || o.LANG;
  o.LOCALE = conf0.LOCALE || o.LOCALE;
  o.SEC_TOKEN = conf0.SEC_TOKEN || o.SEC_TOKEN;
  o.ACCOUNT = {
    ID: conf0.CURRENT_PK || o.ACCOUNT.ID,
    ID_MAIN: conf0.MAIN_ACCOUNT_PK || o.ACCOUNT.ID_MAIN,
    TYPE: conf0.ACCOUNT_TYPE || o.ACCOUNT.TYPE,
    CERTIFIED: conf0.IS_CERTIFIED === 'true'
  };
  o.APP_ID = conf0.APP_ID || '';
  o.REGIONS = fixRegions(conf0.REGIONS);
  o.OPEN_STATUS = fixOpenStatus(conf0.OPEN_STATUS);
  o.LINK = conf0.CHANNEL_LINKS || o.LINK;
  o.FEATURE_SWITCH = conf0.CHANNEL_FEATURE_STATUS || o.FEATURE_SWITCH;
  o.FEATURE_GRAY = conf0.FEATURE_STATUS || o.FEATURE_GRAY;
  o.API_RESULT = fixApiResult(conf0.STATIC_API);
  o.RULE_CONFIG = conf0.RULE_CONFIG || o.RULE_CONFIG;
  o.LABELS = conf0.LABELS || o.LABELS;
  o.USER_PREFERENCE = conf0.USER_PREFERENCE || o.USER_PREFERENCE;
  o.NEW_VERSION = conf0.NEW_VERSION === 'true';
}

/**
 * OneConsole 通用的 CONF 解析逻辑
 */
export default function parseOneConf(): IConsoleOneConfig {
  const ONE_CONF: IConsoleOneConfig = {
    ONE: false,
    PRIVATE_CLOUD: false,
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
