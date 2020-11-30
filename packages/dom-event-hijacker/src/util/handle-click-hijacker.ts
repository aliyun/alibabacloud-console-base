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
    noPreventDefault,
    noStopPropagation
  } = hijacker;
  const result = condition(el);
  
  if (!result) {
    return false;
  }
  
  if (callback) {
    callback(el, result);
  }
  
  if (!noPreventDefault) {
    e.preventDefault();
  }
  
  if (!noStopPropagation) {
    e.stopPropagation();
  }
  
  return true;
}
