import { subscribe, subscribeOnce } from '@alicloud/post-message';
import { slsSubscribeByApp } from '../util/sls';
/**
 * 应用订阅消息，需要记录日志
 */

export default function subscribeByApp(type, fn) {
  slsSubscribeByApp(type, fn);
  return subscribe(type, fn);
}
/**
 * 应用订阅单次消息，需要记录日志
 */

export function subscribeOnceByApp(type, fn) {
  slsSubscribeByApp(type, fn);
  return subscribeOnce(type, fn);
}