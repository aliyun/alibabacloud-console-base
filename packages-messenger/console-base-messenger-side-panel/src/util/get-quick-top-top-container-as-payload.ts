import {
  TMessengerSidePanelQuickTopContainer
} from '../types';
import {
  DATA_KEY_QUICK_TOP
} from '../const';

let index = 0;

export default function getQuickTopTopContainerAsPayload(container: TMessengerSidePanelQuickTopContainer): string | null {
  if (!container) {
    return null;
  }
  
  if (container === window || container === document.documentElement || container === document.body) { // body 的滚动性有问题，回退到 window
    return 'window';
  }
  
  const el: HTMLElement = container as HTMLElement;
  const tag = el.tagName;
  
  if (!tag) {
    return '';
  }
  
  let attrValue = el.getAttribute(DATA_KEY_QUICK_TOP);
  
  if (!attrValue) {
    index += 1;
    
    attrValue = `container${index}`; // 不能只用数字，否则 document.querySelector 会报错「not a valid selector」
    el.setAttribute(DATA_KEY_QUICK_TOP, attrValue);
  }
  
  return `${tag.toLowerCase()}[${DATA_KEY_QUICK_TOP}=${attrValue}]`;
}
