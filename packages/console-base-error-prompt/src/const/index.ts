import {
  hasParamInUrl
} from '../util';

export const ERROR_NAME_WILL_IGNORE = 'ErrorPromptWillIgnore';

export const ERROR_CODE_LOGIN = 'ConsoleNeedLogin';
export const ERROR_CODE_TOKEN_EXPIRED = 'PostonlyOrTokenError';

// 默认仅在开发模式下展示的信息，也可以通过在 URL 上指定 _error_prompt_detailed_ 参数（忽略值）强行在线上开启
export const DETAILED_MODE = process.env.NODE_ENV === 'development' || hasParamInUrl('_error_prompt_detailed_');

// 重新登录或 Token 失效时，一般错误码是一致的，这些错误没有必要逐个展示
export const MERGED_ERROR_CODES = [ERROR_CODE_LOGIN, ERROR_CODE_TOKEN_EXPIRED];