import { EMessageBroadcastByApp } from '../../const';
import subscribeByConsoleBase from '../../util/subscribe-by-console-base';
/**
 * console-base 响应设置当前选中的资源组
 */

export default function onSetResourceGroupResourceCount(fn) {
  return subscribeByConsoleBase(EMessageBroadcastByApp.RESOURCE_GROUP_SET_RESOURCE_COUNT, fn);
}