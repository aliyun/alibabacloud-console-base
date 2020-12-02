var CODE_IGNORE_LIST = ['ConsoleNeedLogin'];
/**
 * 是否忽略该错误（不进行上报）
 */

export default function shouldIgnoreError(err, shouldIgnore) {
  if (CODE_IGNORE_LIST.includes(err.code)) {
    return true;
  }

  if (shouldIgnore) {
    return shouldIgnore(err);
  }

  return false;
}