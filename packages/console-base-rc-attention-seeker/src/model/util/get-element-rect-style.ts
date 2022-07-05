import {
  getRect,
  getComputedStyle
} from '@alicloud/mere-dom';

import {
  IAttentionRect
} from '../types';

export default function getElementRectStyle(el: HTMLElement): IAttentionRect {
  const {
    top,
    left,
    width,
    height
  } = getRect(el);
  
  function getRadius(): number {
    const {
      borderRadius
    } = getComputedStyle(el);
    
    if (/^\d+px$/.test(borderRadius)) { // 绝对值，且四角相等
      return Math.min(parseInt(borderRadius, 10), Math.min(width, height) / 2);
    }
    
    if (/^\d+%$/.test(borderRadius) && width === height) { // 相对值，四角相等且为正方形
      return Math.min(parseInt(borderRadius, 10) / 100 * width, width / 2);
    }
    
    return 0;
  }
  
  return {
    top,
    left,
    width,
    height,
    radius: getRadius()
  };
}
