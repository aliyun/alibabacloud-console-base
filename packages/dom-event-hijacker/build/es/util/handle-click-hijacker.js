import { DATA_CLICK_HIJACK_IGNORE } from '../const';
/**
 * 处理一个 hijacker 对象
 */

export default function handleClickHijacker(el, e, hijacker) {
  if (el.hasAttribute(DATA_CLICK_HIJACK_IGNORE)) {
    return false;
  }

  var condition = hijacker.condition,
      callback = hijacker.callback,
      noPreventDefault = hijacker.noPreventDefault,
      noStopPropagation = hijacker.noStopPropagation;
  var result = condition(el);

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