import {
  IErrorPromptExtra
} from '../types';
import intl from '../intl';

function reload(): void {
  location.reload();
}

/**
 * 登录失效，需要重新登录（控制台通用）
 */
const LOGIN: IErrorPromptExtra = {
  title: intl('title:session_timeout'),
  message: intl('message:sign_in'),
  button: {
    label: intl('op:sign_in'),
    onClick: reload
  }
};
/**
 * SecToken 失效，可能是在另一个浏览器 tab 中做了重新登录或切换账号操作
 */
const TOKEN_EXPIRED: IErrorPromptExtra = {
  title: intl('title:token_expired'),
  message: intl('message:token_expired'),
  button: {
    label: intl('op:reload_page'),
    onClick: reload
  }
};
/**
 * 接口不存在，有多个 code
 * 
 * - ApiNotExist
 * - InvalidAction.NotFound
 * - ApiDefineNotExist
 * 
 * - `ApiNotExist`，OneConsole 没有配置该 API，message（没有结束标点）：
 *   * 「The specified api is not exist」
 *   * 「请求的API不存在，请输入正确的API」
 * - `InvalidAction.NotFound`，OneConsole 配置的 RPC 风格接口，message（只有英文）：
 *   * 「Specified api is not found, please check your url and method.」
 * - `ApiDefineNotExist`，OneConsole 配置的 RESTFUL 风格接口，action 不存在，message：
 *   * 「请求的API定义不存在，请完善API信息」
 *   * 「The specified restful api define is not exist」
 */
const API_NOT_EXIST: IErrorPromptExtra = {
  title: intl('title:api_not_exist'),
  message: intl('message:api_not_exist')
};

const PERMISSION_DENIED: IErrorPromptExtra = {
  title: intl('title:permission_denied'),
  message: intl('message:permission_denied')
};

// TODO code ApiUnknownEndpoint

/**
 * 根据 code 提取预设的 extra 信息，用于统一不一致
 */
export default function getPredefinedExtra(code?: string): IErrorPromptExtra | undefined {
  switch (code) {
    case 'ConsoleNeedLogin':
      return LOGIN;
    case 'PostonlyOrTokenError':
      return TOKEN_EXPIRED;
    case 'ApiNotExist':
    case 'InvalidAction.NotFound':
    case 'ApiDefineNotExist':
      return API_NOT_EXIST;
    case 'Forbidden.RAM':
      return PERMISSION_DENIED;
    default:
      break;
  }
}
