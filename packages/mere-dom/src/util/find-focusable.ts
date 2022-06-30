import _filter from 'lodash/filter';

import isFocusable from './is-focusable';
import isInputControl from './is-input-control';

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
 * 获取容器内所有可以获取焦点的子节点
 */
export default function findFocusable(container?: HTMLElement, doSort?: boolean): HTMLElement[] {
  const arr = container ? _filter(container.querySelectorAll<HTMLElement>('*'), isFocusable) : [];
  
  return doSort ? arr.sort(autoSort) : arr;
}
