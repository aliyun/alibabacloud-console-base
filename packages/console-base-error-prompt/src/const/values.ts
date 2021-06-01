import {
  IErrorPromptExtra
} from '../types';
import intl from '../intl';

import {
  EErrorField
} from './enum';

function reload(): void {
  location.reload();
}

/**
 * 非开发环境下，仅展示这些信息，开发环境可以展示更多信息
 */
export const ERROR_INTL_MAPPING: Record<string, string> = {
  [EErrorField.CODE]: intl('attr:code'),
  [EErrorField.REQUEST_ID]: intl('attr:request_id')
};

/**
 * 保证字段排序
 */
export const ERROR_ORDER: Record<string, number> = {
  [EErrorField.CODE]: 1,
  [EErrorField.REQUEST_ID]: 2,
  [EErrorField.URL]: 3,
  [EErrorField.METHOD]: 4,
  [EErrorField.PARAMS]: 5,
  [EErrorField.BODY]: 6,
  [EErrorField.ERROR_NAME]: 7,
  [EErrorField.STACK]: 8
};

// 需要忽略的 error 的 name 列表 TODO 硬编码，不想依赖 @alicloud/console-fetcher 的输出
export const ERROR_NAMES_IGNORE_LIST = [
  'FetcherErrorRiskForbidden',
  'FetcherErrorRiskInvalid',
  'FetcherErrorRiskCancelled'
];

export const ERROR_CODE_EXTRA_MAPPING: Record<string, IErrorPromptExtra> = {
  /**
   * 登录失效，需要重新登录
   */
  ConsoleNeedLogin: {
    title: intl('title:session_timeout'),
    message: intl('message:sign_in'),
    button: {
      label: intl('op:sign_in'),
      onClick: reload
    }
  },
  /**
   * SecToken 失效，可能是在另一个浏览器 tab 中做了重新登录或切换账号操作
   */
  PostonlyOrTokenError: {
    title: intl('title:token_expired'),
    message: intl('message:token_expired'),
    button: {
      label: intl('op:reload_page'),
      onClick: reload
    }
  }
};
