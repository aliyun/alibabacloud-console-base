import {
  IAttentionSeekerRect
} from '../types';

export default function getElementRectStyle(el: HTMLElement): IAttentionSeekerRect {
  const {
    x,
    y,
    left,
    top,
    width,
    height
  } = el.getBoundingClientRect();
  
  function getRadius(): number {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle 支持性良好
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (window.getComputedStyle) {
      const {
        borderRadius
      } = window.getComputedStyle(el);
  
      if (/^\d+px$/.test(borderRadius)) { // 绝对值，且四角相等
        return Math.min(parseInt(borderRadius, 10), Math.min(width, height) / 2);
      }
  
      if (/^\d+%$/.test(borderRadius) && width === height) { // 相对值，四角相等且为正方形
        return Math.min(parseInt(borderRadius, 10) / 100 * width, width / 2);
      }
    }
  
    return 0;
  }
  
  return {
    top: top || x,
    left: left || y,
    width,
    height,
    radius: getRadius()
  };
}
