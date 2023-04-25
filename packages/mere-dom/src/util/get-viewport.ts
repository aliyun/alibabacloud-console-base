import {
  IViewport
} from '../types';

/**
 * 获取当前 viewport 信息
 * 
 * https://developer.mozilla.org/en-US/docs/Glossary/Viewport
 * https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight
 */
export default function getViewport(): IViewport {
  let scrollTop;
  let scrollLeft;
  let width;
  let height;
  
  if (window.visualViewport) {
    ({
      pageTop: scrollTop,
      pageLeft: scrollLeft,
      width, // 不包含滚轴宽度
      height
    } = window.visualViewport);
  } else {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
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
