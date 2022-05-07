import {
  subscribePromiseByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

/**
 * console-base 响应错误弹窗
 */
export default function onPromptError<T>(fn: (payload: T) => Promise<void>): () => void {
  return subscribePromiseByConsoleBase<void, T>(EMessageBroadcastByApp.PROMPT_ERROR, fn);
}
