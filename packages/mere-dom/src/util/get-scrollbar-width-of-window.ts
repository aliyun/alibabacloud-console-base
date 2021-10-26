/**
 * 获取 window 上的滚轴宽度（可以认为获取 body 的滚轴宽度）
 */
export default function getScrollbarWidthOfWindow(): number {
  return window.innerWidth - document.documentElement.clientWidth;
}