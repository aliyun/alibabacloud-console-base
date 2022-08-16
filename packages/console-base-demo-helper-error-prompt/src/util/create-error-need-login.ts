import {
  CODE_NEED_LOGIN
} from '../const';

import createError from './create-error';

export default function createErrorNeedLogin(plain?: boolean): Error | Record<string, unknown> {
  return createError({
    code: CODE_NEED_LOGIN,
    message: '登录失效（官方，由组件标准化）'
  }, plain);
}