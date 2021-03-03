type TAnyCallback = (...args: any[]) => void;
type TReceivers = Record<string, TAnyCallback[]>;

const MAP_RECEIVERS: TReceivers = {}; // 某一 type 对应的所有回调
const MAP_RECEIVERS_ONCE: TReceivers = {}; // 某一 type 对应的所有单次回调

if (window.addEventListener) { // 虽然支持的很好了，但..也谨慎一下吧
  // 全局唯一的 message receiver，所以就无所谓解不解绑了
  window.addEventListener('message', (e: MessageEvent): void => {
    const {
      data: {
        type,
        payload
      }
    } = e;
    const receivers = MAP_RECEIVERS[type] || [];
    const receiversOnce = MAP_RECEIVERS_ONCE[type] || [];
    
    delete MAP_RECEIVERS_ONCE[type];
    
    receivers.forEach(v => v(payload));
    receiversOnce.forEach(v => v(payload));
  });
}

/**
 * 向特定 receivers 列表推入新的回调
 */
function pushToReceivers(receivers: TReceivers, type: string, fn: TAnyCallback): void {
  let arr = receivers[type];
  
  if (!arr) {
    arr = [];
    receivers[type] = arr;
  }
  
  if (arr.indexOf(fn) < 0) { // 避免多次
    arr.push(fn);
  }
}

/**
 * 从特定 receivers 列表移除对应回调
 */
function pullFromReceivers(receivers: TReceivers, type: string, fn: TAnyCallback): void {
  const arr = receivers[type];
  
  if (!arr) {
    return;
  }
  
  const index = arr.indexOf(fn);
  
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
export function unsubscribe(type: string, fn: TAnyCallback): void {
  pullFromReceivers(MAP_RECEIVERS, type, fn);
}

/**
 * 注册回调，返回可用于反注册的方法
 */
export function subscribe<P = void>(type: string, fn: (payload?: P) => void): () => void {
  pushToReceivers(MAP_RECEIVERS, type, fn);
  
  return (): void => unsubscribe(type, fn);
}

/**
 * 反注册对 type 的某一单次回调（有必要的场景）
 */
export function unsubscribeOnce(type: string, fn: TAnyCallback): void {
  pullFromReceivers(MAP_RECEIVERS_ONCE, type, fn);
}

/**
 * 注册单次回调，运行一次后将自动移除
 */
export function subscribeOnce<P = void>(type: string, fn: (payload?: P) => void): () => void {
  pushToReceivers(MAP_RECEIVERS_ONCE, type, fn);
  
  return () => unsubscribeOnce(type, fn);
}

/**
 * 广播消息，当传入的对象 payload 不是 plain 对象的时候（如 Error、function、DOMElement、JSX 等），这里会报错
 * 「Uncaught DOMException: The object could not be cloned.」或 「DataCloneError: The object could not be cloned.」
 * 这个错误不能吃掉，因为使用者需要同步地知道调用失败了
 */
export function broadcast<P = void>(type: string, payload?: P, targetOrigin: string = window.location.href): void {
  // postMessage 的兼容性已经很好了，见 https://caniuse.com/#search=postMessage
  // 不过还是要稍稍谨慎一些
  if (!window.postMessage) {
    return;
  }
  
  window.postMessage({
    type,
    payload
  }, targetOrigin);
}

/**
 * 去父窗口进行广播
 */
export function broadcastInParent<P = void>(type: string, payload?: P, targetOrigin = '*'): void {
  if (window.parent === window || !window.parent.postMessage) {
    return;
  }
  
  window.parent.postMessage({
    type,
    payload
  }, targetOrigin);
}
