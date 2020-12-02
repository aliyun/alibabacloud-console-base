import { broadcast, broadcastPromise, subscribeOnce } from '@alicloud/post-message';
import { EMessageBroadcastByConsoleBase } from '../const';
import { slsBroadcastByApp } from '../util/sls';
/**
 * 为了避免控制台调用 forApp.xx 的时候，console-base 还没有 ready 而导致事件被忽略，需要增加一个全局变量
 * 之所以用全局变量是因为，一个页面上可能存在多份 `@alicloud/console-base-messenger`，其中一份是 console-base 自身安装的，
 * 另外的则可能是控制台应用或者是 widget 安装的。
 */

var CONSOLE_BASE_READY = '_console_base_ready_'; // 不要轻易改这个命名，因为它可能被页面上多份代码共用

var BROADCASTS_WHEN_NOT_READY;

if (!window[CONSOLE_BASE_READY]) {
  BROADCASTS_WHEN_NOT_READY = [];
  subscribeOnce(EMessageBroadcastByConsoleBase.READY, function () {
    window[CONSOLE_BASE_READY] = true;
    BROADCASTS_WHEN_NOT_READY.forEach(function (v) {
      return v();
    });
    BROADCASTS_WHEN_NOT_READY = undefined; // 清除后便不会往它里边 push 了
  });
}
/**
 * 应用发消息，需要记录日志
 */


export function broadcastByApp(type, payload) {
  if (BROADCASTS_WHEN_NOT_READY) {
    slsBroadcastByApp(type, payload, true);
    BROADCASTS_WHEN_NOT_READY.push(function () {
      return broadcast(type, payload);
    });
  } else {
    slsBroadcastByApp(type, payload);
    broadcast(type, payload);
  }
}
/**
 * 应用发 Promise 消息，需要记录日志
 */

export function broadcastPromiseByApp(type, payload) {
  if (BROADCASTS_WHEN_NOT_READY) {
    slsBroadcastByApp(type, payload, true);
    return new Promise(function (resolve, reject) {
      BROADCASTS_WHEN_NOT_READY.push(function () {
        return broadcastPromise(type, payload).then(resolve, reject);
      });
    });
  }

  slsBroadcastByApp(type, payload);
  return broadcastPromise(type, payload);
}