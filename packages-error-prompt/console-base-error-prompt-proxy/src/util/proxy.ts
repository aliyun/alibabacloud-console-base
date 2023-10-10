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
import {
  logToRamSls, SLS_TOPIC_FOR_RAM
} from '@alicloud/console-base-log-sls';

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
  let countOfCheckConsoleBaseLoadingByErrorPromptProxy = 0;

  const callErrorPromptByNotProxy = (args?: ErrorPromptArg) => {
    logToRamSls(SLS_TOPIC_FOR_RAM, {
      eventId: 'error-prompt-proxy.raise-prompt',
      c1: 'UnmanagedErrorPrompt'
    });

    return errorPrompt(args, extra, detailedMode);
  };

  const callErrorPromptByProxy = (args?: ErrorDetailedInfo) => {
    if (!args) { return; }

    try {
      // postMessage 可能抛错
      // FIXME: promptError 返回 Promise 这里其实捕获不到什么
      return promptError<IMessengerPayload>({
        error: pruneForMessage<ErrorDetailedInfo>(args),
        extra: extra ? pruneForMessage<ErrorPromptExtra>(typeof extra === 'function' ? extra(args) || {} : extra) : undefined,
        detailedMode
      });
    } catch (err) {
      // 抛错表明 message 的 payload 中含有无法序列化的数据
      return callErrorPromptByNotProxy(args);
    }
  };
  
  const errorInfo: ErrorDetailedInfo | null = o ? convertToErrorDetailedInfo(o) : null;
  
  if (!errorInfo) {
    callErrorPromptByNotProxy(o);

    return;
  }

  // 特殊处理：权限错误要求尽可能等待 ConsoleBase 加载完成后触发
  if (errorInfo.detailsAuth?.action || errorInfo.detailsAuth?.diagnosisInfo) {
    const interval = setInterval(() => {
      const proxyLoaded = getProxyErrorPrompt();

      // 等待 Proxy 加载至多 3 秒（500 * 6）
      if (!proxyLoaded && countOfCheckConsoleBaseLoadingByErrorPromptProxy < 6) {
        countOfCheckConsoleBaseLoadingByErrorPromptProxy += 1;

        return;
      }

      clearInterval(interval);

      if (proxyLoaded) {
        callErrorPromptByProxy(errorInfo);
      } else {
        callErrorPromptByNotProxy(errorInfo);
      }

      // 上报 error-prompt-proxy 包触发的权限错误到 RAM 日志库
      logToRamSls(SLS_TOPIC_FOR_RAM, {
        eventId: 'error-prompt-proxy.raise-prompt',
        c1: errorInfo.code,
        c2: errorInfo.detailsAuth?.action,
        c3: errorInfo.detailsAuth?.resource,
        c4: errorInfo.detailsAuth?.type,
        c5: errorInfo.detailsAuth?.policyType,
        c6: errorInfo.detailsAuth?.diagnosisInfo?.length || 0
      });
    }, 500);

    return;
  }

  if (getProxyErrorPrompt()) {
    callErrorPromptByProxy(errorInfo);
  } else {
    callErrorPromptByNotProxy(errorInfo);
  }
}