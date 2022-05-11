import isVisible from './is-visible';
import isActionControl from './is-action-control';
import isInputControl from './is-input-control';

/**
 * 元素是否可以获取焦点
 */
export default function isFocusable(el: HTMLElement): boolean {
  if (!isVisible(el)) {
    return false;
  }
  
  if (el.hasAttribute('disabled')) {
    return false;
  }
  
  if (isActionControl(el) || isInputControl(el)) {
    return true;
  }
  
  const tabIndex = el.getAttribute('tabindex');
  
  return tabIndex ? parseInt(tabIndex, 10) > -1 : false; // 不要用 Number() 因为很多情况 Number 会出 0
}
