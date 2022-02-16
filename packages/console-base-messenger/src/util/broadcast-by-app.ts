import {
  broadcast,
  broadcastPromise,
  subscribeOnce
} from '@alicloud/post-message';

import {
  EMessageBroadcastByApp,
  EMessageBroadcastByConsoleBase
} from '../enum';

import {
  slsBroadcastByApp
} from './sls';

/**
 * 为了避免控制台调用 forApp.xx 的时候，console-base 还没有 ready 而导致事件被忽略，需要增加一个全局变量
 * 之所以用全局变量是因为，一个页面上可能存在多份 `@alicloud/console-base-messenger`，其中一份是 console-base 自身安装的，
 * 另外的则可能是控制台应用或者是 widget 安装的。
 */
const CONSOLE_BASE_READY = '_console_base_ready_'; // 不要轻易改这个命名，因为它可能被页面上多份代码共用

let BROADCASTS_WHEN_NOT_READY: (() => void)[] | undefined;

if (!(window as unknown as Record<'_console_base_ready_', boolean>)[CONSOLE_BASE_READY]) {
  BROADCASTS_WHEN_NOT_READY = [];
  
  subscribeOnce(EMessageBroadcastByConsoleBase.READY, () => {
    (window as unknown as Record<'_console_base_ready_', boolean>)[CONSOLE_BASE_READY] = true;
    
    BROADCASTS_WHEN_NOT_READY!.forEach(v => v());
    BROADCASTS_WHEN_NOT_READY = undefined; // 清除后便不会往它里边 push 了
  });
}

/**
 * 应用发消息，需要记录日志
 */
export default function broadcastByApp<P = void>(type: EMessageBroadcastByApp | string, payload?: P): void {
  if (BROADCASTS_WHEN_NOT_READY) {
    slsBroadcastByApp(type, payload, true);
    
    BROADCASTS_WHEN_NOT_READY.push(() => broadcast<P>(type, payload));
  } else {
    slsBroadcastByApp(type, payload);
    
    broadcast<P>(type, payload);
  }
}

/**
 * 应用发 Promise 消息，需要记录日志
 */
export function broadcastPromiseByApp<T = void, P = void>(type: EMessageBroadcastByApp, payload: P): Promise<T> {
  if (BROADCASTS_WHEN_NOT_READY) {
    slsBroadcastByApp(type, payload, true);
    
    return new Promise<T>((resolve, reject) => {
      BROADCASTS_WHEN_NOT_READY?.push(() => broadcastPromise<T, P>(type, payload).then(resolve, reject));
    });
  }
  
  slsBroadcastByApp(type, payload);
  
  return broadcastPromise<T, P>(type, payload);
}
