import {
  subscribePromiseByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_PROMPT_ERROR
} from '../const';

/**
 * console-base 响应错误弹窗
 */
export default function onPromptError<T>(fn: (payload: T) => Promise<void>): () => void {
  return subscribePromiseByConsoleBase<void, T>(MESSAGE_TYPE_PROMPT_ERROR, fn);
}
