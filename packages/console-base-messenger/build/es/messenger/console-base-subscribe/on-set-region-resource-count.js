import { EMessageBroadcastByApp } from '../../const';
import subscribeByConsoleBase from '../../util/subscribe-by-console-base';
/**
 * console-base 响应设置地域资源数
 */

export default function onSetRegionResourceCount(fn) {
  return subscribeByConsoleBase(EMessageBroadcastByApp.REGION_SET_RESOURCE_COUNT, fn);
}