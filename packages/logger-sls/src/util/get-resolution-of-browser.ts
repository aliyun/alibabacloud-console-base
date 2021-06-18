/**
 * 获取浏览器分辨率，跟浏览器的缩放状态有关，不稳定
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
 */
export default function getResolutionOfBrowser(): string {
  try {
    return `${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`;
  } catch (err) {
    return '';
  }
}
