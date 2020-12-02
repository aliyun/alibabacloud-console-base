"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsubscribe = unsubscribe;
exports.subscribe = subscribe;
exports.unsubscribeOnce = unsubscribeOnce;
exports.subscribeOnce = subscribeOnce;
exports.broadcast = broadcast;
exports.broadcastInParent = broadcastInParent;
var MAP_RECEIVERS = {}; // 某一 type 对应的所有回调

var MAP_RECEIVERS_ONCE = {}; // 某一 type 对应的所有单次回调

if (window.addEventListener) {
  // 虽然支持的很好了，但..也谨慎一下吧
  // 全局唯一的 message receiver，所以就无所谓解不解绑了
  window.addEventListener('message', function (e) {
    var _e$data = e.data,
        type = _e$data.type,
        payload = _e$data.payload;
    var receivers = MAP_RECEIVERS[type] || [];
    var receiversOnce = MAP_RECEIVERS_ONCE[type] || [];
    delete MAP_RECEIVERS_ONCE[type];
    receivers.forEach(function (v) {
      return v(payload);
    });
    receiversOnce.forEach(function (v) {
      return v(payload);
    });
  });
}
/**
 * 向特定 receivers 列表推入新的回调
 */


function pushToReceivers(receivers, type, fn) {
  var arr = receivers[type];

  if (!arr) {
    arr = [];
    receivers[type] = arr;
  }

  if (arr.indexOf(fn) < 0) {
    // 避免多次
    arr.push(fn);
  }
}
/**
 * 从特定 receivers 列表移除对应回调
 */


function pullFromReceivers(receivers, type, fn) {
  var arr = receivers[type];

  if (!arr) {
    return;
  }

  var index = arr.indexOf(fn);

  if (index >= 0) {
    arr.splice(index, 1);
  }

  if (!arr.length) {
    delete receivers[type];
  }
}
/**
 * 反注册对 type 的某一回调，一般推荐用 subscribe 的返回
 */


function unsubscribe(type, fn) {
  pullFromReceivers(MAP_RECEIVERS, type, fn);
}
/**
 * 注册回调，返回可用于反注册的方法
 */


function subscribe(type, fn) {
  pushToReceivers(MAP_RECEIVERS, type, fn);
  return function () {
    return unsubscribe(type, fn);
  };
}
/**
 * 反注册对 type 的某一单次回调（有必要的场景）
 */


function unsubscribeOnce(type, fn) {
  pullFromReceivers(MAP_RECEIVERS_ONCE, type, fn);
}
/**
 * 注册单次回调，运行一次后将自动移除
 */


function subscribeOnce(type, fn) {
  pushToReceivers(MAP_RECEIVERS_ONCE, type, fn);
  return function () {
    return unsubscribeOnce(type, fn);
  };
}
/**
 * 广播消息，当传入的对象 payload 不是 plain 对象的时候（如 Error、function、DOMElement、JSX 等），这里会报错
 * 「Uncaught DOMException: The object could not be cloned.」或 「DataCloneError: The object could not be cloned.」
 * 这个错误不能吃掉，因为使用者需要同步地知道调用失败了
 */


function broadcast(type, payload) {
  var targetOrigin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.location.href;

  // postMessage 的兼容性已经很好了，见 https://caniuse.com/#search=postMessage
  // 不过还是要稍稍谨慎一些
  if (!window.postMessage) {
    return;
  }

  window.postMessage({
    type: type,
    payload: payload
  }, targetOrigin);
}
/**
 * 去父窗口进行广播
 */


function broadcastInParent(type, payload) {
  var targetOrigin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '*';

  if (window.parent === window || !window.parent.postMessage) {
    return;
  }

  window.parent.postMessage({
    type: type,
    payload: payload
  }, targetOrigin);
}