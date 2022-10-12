/**
 * 有绝对定位布局的场景，需要业务监听 resize 进行布局刷新
 */
export default function fireWindowResize(): void {
  try {
    window.dispatchEvent(new CustomEvent('resize'));
  } catch (err) {
    // ignore
  }
}