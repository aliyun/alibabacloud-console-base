import CONF_ENV from '@alicloud/console-base-conf-env';
import fetch from '@alicloud/fetcher-fetch';

import cookieSetToken from './cookie-set-token';
import cookieGetToken from './cookie-get-token';

interface IRefreshTokenResult {
  data: string;
}

interface IRefreshTokenQueueItem {
  resolve?(): void;
  reject?(err: Error): void;
}

const REFRESH_QUEUE: IRefreshTokenQueueItem[] = [];

/**
 * 真正执行请求刷新 FECS 的 token
 */
function refresh(): Promise<void> {
  return fetch(`${CONF_ENV.FECS_URL_BASE}/data/heartbeat`, {
    credentials: 'include' // 必需，否则刷新出来的 token 无效
  }).then(response => response.json()).then((result: IRefreshTokenResult) => {
    const newToken = result.data;
    
    // 一般调用此接口之后，后端会把 cookie 种上（仅对 .aliyun.com 等），
    // 但如果当前使用者不在这些域下，这个 cookie 服务端不会种，需要人肉种一个
    if (cookieGetToken() !== newToken) {
      cookieSetToken(newToken);
    }
  });
}

function executeQueue(err?: Error): void {
  while (REFRESH_QUEUE.length) {
    const queueItem = REFRESH_QUEUE.shift();
    
    if (err) {
      queueItem?.reject?.(err);
    } else {
      queueItem?.resolve?.();
    }
  }
}

/**
 * export 它，万一有的场景，使用者需要手工调用一下，一般来说不需要
 */
export default function refreshToken(): Promise<void> {
  const queueItem: IRefreshTokenQueueItem = {};
  
  REFRESH_QUEUE.push(queueItem);
  
  // 只有当第一个请求到达时进行真正的刷新
  if (REFRESH_QUEUE.length === 1) {
    refresh().then(() => executeQueue(), err => executeQueue(err));
  }
  
  return new Promise((resolve, reject) => {
    queueItem.resolve = resolve;
    queueItem.reject = reject;
  });
}
