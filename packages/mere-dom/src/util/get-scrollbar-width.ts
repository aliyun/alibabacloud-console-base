import getScrollbarWidthOfSystem from './get-scrollbar-width-of-system';

/**
 * 获取元素上的滚轴宽度，请不要用它来获取 body 上的滚轴宽度，因为很多应用会模拟的方式去掉 body 上的滚轴
 */
export default function getScrollbarWidth(el: HTMLElement): number {
  return el.scrollHeight > el.offsetHeight ? getScrollbarWidthOfSystem() : 0;
}