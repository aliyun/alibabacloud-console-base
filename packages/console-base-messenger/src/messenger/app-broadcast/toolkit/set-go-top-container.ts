import {
  EToolkitTypeShort
} from '../../../const';
import {
  composeToolkitType,
  broadcastByApp
} from '../../../util';

const ATTR_NAME = 'data-console-base-toolkit-go-top';
let index = 0;

function getContainerSelector(container: Window | HTMLElement | null): string {
  if (!container) {
    return '';
  }
  
  if (container === window || container === document.documentElement || container === document.body) {
    return 'window';
  }
  
  const el: HTMLElement = container as HTMLElement;
  const tag = el.tagName?.toLowerCase();
  
  if (!tag) {
    return '';
  }
  
  let attrValue = el.getAttribute(ATTR_NAME);
  
  if (!attrValue) {
    index += 1;
    
    attrValue = `container${index}`; // 不能只用数字，否则 document.querySelector 会报错「not a valid selector」
    el.setAttribute(ATTR_NAME, attrValue);
  }
  
  return `${tag}[${ATTR_NAME}=${attrValue}]`;
}

/**
 * 设置工具组的「返回顶部」容器
 */
export default function setGoTopContainer(container: Window | HTMLElement | null): void {
  broadcastByApp<string>(composeToolkitType(EToolkitTypeShort.SET_GO_TOP_CONTAINER), getContainerSelector(container));
}
