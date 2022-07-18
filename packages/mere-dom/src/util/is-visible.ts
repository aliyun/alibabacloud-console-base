import getComputedStyle from './get-computed-style';

/**
 * 不对 width 和 height 进行判断，因为子元素全部会 fixed 或者 absolute 的话，父元素极有可能没有大小
 */
function isElementInvisible(el: HTMLElement): boolean {
  const {
    display,
    visibility,
    opacity
  } = getComputedStyle(el);
  
  return display === 'none' || visibility === 'hidden' || opacity === '0';
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