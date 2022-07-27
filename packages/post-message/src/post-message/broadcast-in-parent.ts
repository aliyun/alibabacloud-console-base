import {
  buildMessageData
} from '../util';

import {
  win
} from './_the-message';

function broadcastInParent(type: string): void;
function broadcastInParent<P>(type: string, payload: P): void;

/**
 * 去父窗口进行广播
 */
function broadcastInParent<P>(type: string, payload?: P, targetOrigin = '*'): void {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (win.parent === win || !win.parent.postMessage) {
    return;
  }
  
  win.parent.postMessage(buildMessageData(type, payload), targetOrigin);
}

export default broadcastInParent;