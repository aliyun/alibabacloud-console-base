import {
  GLOBAL_CLICK_HIJACKERS
} from '../const';

import handleClickHijacker from './handle-click-hijacker';

/**
 * 处理全局劫持
 */
export default function handleClickGlobal(el: HTMLElement, e: MouseEvent): boolean {
  let hijacked = false;
  
  GLOBAL_CLICK_HIJACKERS.forEach(v => {
    if (handleClickHijacker(el, e, v)) {
      hijacked = true;
    }
  });
  
  return hijacked;
}
