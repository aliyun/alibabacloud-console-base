import {
  IHijacker
} from '../types';
import {
  DATA_CLICK_HIJACK_IGNORE
} from '../const';

/**
 * 处理一个 hijacker 对象
 */
export default function handleClickHijacker<T>(el: HTMLElement, e: MouseEvent, hijacker: IHijacker<T>): boolean {
  if (el.hasAttribute(DATA_CLICK_HIJACK_IGNORE)) {
    return false;
  }
  
  const {
    condition,
    callback,
    shouldPreventDefault,
    shouldStopPropagation
  } = hijacker;
  const result = condition(el);
  
  if (!result) {
    return false;
  }
  
  if (callback) {
    callback(el, result);
  }
  
  if (typeof shouldPreventDefault === 'boolean' ? shouldPreventDefault : el.tagName === 'A') { // 不传 shouldPreventDefault，则默认仅对链接阻止默认行为
    e.preventDefault();
  }
  
  if (shouldStopPropagation) { // 默认不阻止冒泡
    e.stopPropagation();
  }
  
  return true;
}
