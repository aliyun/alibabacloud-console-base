import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  subscribePromiseByConsoleBase
} from '../../../util';

/**
 * console-base 响应错误弹窗
 */
export default function onPromptError<T>(fn: (payload: T) => Promise<void>): () => void {
  return subscribePromiseByConsoleBase<void, T>(EMessageBroadcastByApp.PROMPT_ERROR, fn);
}
