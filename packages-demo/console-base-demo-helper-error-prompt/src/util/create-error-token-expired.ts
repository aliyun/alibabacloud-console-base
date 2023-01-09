import {
  CODE_TOKEN_EXPIRED
} from '../const';

import createError from './create-error';

export default function createErrorTokenExpired(plain?: boolean): Error | Record<string, unknown> {
  return createError({
    code: CODE_TOKEN_EXPIRED,
    message: 'TokenError（官方，由组件标准化）'
  }, plain);
}