/**
 * 获取屏幕分辨率，跟设备有关，相对稳定
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Screen
 */
export default function getResolutionOfScreen(): string {
  try {
    return `${window.screen.width}x${window.screen.height}`;
  } catch (err) {
    return '';
  }
}
