import { EMessageBroadcastByApp } from '../../const';
import subscribeByConsoleBase from '../../util/subscribe-by-console-base';
/**
 * console-base 响应设置地域列表
 */

export default function onSetRegions(fn) {
  return subscribeByConsoleBase(EMessageBroadcastByApp.REGION_SET_REGIONS, fn);
}