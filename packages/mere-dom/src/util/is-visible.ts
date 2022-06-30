function isElementInvisible(el: HTMLElement): boolean {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle 支持性良好
  const {
    display,
    visibility,
    opacity,
    width,
    height
  } = window.getComputedStyle ? window.getComputedStyle(el) : el.style; // eslint-disable-line @typescript-eslint/no-unnecessary-condition
  
  return display === 'none' || visibility === 'hidden' || opacity === '0' || width === '0px' || height === '0px';
}

/**
 * 元素是否「不」可见（本身或祖先元素），但无法检测元素被遮盖的场景...
 */
export default function isVisible(el: HTMLElement | null): boolean {
  while (el) {
    if (el === document.body || el === document.documentElement) {
      break;
    }
    
    if (el.getAttribute('type') === 'hidden' || isElementInvisible(el)) {
      return false;
    }
    
    el = el.parentElement; // eslint-disable-line no-param-reassign
  }
  
  return true;
}