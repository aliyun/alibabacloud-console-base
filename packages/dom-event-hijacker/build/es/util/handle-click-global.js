import { GLOBAL_CLICK_HIJACKERS } from '../const';
import handleClickHijacker from './handle-click-hijacker';
/**
 * 处理全局劫持
 */

export default function handleClickGlobal(el, e) {
  var hijacked = false;
  GLOBAL_CLICK_HIJACKERS.forEach(function (v) {
    if (handleClickHijacker(el, e, v)) {
      hijacked = true;
    }
  });
  return hijacked;
}