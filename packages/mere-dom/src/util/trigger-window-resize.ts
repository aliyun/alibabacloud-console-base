/**
 * 有绝对定位布局的场景，需要业务监听 resize 进行布局刷新
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
 */
export default function triggerWindowResize(): void {
  try { // InvalidStateError DomException
    window.dispatchEvent(new CustomEvent('resize'));
  } catch (err) {
    // ignore
  }
}
