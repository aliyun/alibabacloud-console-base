import { EMessageBroadcastByApp } from '../../const';
import subscribeByConsoleBase from '../../util/subscribe-by-console-base';
/**
 * console-base 响应隐藏/展示资源组选择器
 */

export default function onToggleResourceGroup(fn) {
  return subscribeByConsoleBase(EMessageBroadcastByApp.RESOURCE_GROUP_TOGGLE, fn);
}