import {
  IErrorPromptExtra
} from '../types';
import intl from '../intl';

function reload(): void {
  location.reload();
}

// 需要忽略的 error 的 name 列表 TODO 硬编码，不想依赖 @alicloud/console-fetcher 的输出
export const ERROR_NAMES_IGNORE_LIST = [
  'FetcherErrorRiskForbidden',
  'FetcherErrorRiskInvalid',
  'FetcherErrorRiskCancelled'
];

export const ERROR_CODE_EXTRA_MAPPING: Record<string, Required<IErrorPromptExtra>> = {
  // 登录失效，需要重新登录
  ConsoleNeedLogin: {
    title: intl('title:session_timeout'),
    message: intl('message:sign_in'),
    button: {
      label: intl('op:sign_in'),
      onClick: reload
    },
    buttonCancel: intl('op:cancel')
  },
  // SecToken 失效，可能是在另一个浏览器 tab 中做了重新登录或切换账号操作
  PostonlyOrTokenError: {
    title: intl('title:token_expired'),
    message: intl('message:token_expired'),
    button: {
      label: intl('op:reload_page'),
      onClick: reload
    },
    buttonCancel: intl('op:cancel')
  }
};
