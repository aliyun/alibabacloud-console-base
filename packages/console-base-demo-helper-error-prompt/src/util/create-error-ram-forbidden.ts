import createError from './create-error';

export default function createErrorRamForbidden(plain?: boolean): Error | Record<string, unknown> {
  return createError({
    code: 'Forbidden.RAM',
    message: '未授权（官方，由组件标准化）'
  }, plain);
}