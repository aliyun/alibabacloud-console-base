import {
  findFocusable
} from '@alicloud/mere-dom';

import {
  EDialogFocusHow
} from '../enum';

/**
 * 获取下一个要 focus 的元素
 */
export default function getNextElementToFocus(domDialog: HTMLDivElement, domDialogContent: HTMLDivElement, how: EDialogFocusHow): HTMLElement {
  let focusableElements: HTMLElement[];
  
  if (how === EDialogFocusHow.AUTO) {
    // AUTO 的情况下，需要优先 focus 内容区（且输入优先）
    focusableElements = findFocusable(domDialogContent, true);
    
    if (focusableElements.length) {
      return focusableElements[0]!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
    }
    
    // 如果内容区没有可 focus 的元素，再获取整体的
    focusableElements = findFocusable(domDialog);
    
    return focusableElements[0] || domDialog; // 如果整体也没有，那只好 dialog 本身了
  }
  
  focusableElements = findFocusable(domDialog);
  
  if (!focusableElements.length) {
    return domDialog;
  }
  
  const maxIndex = focusableElements.length - 1;
  const focusingPrev = how === EDialogFocusHow.PREV;
  let index = focusableElements.indexOf(document.activeElement as HTMLElement) + (focusingPrev ? -1 : 1); // activeElement Chrome 2+, Firefox 3.0+ IE4 + Opera 9.6+ Safari 4.0+
  
  if (index < 0) {
    index = focusingPrev ? maxIndex : 0;
  }
  
  if (index > maxIndex) {
    index = 0;
  }
  
  return focusableElements[index]!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
}
