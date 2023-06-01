import {
  IErrorPlain,
  IErrorPromptExtra
} from '../types';
import intl from '../intl';
import {
  ERROR_CODE_LOGIN,
  ERROR_CODE_TOKEN_EXPIRED
} from '../const';

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

function getExtraForAccessDenied(error: IErrorPlain): IErrorPromptExtra {
  return {
    title: intl('title:access_denied'),
    message:
      intl(error.detailsAuth?.type === 'ExplicitDeny' ? 'message:access_denied_1_explicit' : 'message:access_denied_1_implicit') +
      intl(error.detailsAuth?.policyType === 'ControlPolicy' ? 'message:access_denied_2_control_policy' : 'message:access_denied_2_default')
  };
}

// TODO code ApiUnknownEndpoint

/**
 * 根据 error 构造预设的 extra 信息，用于接管抹平不一致但是应一致
 */
export default function getPredefinedExtra(error?: IErrorPlain): IErrorPromptExtra | undefined {
  if (!error?.code) { return undefined; }

  if (error.code === ERROR_CODE_LOGIN) {
    return LOGIN;
  }

  if (error.code === ERROR_CODE_TOKEN_EXPIRED) {
    return TOKEN_EXPIRED;
  }

  if (['ApiNotExist', 'InvalidAction.NotFound', 'ApiDefineNotExist'].includes(error.code)) {
    return API_NOT_EXIST;
  }

  if (['NoPermission', 'Forbidden.RAM'].includes(error.code) || error.detailsAuth) {
    return getExtraForAccessDenied(error);
  }
}
