import {
  IViewport
} from '../types';

/**
 * 获取当前 viewport 信息
 * 
 * https://developer.mozilla.org/en-US/docs/Glossary/Viewport
 */
export default function getViewport(): IViewport {
  let scrollTop;
  let scrollLeft;
  let width;
  let height;
  
  try {
    ({
      pageTop: scrollTop,
      pageLeft: scrollLeft,
      width,
      height
    } = window.visualViewport);
  } catch (err) {
    width = window.innerWidth || document.documentElement.clientWidth;
    height = window.innerHeight || document.documentElement.clientHeight;
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  }
  
  return {
    width: Math.round(width) || 0,
    height: Math.round(height) || 0,
    scrollTop: Math.round(scrollTop) || 0,
    scrollLeft: Math.round(scrollLeft) || 0
  };
}