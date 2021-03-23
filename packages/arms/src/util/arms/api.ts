import getBlInitialized from '../get-bl-initialized';
import pipe from '../pipe';

interface IOptions {
  code?: string | number;
  message?: string;
  timeStarted?: number;
  traceId?: string;
  sessionId?: string;
}

/**
 * 封装后的 api 方法，不再和 __bl 中的 this 强关联，参数统一且简洁
 */
export default function api(url: string, success: boolean, duration: number, {
  code,
  message,
  timeStarted,
  traceId,
  sessionId
}: IOptions = {}): void {
  const bl = getBlInitialized();
  
  if (bl?.api) {
    bl.api(url, success, duration, code, message, timeStarted, traceId, sessionId);
  } else {
    pipe('api', [url, success, duration, code, message, timeStarted, traceId, sessionId]);
  }
}
