import {
  win
} from './_the-message';

/**
 * 去父窗口进行广播
 */
export default function broadcastInParent<P = void>(type: string, payload?: P, targetOrigin = '*'): void {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (win.parent === win || !win.parent.postMessage) {
    return;
  }
  
  win.parent.postMessage({
    type,
    payload
  }, targetOrigin);
}
