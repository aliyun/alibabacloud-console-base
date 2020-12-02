import { EMessageBroadcastByApp } from '../../const';
import subscribeByConsoleBase from '../../util/subscribe-by-console-base';
/**
 * console-base 响应设置地域 ID
 */

export default function onSetRegionId(fn) {
  return subscribeByConsoleBase(EMessageBroadcastByApp.REGION_SET_ID, fn);
}