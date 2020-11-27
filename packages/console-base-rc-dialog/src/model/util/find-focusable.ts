import _filter from 'lodash/filter';

/**
 * 元素是否「不」可见（本身或祖先元素）
 */
function isInvisible(el: HTMLElement | null): boolean {
  while (el) {
    if (el === document.body || el === document.documentElement) {
      break;
    }
    
    if (el.style.display === 'none' || el.style.visibility === 'hidden' || el.style.opacity === '0' || el.getAttribute('type') === 'hidden') {
      return true;
    }
    
    el = el.parentElement; // eslint-disable-line no-param-reassign
  }
  
  return false;
}

/**
 * 是否操作元素（按钮、链接）- 其实 input type="button|submit|reset" 也算，但不推荐那么玩，是按钮就应该是 button
 */
function isActionControl(el: HTMLElement): boolean {
  return ['A', 'BUTTON'].indexOf(el.tagName) >= 0;
}

/**
 * 是否表单输入元素
 */
function isInputControl(el: HTMLElement): boolean {
  return ['INPUT', 'TEXTAREA', 'SELECT'].indexOf(el.tagName) >= 0;
}

function autoSort(v1: HTMLElement, v2: HTMLElement): number { // 输入框优先排序
  const itIsInput1 = isInputControl(v1);
  const itIsInput2 = isInputControl(v2);
  
  if (itIsInput1 === itIsInput2) {
    return 0;
  }
  
  if (itIsInput1) {
    return -1;
  }
  
  return 1;
}

/**
 * 元素是否可以获取焦点
 */
function canFocus(el: HTMLElement): boolean {
  if (isInvisible(el)) {
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

/**
 * 获取容器内所有可以获取焦点的子节点
 */
export default function findFocusable(container: Element, doSort?: boolean): HTMLElement[] {
  const arr = container ? _filter(container.querySelectorAll<HTMLElement>('*'), canFocus) : [];
  
  return doSort ? arr.sort(autoSort) : arr;
}
