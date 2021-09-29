import {
  TReceivers,
  IAnyCallback
} from '../types';

const MAP_RECEIVERS: TReceivers = {}; // 某一 type 对应的所有回调
const MAP_RECEIVERS_ONCE: TReceivers = {}; // 某一 type 对应的所有单次回调

// 避免沙箱模式下 window 被 with 劫持
function getWindow(): Window {
  /**
   * 需要 try-catch，因为可能会被 CSP 拦截，比如这段代码放在 github 上就会报错如下：
   * 
   * 「Content Security Policy: The page’s settings blocked the loading of a resource at eval (“script-src”).」
   */
  try {
    return (new Function('', 'return window'))() as Window; // eslint-disable-line no-new-func
  } catch (e) {
    return window;
  }
}

const win = getWindow();

if (win.addEventListener) { // 虽然支持的很好了，但..也谨慎一下吧
  // 全局唯一的 message receiver，所以就无所谓解不解绑了
  win.addEventListener('message', (e: MessageEvent): void => {
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
export function pushToReceivers(receivers: TReceivers, type: string, fn: IAnyCallback): void {
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
export function pullFromReceivers(receivers: TReceivers, type: string, fn: IAnyCallback): void {
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

export {
  MAP_RECEIVERS,
  MAP_RECEIVERS_ONCE
};
