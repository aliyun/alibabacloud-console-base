import { EMessageBroadcastByConsoleBase } from '../../const';
import subscribeByApp from '../../util/subscribe-by-app';
/**
 * 资源组切换时的回调
 */

export default function onResourceGroupChange(fn) {
  return subscribeByApp(EMessageBroadcastByConsoleBase.RESOURCE_GROUP_CHANGE, fn);
}