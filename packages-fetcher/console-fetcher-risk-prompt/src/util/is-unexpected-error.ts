// 判断 RiskPrompt 抛出的错误是否是非预期错误，非预期错误发生在风控流程被阻塞，导致用户只能关闭风控弹窗
export default function isUnexpectedError(error: unknown): boolean {
  if (error && typeof error === 'object') {
    if ('unexpectedErrorType' in error && error.unexpectedErrorType) {
      return true;
    }
  }
  
  return false;
}