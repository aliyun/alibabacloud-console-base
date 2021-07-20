import {
  EEnv
} from '../const';

export interface IWin extends Window {
  ALIYUN_ECS_CONSOLE_CONFIG?: {
    channel: string;
  };
}

export interface IConfEnv {
  ENV: EEnv;
  ENV_IS_DEV: boolean;
  ENV_IS_DAILY: boolean;
  ENV_IS_PRE: boolean;
  ENV_IS_PROD: boolean;
  DOMAIN_IS_4SERVICE: boolean;
  DOMAIN_IS_CONSOLE: boolean;
  APP_ID: string;
  SITE: 'CN' | 'INTL' | 'JP';
  CHANNEL: string;
  FECS_HOST: string;
  FECS_URL_BASE: string;
}
