// 判断 RiskPrompt 抛出的错误是否是非预期错误，非预期错误是指导致用户风控流程被阻塞，只能关闭弹窗的错误。
export default function isUnexpectedError(error: unknown): boolean {
  if (error && typeof error === 'object') {
    if ('unexpectedErrorType' in error && error.unexpectedErrorType) {
      return true;
    }
  }
  
  return false;
}