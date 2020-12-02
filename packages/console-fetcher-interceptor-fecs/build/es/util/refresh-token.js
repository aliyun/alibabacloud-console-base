import CONF_ENV from '@alicloud/console-base-conf-env';
import fetch from '@alicloud/fetcher-fetch';
import cookieSetToken from './cookie-set-token';
import cookieGetToken from './cookie-get-token';
var REFRESH_QUEUE = [];
/**
 * 真正执行请求刷新 FECS 的 token
 */

function refresh() {
  return fetch("//".concat(CONF_ENV.FECS_HOST, "/data/heartbeat"), {
    credentials: 'include' // 必需，否则刷新出来的 token 无效

  }).then(function (response) {
    return response.json();
  }).then(function (result) {
    var newToken = result.data; // 一般调用此接口之后，后端会把 cookie 种上（仅对 .aliyun.com 等），
    // 但如果当前使用者不在这些域下，这个 cookie 服务端不会种，需要人肉种一个

    if (cookieGetToken() !== newToken) {
      cookieSetToken(newToken);
    }
  });
}

function executeQueue(err) {
  while (REFRESH_QUEUE.length) {
    var queueItem = REFRESH_QUEUE.shift();

    if (err) {
      queueItem && queueItem.reject && queueItem.reject(err);
    } else {
      queueItem && queueItem.resolve && queueItem.resolve();
    }
  }
}
/**
 * export 它，万一有的场景，使用者需要手工调用一下，一般来说不需要
 */


export default function refreshToken() {
  var queueItem = {};
  REFRESH_QUEUE.push(queueItem); // 只有当第一个请求到达时进行真正的刷新

  if (REFRESH_QUEUE.length === 1) {
    refresh().then(function () {
      return executeQueue();
    }, function (err) {
      return executeQueue(err);
    });
  }

  return new Promise(function (resolve, reject) {
    queueItem.resolve = resolve;
    queueItem.reject = reject;
  });
}