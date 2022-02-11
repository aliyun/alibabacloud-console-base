import {
  IApiOptions
} from '../types';

import getBlInitialized from './get-bl-initialized';
import pipe from './pipe';

/**
 * 封装后的 api 方法，不再和 __bl 中的 this 强关联，参数统一且简洁
 * 建议直接使用 apiSuccess/apiError
 */
export default function armsApi(url: string, success: boolean, duration: number, options: IApiOptions = {}): void {
  const {
    code,
    message,
    timeStarted,
    traceId,
    sessionId
  } = options;
  const bl = getBlInitialized();
  
  if (bl?.api) {
    bl.api(url, success, duration, code, message, timeStarted, traceId, sessionId);
  } else {
    pipe('api', [url, success, duration, code, message, timeStarted, traceId, sessionId]);
  }
}
