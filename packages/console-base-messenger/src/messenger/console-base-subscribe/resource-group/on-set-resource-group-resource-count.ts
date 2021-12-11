import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  subscribeByConsoleBase
} from '../../../util';

/**
 * console-base 响应设置当前选中的资源组
 */
export default function onSetResourceGroupResourceCount(fn: (payload: Record<string, number>) => void): () => void {
  return subscribeByConsoleBase<Record<string, number>>(EMessageBroadcastByApp.RESOURCE_GROUP_SET_RESOURCE_COUNT, fn);
}
