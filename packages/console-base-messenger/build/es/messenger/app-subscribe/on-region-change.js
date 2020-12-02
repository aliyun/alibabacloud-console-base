import { EMessageBroadcastByConsoleBase } from '../../const';
import subscribeByApp from '../../util/subscribe-by-app';
/**
 * 地域切换时的回调
 */

export default function onRegionChange(fn) {
  return subscribeByApp(EMessageBroadcastByConsoleBase.REGION_CHANGE, fn);
}