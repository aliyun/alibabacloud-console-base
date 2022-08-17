import errorPrompt, {
  ErrorPromptArg,
  ErrorPromptExtra,
  ErrorPromptExtraFn,
  ErrorDetailedInfo,
  convertToErrorDetailedInfo
} from '@alicloud/console-base-error-prompt';
import {
  promptError
} from '@alicloud/console-base-messenger-error-prompt';
import {
  getProxyErrorPrompt
} from '@alicloud/console-base-global';

import pruneForMessage from './prune-for-message';

interface IMessengerPayload {
  error: ErrorDetailedInfo;
  extra?: ErrorPromptExtra;
  detailedMode?: boolean;
}

/**
 * 对 @alicloud/console-base-error-prompt 的调用转接为 @alicloud/console-base-messenger 的 promptError
 * 并由 onPromptError 最终进行处理
 */
export default async function proxy(o?: ErrorPromptArg, extra?: ErrorPromptExtra | ErrorPromptExtraFn, detailedMode?: boolean): Promise<void> {
  if (!getProxyErrorPrompt()) {
    return errorPrompt(o, extra, detailedMode);
  }
  
  const errorInfo: ErrorDetailedInfo | null = o ? convertToErrorDetailedInfo(o) : null;
  
  if (!errorInfo) {
    return;
  }
  
  try { // postMessage 可能抛错
    return promptError<IMessengerPayload>({
      error: pruneForMessage<ErrorDetailedInfo>(errorInfo) as Error, // FIXME
      extra: pruneForMessage<ErrorPromptExtra>(typeof extra === 'function' ? extra(errorInfo) || {} : extra),
      detailedMode
    });
  } catch (err) { // 抛错表明 message 的 payload 中含有无法序列化的数据
    return errorPrompt(errorInfo, extra, detailedMode);
  }
}
