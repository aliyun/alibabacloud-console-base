import { EMessageBroadcastByApp } from '../../const';
import subscribeByConsoleBase from '../../util/subscribe-by-console-base';
/**
 * console-base 响应设置地域分组列表
 */

export default function onSetRegionGroups(fn) {
  return subscribeByConsoleBase(EMessageBroadcastByApp.REGION_SET_REGION_GROUPS, fn);
}