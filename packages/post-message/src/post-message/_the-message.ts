import {
  getWindow
} from '@alicloud/sandbox-escape';

import {
  TReceivers,
  IAnyCallback
} from '../types';

const win = getWindow();

const MAP_RECEIVERS: TReceivers = {}; // 某一 type 对应的所有回调
const MAP_RECEIVERS_ONCE: TReceivers = {}; // 某一 type 对应的所有单次回调

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
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
  MAP_RECEIVERS_ONCE,
  win
};
