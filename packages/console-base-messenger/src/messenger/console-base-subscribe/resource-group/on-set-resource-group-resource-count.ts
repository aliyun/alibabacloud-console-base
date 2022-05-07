import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

/**
 * console-base 响应设置当前选中的资源组
 */
export default function onSetResourceGroupResourceCount(fn: (payload: Record<string, number>) => void): () => void {
  return subscribeByConsoleBase<Record<string, number>>(EMessageBroadcastByApp.RESOURCE_GROUP_SET_RESOURCE_COUNT, fn);
}
