import errorPrompt, {
  ErrorPromptArg,
  ErrorPromptArgExtra,
  ErrorDetailedInfo,
  convertToErrorDetailedInfo
} from '@alicloud/console-base-error-prompt';
import {
  forApp
} from '@alicloud/console-base-messenger';
import {
  getProxyErrorPrompt
} from '@alicloud/console-base-global';

import pruneForMessage from './prune-for-message';

interface IMessengerPayload {
  error: ErrorDetailedInfo;
  extra?: ErrorPromptArgExtra;
}

/**
 * 对 @alicloud/console-base-error-prompt 的调用转接为 @alicloud/console-base-messenger 的 forApp.promptError
 * forApp.promptError 的将由 forConsoleBase.onPromptError 最终进行处理
 */
export default async function proxy(o?: ErrorPromptArg, extra?: ErrorPromptArgExtra): Promise<void> {
  const errorInfo: ErrorDetailedInfo = convertToErrorDetailedInfo(o);
  
  if (!errorInfo) {
    return;
  }
  
  if (!getProxyErrorPrompt()) {
    return errorPrompt(errorInfo, extra);
  }
  
  try { // postMessage 可能抛错
    return forApp.promptError<IMessengerPayload>({
      error: pruneForMessage<ErrorDetailedInfo>(errorInfo),
      extra: pruneForMessage<ErrorPromptArgExtra>(extra)
    });
  } catch (err) { // 抛错表明 message 的 payload 中含有无法序列化的数据
    return errorPrompt(errorInfo, extra);
  }
}
