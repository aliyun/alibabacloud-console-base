import {
  IRect
} from '../types';

import getViewport from './get-viewport';

/**
 * 解决 getBoundingClientRect 的以下问题：
 * 
 * 1. 值有小数点，且浏览器实现有差异（x y 和 left top）
 * 2. 原数据相对于视窗原点，若要相对于文档原点，可利用 absolute 参数，会加上 scrollTop/Left
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
 */
export default function getRect(el: Element, absolute?: boolean): IRect {
  const {
    x,
    y,
    top,
    left,
    bottom,
    right,
    width,
    height
  } = el.getBoundingClientRect();
  const viewport = absolute ? getViewport() : null;
  const scrollTop = viewport?.scrollTop || 0;
  const scrollLeft = viewport?.scrollLeft || 0;
  
  return {
    top: Math.round(y || top + scrollTop),
    left: Math.round(x || left + scrollLeft),
    bottom: Math.round(bottom + scrollTop),
    right: Math.round(right + scrollLeft),
    width: Math.round(width),
    height: Math.round(height)
  };
}
