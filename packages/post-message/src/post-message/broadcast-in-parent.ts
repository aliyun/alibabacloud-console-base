/**
 * 去父窗口进行广播
 */
export default function broadcastInParent<P = void>(type: string, payload?: P, targetOrigin = '*'): void {
  if (window.parent === window || !window.parent.postMessage) {
    return;
  }
  
  window.parent.postMessage({
    type,
    payload
  }, targetOrigin);
}
