import createError from './create-error';

export default function createErrorNeedLogin(plain?: boolean): Error | Record<string, unknown> {
  return createError({
    code: 'ConsoleNeedLogin',
    message: '登录失效（官方，由组件标准化）'
  }, plain);
}